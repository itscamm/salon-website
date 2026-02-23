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

  // Hooks must be ABOVE any early returns
  React.useEffect(() => {
    if (!n) return;
    const el = trackRef.current;
    if (!el) return;

    const w = el.clientWidth;
    el.scrollTo({ left: i * w, behavior: 'smooth' });
  }, [i, n]);

  React.useEffect(() => {
    if (!n) return;
    const el = trackRef.current;
    if (!el) return;

    const onResize = () => {
      const w = el.clientWidth;
      el.scrollTo({ left: i * w, behavior: 'auto' });
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [i, n]);

  // Early return AFTER hooks
  if (!n) return null;

  return (
    <div className='w-full'>
      <div className='relative mx-auto w-full max-w-[560px] md:max-w-[620px]'>
        <div className='overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900'>
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
