export default function AshleighPage() {
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
            src='/images/ashleigh2.jpg'
            alt='Ashleigh'
            className='h-full w-full object-cover'
          />
        </div>
        {/* Info */}
        <div>
          <h1 className='text-4xl font-semibold md:text-5xl'>Ashleigh</h1>
          <div className='mt-3 space-y-4 text-neutral-400'>
            <p>
              Hi, I’m Ashleigh. I’m a vivid, alt loving stylist in Capitola with
              5 years behind the chair. I’m inspired by drag and queer art,
              anime, and punk music, plus a little divorced dad rock.
            </p>

            <p>
              I specialize in alternative hair, razor haircuts, and vivid color,
              but I also love soft, blendy highlights and transformations. I
              work with your natural texture and lifestyle so your hair looks
              great long after you leave the salon.
            </p>

            <p>
              Want something fun? Ask for a raccoon tail or the latest chaotic
              trend. My chair is queer inclusive and judgment free. If you’re
              exploring your style, stepping into confidence, or just want hair
              that finally feels like you, I’ve got you.
            </p>

            <p>
              Off the clock I’m a cozy game enthusiast, romantasy reader, and
              professional cat cuddler. On the clock, I’m here to make some sick
              hair.
            </p>
          </div>

          <a
            className='mt-6 inline-block rounded-xl bg-pink-500 px-5 py-3 text-sm font-semibold text-white hover:opacity-90'
            href='https://ashonthemoonbooking.as.me/schedule/b9551587'
            target='_blank'
            rel='noreferrer'
          >
            Book with Ashleigh
          </a>
        </div>
      </div>
    </main>
  );
}
