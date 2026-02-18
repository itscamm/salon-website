export default function MayaPage() {
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
          <h1 className='text-4xl font-semibold md:text-5xl'>Maya</h1>
          <p className='mt-3 text-neutral-400'>
            Whether you’re looking for bold, creative color, crazy custom
            designs, or something more natural like soft highlights, I’m here
            for it — and for you. I’ve done my own hair more times than I can
            count, and I know the power of finding the color and style that
            actually feels like you. This is a judgment-free zone, always.
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
              href='https://bookwithmaya.as.me/schedule/86b68931'
              target='_blank'
              rel='noreferrer'
            >
              Book with Maya
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
