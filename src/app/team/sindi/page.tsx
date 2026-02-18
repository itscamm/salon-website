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
            src='/images/Sindi.jpg'
            alt='Sindi'
            className='h-full w-full object-cover'
          />
        </div>
        {/* Info */}
        <div>
          <h1 className='text-4xl font-semibold md:text-5xl'>Sindi</h1>
          <p className='mt-3 text-neutral-400'>
            Hi there! I’m Sindi, an alternative hairstylist at Nine Lives Salon,
            specializing in creative, vivid hair color and alternative cuts. I’m
            passionate about all things bold and expressive—scene, emo, vibrant
            colors, and custom creative designs. At the same time, hair health
            and integrity are always my top priority. My goal is to help you
            achieve your dream hair without compromising the strength and health
            of your hair. During your consultation, we’ll dive into your vision
            in detail so we’re fully aligned every step of the way. Whether
            you’re ready to express your individuality with bold designs, vivid
            color transformations, and edgy cuts—or you’re looking for something
            classic, low-maintenance, or tailored to enhance your natural
            curls—I’m here for it all. I can’t wait to meet you and create some
            fun hair. Click the link below to book your appointment!
          </p>

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
