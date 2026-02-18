export default function CornerBorders() {
  return (
    <div className='pointer-events-none fixed inset-0 z-40 hidden md:block'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/images/border-top-left.png'
        alt=''
        className='fixed left-0 top-0 w-[clamp(120px,18vw,260px)] -translate-x-1/3 -translate-y-1/3 object-contain'
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/images/border-top-right.png'
        alt=''
        className='fixed right-0 top-0 w-[clamp(120px,18vw,260px)] translate-x-1/3 -translate-y-1/3 object-contain'
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/images/border-bot-left.png'
        alt=''
        className='fixed left-0 bottom-0 w-[clamp(120px,18vw,260px)] -translate-x-1/3 translate-y-1/3 object-contain'
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/images/border-bot-right.png'
        alt=''
        className='fixed right-0 bottom-0 w-[clamp(120px,18vw,260px)] translate-x-1/3 translate-y-1/3 object-contain'
      />
    </div>
  );
}
