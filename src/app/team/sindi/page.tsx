export default function SindiPage() {
  return (
    <main className='mx-auto max-w-6xl px-4 py-14'>
      <a className='text-sm text-neutral-400 hover:opacity-70' href='/#team'>
        ← Back to home
      </a>

      <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/* Photo */}
        <div className='aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-800 ring-1 ring-neutral-700'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/images/Sindi2.jpg'
            alt='Sindi'
            className='h-full w-full object-cover'
          />
        </div>
        {/* Info */}
        <div>
          <h1 className='text-4xl font-semibold md:text-5xl'>Sindi</h1>
          <div className='mt-3 space-y-4 text-neutral-400'>
            <p>
              Hi there, I’m Sindi. I’m an alternative hairstylist at Nine Lives
              Salon, specializing in creative vivid color and alternative cuts.
            </p>

            <p>
              I love all things bold and expressive, including scene and emo
              styles, vibrant colors, and custom creative designs. Hair health
              and integrity are always my top priority, so we’ll build a look
              that stays strong and healthy.
            </p>

            <p>
              During your consultation, we’ll go over your vision in detail so
              we’re fully aligned every step of the way. Whether you want vivid
              transformations and edgy cuts, or something classic, low
              maintenance, or tailored to enhance your natural curls, I’m here
              for it.
            </p>

            <p>
              I can’t wait to meet you and create some fun hair. Click the link
              below to book your appointment.
            </p>
          </div>

          <a
            className='mt-6 inline-block rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:opacity-90'
            href='https://bookwithsindi.as.me/schedule/ab649dad'
            target='_blank'
            rel='noreferrer'
          >
            Book with Sindi
          </a>
        </div>
      </div>
    </main>
  );
}
