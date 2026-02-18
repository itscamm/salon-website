export default function AshleighPage() {
  return (
    <main className='mx-auto max-w-6xl px-4 py-14'>
      <a className='text-sm text-neutral-400 hover:opacity-70' href='/#team'>
        ← Back to home
      </a>

      <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/* Photo */}
        <div className='aspect-[3/4] rounded-3xl bg-neutral-800' />

        {/* Info */}
        <div>
          <h1 className='text-4xl font-semibold md:text-5xl'>Ashleigh</h1>
          <p className='mt-3 text-neutral-400'>
            Bio here. What she specializes in, vibe, etc.
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
              href='https://ashonthemoonbooking.as.me/schedule/b9551587'
              target='_blank'
              rel='noreferrer'
            >
              Book with Ashleigh
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
