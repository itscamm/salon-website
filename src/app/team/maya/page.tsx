export default function MayaPage() {
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
            src='/images/Maya2.jpg'
            alt='Maya'
            className='h-full w-full object-cover'
          />
        </div>
        {/* Info */}
        <div>
          <h1 className='text-4xl font-semibold md:text-5xl'>Maya</h1>
          <p className='mt-3 text-neutral-400'>
            Hello lovelies! I’m Maya - an alternative hairstylist at Nine Lives
            Salon in Capitola. I specialize in curly cuts, vivid colors, and
            alternative styles. I love working with texture, movement, and bold
            self-expression but I’m just as happy creating natural,
            low-maintenance, and simple cuts that fit your everyday life. I’m
            all about versatility—whether you want a bright transformation or a
            natural, effortless cut, I’ve got you! I’m proud to offer a safe,
            inclusive, queer-friendly space where everyone can feel comfortable,
            confident, and inspired. Hair should be fun, creative, and uniquely
            yours. I believe hair is a form of self-expression, and everyone
            deserves to feel seen and safe in the salon chair. Come as you are—I
            can’t wait to create something beautiful together. Feel free to
            tweak if it’s too long !
          </p>

          <a
            className='mt-6 inline-block rounded-xl bg-blue-400 px-5 py-3 text-sm font-semibold text-black hover:opacity-90'
            href='https://bookwithmaya.as.me/schedule/86b68931'
            target='_blank'
            rel='noreferrer'
          >
            Book with Maya
          </a>
        </div>
      </div>
    </main>
  );
}
