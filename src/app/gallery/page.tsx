export default function GalleryPage() {
  return (
    <main className='bg-neutral-950 text-neutral-100'>
      <div className='mx-auto max-w-6xl px-4 py-14'>
        <h1 className='text-4xl font-semibold tracking-tight md:text-5xl'>
          Gallery
        </h1>
        <p className='mt-3 max-w-2xl text-neutral-400'>
          Portfolio photos coming soon. For now, here’s the vibe — bold color,
          clean cuts, and shiny finishes.
        </p>

        <div className='mt-10 grid grid-cols-2 gap-4 md:grid-cols-4'>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className='aspect-square rounded-2xl bg-neutral-900 ring-1 ring-neutral-800'
            />
          ))}
        </div>

        <div className='mt-10 rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
          <p className='text-sm text-neutral-300'>
            Want your hair featured here? Tag us when you post your new look.
          </p>
        </div>
      </div>
    </main>
  );
}
