'use client';

import * as React from 'react';

type Props = {
  images: string[];
  alt?: string;
};

export default function SpaceCarousel({
  images,
  alt = 'Salon space photo',
}: Props) {
  const [i, setI] = React.useState(0);
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  const n = images?.length ?? 0;

  const go = (idx: number) => {
    if (!n) return;
    setI(((idx % n) + n) % n);
  };
  const prev = () => go(i - 1);
  const next = () => go(i + 1);

  // detect "mobile-ish" to avoid jittery smooth scroll
  const isCoarse = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(pointer: coarse)').matches ?? false;
  }, []);

  // scroll to active slide
  React.useEffect(() => {
    if (!n) return;
    const el = trackRef.current;
    if (!el) return;

    const w = el.clientWidth;
    el.scrollTo({ left: i * w, behavior: isCoarse ? 'auto' : 'smooth' });
  }, [i, n, isCoarse]);

  // keep alignment on resize
  React.useEffect(() => {
    const onResize = () => {
      const el = trackRef.current;
      if (!el) return;
      const w = el.clientWidth;
      el.scrollTo({ left: i * w, behavior: 'auto' });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [i]);

  // swipe (pointer events)
  const startX = React.useRef(0);
  const startY = React.useRef(0);
  const dragging = React.useRef(false);
  const locked = React.useRef<null | 'x' | 'y'>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging.current = true;
    locked.current = null;
    startX.current = e.clientX;
    startY.current = e.clientY;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    if (!locked.current) {
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
        locked.current = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      }
    }

    // once we lock to horizontal, prevent page scroll from competing
    if (locked.current === 'x') {
      e.preventDefault();
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    const threshold = 50;
    if (Math.abs(dx) >= threshold && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) prev();
      else next();
    }
  };

  if (!n) return null;

  return (
    <div className='w-full'>
      <div className='relative mx-auto w-full max-w-[560px] md:max-w-[620px]'>
        <div
          className='overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 select-none'
          style={{ touchAction: 'pan-y' }} // allow vertical scroll, we handle horizontal swipe
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            ref={trackRef}
            className='flex w-full overflow-x-hidden'
            style={{ scrollSnapType: 'x mandatory' }}
            aria-label='Salon space carousel'
          >
            {images.map((src, idx) => (
              <div
                key={src + idx}
                className='w-full flex-none'
                style={{ scrollSnapAlign: 'start' }}
                aria-hidden={idx !== i}
              >
                <div className='aspect-[4/5] w-full'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={idx === i ? alt : ''}
                    className='h-full w-full object-cover'
                    loading='lazy'
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {n > 1 && (
          <>
            <button
              type='button'
              onClick={prev}
              aria-label='Previous image'
              className='absolute left-3 top-1/2 -translate-y-1/2 rounded-xl border border-neutral-700 bg-neutral-950/70 px-3 py-2 text-sm text-neutral-100 backdrop-blur hover:bg-neutral-900'
            >
              ←
            </button>

            <button
              type='button'
              onClick={next}
              aria-label='Next image'
              className='absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-neutral-700 bg-neutral-950/70 px-3 py-2 text-sm text-neutral-100 backdrop-blur hover:bg-neutral-900'
            >
              →
            </button>
          </>
        )}

        {n > 1 && (
          <div className='mt-3 flex justify-center gap-2'>
            {images.map((_, idx) => (
              <button
                key={idx}
                type='button'
                onClick={() => go(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full border ${
                  idx === i
                    ? 'bg-white border-white'
                    : 'bg-transparent border-neutral-600 hover:border-neutral-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
