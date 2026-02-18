export default function SindiPage() {
  return (
    <main className='mx-auto max-w-6xl px-4 py-14'>
      <a className='text-sm text-neutral-400 hover:opacity-70' href='/#team'>
        ← Back to home
      </a>

      <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/* Photo */}
        <div className='aspect-[3/4] rounded-3xl bg-neutral-100' />

        {/* Info */}
        <div>
          <h1 className='text-4xl font-semibold md:text-5xl'>Sindi</h1>
          <p className='mt-3 text-neutral-400'>
            Hi there! I’m Sindi, an inclusive hairstylist based in Santa Cruz. I
            specialize in vivids, creative color, and alternative haircuts—and
            my mission is to help you look and feel your absolute best every
            time you sit in my chair. I’m endlessly passionate about all things
            hair! I love continuing my education, learning new techniques, and
            staying inspired so that every client receives top-tier service with
            confidence and care. Building genuine connections with my clients is
            one of my favorite parts of what I do—it’s not just about great
            hair, it’s about great vibes too. My top priority is helping you
            achieve your hair goals without compromising the health of your
            hair. During our consultation, we’ll go over your vision in detail
            so we’re aligned every step of the way. Above all else, the
            integrity and health of your hair always come first. Whether you’re
            ready to express your individuality with bold designs, vibrant
            colors, and creative cuts—or you prefer something classic,
            low-maintenance, or curly—I’m here for it all. I can’t wait to meet
            you and create something amazing together. Let’s make some hair
            magic happen! Click the link below to start your booking—your dream
            hair awaits!
          </p>

          <div className='mt-6 rounded-3xl border p-6'>
            <h2 className='text-lg font-semibold'>Pricing (starting at)</h2>

            <ul className='mt-3 space-y-2 text-sm text-neutral-400'>
              <li>Haircut — Starting at $X</li>
              <li>Color — Starting at $X</li>
              <li>Highlights — Starting at $X</li>
              <li>Gloss/Toner — Starting at $X</li>
            </ul>

            <a
              className='mt-6 inline-block rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90'
              href='https://bookwithsindi.as.me/schedule/ab649dad'
              target='_blank'
              rel='noreferrer'
            >
              Book with Sindi
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
