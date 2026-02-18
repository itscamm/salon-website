import { FaInstagram, FaTiktok } from 'react-icons/fa';

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
          <div className='mt-3 space-y-4 text-neutral-400'>
            <p>
              Hello lovelies, I’m Maya. I’m an alternative hairstylist at Nine
              Lives Salon in Capitola.
            </p>

            <p>
              I specialize in curly cuts, vivid colors, and alternative styles.
              I love working with texture, movement, and bold self expression,
              but I’m just as happy creating natural, low maintenance cuts that
              fit your everyday life.
            </p>

            <p>
              I’m all about versatility. Whether you want a bright
              transformation or a simple effortless cut, I’ve got you.
            </p>

            <p>
              I’m proud to offer a safe, inclusive, queer friendly space where
              everyone can feel comfortable and confident. Come as you are. I
              can’t wait to create something beautiful together.
            </p>
          </div>

          <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a
              className='inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:opacity-90'
              href='https://bookwithmaya.as.me/schedule/86b68931'
              target='_blank'
              rel='noreferrer'
            >
              Book with Maya
            </a>

            <div className='grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:items-center sm:gap-2'>
              <a
                href='https://www.instagram.com/lunarcathairr/'
                target='_blank'
                rel='noreferrer'
                aria-label='Maya on Instagram'
                className='inline-flex w-full items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-neutral-100 hover:bg-neutral-800 sm:h-11 sm:w-11 sm:p-0'
              >
                <FaInstagram className='h-6 w-6' />
              </a>

              <a
                href='https://www.tiktok.com/@lunarcathairr'
                target='_blank'
                rel='noreferrer'
                aria-label='Maya on TikTok'
                className='inline-flex w-full items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-neutral-100 hover:bg-neutral-800 sm:h-11 sm:w-11 sm:p-0'
              >
                <FaTiktok className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
