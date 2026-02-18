'use client';

import Link from 'next/link';
//import { usePathname } from 'next/navigation';

export default function SiteHeader() {
  //const pathname = usePathname();
  //const isHome = pathname === '/';

  return (
    <>
      {/* Header 1: Logo (ONLY on home, scrolls away) 
      {isHome && (
        <header className='bg-neutral-950'>
          <div className='mx-auto max-w-6xl px-4 py-5'>
            <div className='flex justify-center'>

              <img
                src='/images/Salon Logo.png'
                alt='Salon Cats'
                className='w-[95%] max-w-[1000px] rounded-3xl object-contain sm:h-32 md:h-40 lg:h-100'
              />
            </div>
          </div>
        </header>
      )}

      {/* Header 2: Nav (ALL pages, sticks while scrolling) */}
      <header className='sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/85 backdrop-blur'>
        <nav className='mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-sm text-neutral-200'>
          <Link className='hover:text-white' href='/'>
            Home
          </Link>
          <Link className='hover:text-white' href='/team'>
            Stylists
          </Link>
          <Link className='hover:text-white' href='/services'>
            Services
          </Link>
          <Link className='hover:text-white' href='/gallery'>
            Gallery
          </Link>
          <Link className='hover:text-white' href='/#contact'>
            Contact
          </Link>

          <Link
            href='/team'
            className='ml-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200'
          >
            Book Now
          </Link>
        </nav>
      </header>
    </>
  );
}
