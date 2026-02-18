'use client';

import Link from 'next/link';
import * as React from 'react';

export default function HomePage() {
  return (
    <main className='relative bg-neutral-950 text-neutral-100 pt-14'>
      <header className='bg-neutral-950'>
        <div className='mx-auto max-w-6xl px-4 py-5'>
          <div className='flex justify-center'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/images/Salon Logo.png'
              alt='Salon Cats'
              className='h-28 w-[95%] max-w-[1200px] rounded-3xl object-contain sm:h-44 md:h-60 lg:h-[420px]'
            />
          </div>
        </div>
      </header>

      {/* TEAM */}
      <section id='team' className='scroll-mt-16 border-t border-neutral-800'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <h2 className='text-center text-4xl font-semibold tracking-tight md:text-5xl'>
            Meet the team
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-center text-base text-neutral-400'>
            Three stylists. Three specialties. One space built for great hair.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-3'>
            {/* Stylist 1 */}
            <div className='group overflow-hidden rounded-3xl border border-neutral-800'>
              <div className='aspect-[3/4] w-full bg-neutral-100'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/images/Ashleigh.jpg'
                  alt='Ashleigh'
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
                />
              </div>

              <div className='p-4 pt-4'>
                <a
                  href='https://ashonthemoonbooking.as.me/schedule/b9551587'
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200'
                >
                  Book Now
                </a>

                <Link
                  href='/team/ashleigh'
                  className='mt-3 inline-flex w-full items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-800'
                >
                  Learn More
                </Link>

                <div className='mt-4'>
                  <h3 className='text-lg font-semibold'>Ashleigh</h3>
                  <p className='mt-1 text-sm text-neutral-400'>@riotcathair</p>
                </div>
              </div>
            </div>

            {/* Stylist 2 */}
            <div className='group overflow-hidden rounded-3xl border border-neutral-800'>
              <div className='aspect-[3/4] w-full bg-neutral-100'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/images/Maya.jpg'
                  alt='Maya'
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
                />
              </div>

              <div className='p-4 pt-4'>
                <a
                  href='https://bookwithmaya.as.me/schedule/86b68931'
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200'
                >
                  Book Now
                </a>

                <Link
                  href='/team/maya'
                  className='mt-3 inline-flex w-full items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-800'
                >
                  Learn More
                </Link>

                <div className='mt-4'>
                  <h3 className='text-lg font-semibold'>Maya</h3>
                  <p className='mt-1 text-sm text-neutral-400'>
                    @lunarcathairr
                  </p>
                </div>
              </div>
            </div>

            {/* Stylist 3 */}
            <div className='group overflow-hidden rounded-3xl border border-neutral-800'>
              <div className='aspect-[3/4] w-full bg-neutral-100'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/images/Sindi.jpg'
                  alt='Sindi'
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
                />
              </div>

              <div className='p-4 pt-4'>
                <a
                  href='https://bookwithsindi.as.me/schedule/ab649dad'
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200'
                >
                  Book Now
                </a>

                <Link
                  href='/team/sindi'
                  className='mt-3 inline-flex w-full items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-800'
                >
                  Learn More
                </Link>

                <div className='mt-4'>
                  <h3 className='text-lg font-semibold'>Sindi</h3>
                  <p className='mt-1 text-sm text-neutral-400'>@straycathair</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className='relative'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:py-20'>
          <div className='flex flex-col justify-center'>
            <p className='text-xs font-semibold tracking-widest text-neutral-400'>
              COLOR • CUTS • EXTENSIONS • STYLING
            </p>
            <h1 className='mt-3 text-4xl font-semibold leading-tight md:text-5xl'>
              A new salon for bold color, clean cuts, and high-end vibes.
            </h1>
            <p className='mt-4 max-w-prose text-base text-neutral-400'>
              Three stylists. One space. A focus on healthy hair and a look that
              feels like you.
            </p>

            <div id='book' className='mt-7 flex flex-col gap-3 sm:flex-row'>
              <a
                href='https://your-booking-link-here.com'
                target='_blank'
                rel='noreferrer'
                className='rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200'
              >
                Book an Appointment
              </a>
              <a
                href='#services'
                className='rounded-xl border border-neutral-700 px-5 py-3 text-center text-sm font-semibold hover:bg-neutral-800'
              >
                View Services
              </a>
            </div>

            <div className='mt-8 grid grid-cols-3 gap-4 text-center'>
              <div className='rounded-2xl border border-neutral-800 p-4'>
                <div className='text-xl font-semibold'>3</div>
                <div className='mt-1 text-xs text-neutral-400'>Stylists</div>
              </div>
              <div className='rounded-2xl border border-neutral-800 p-4'>
                <div className='text-xl font-semibold'>5★</div>
                <div className='mt-1 text-xs text-neutral-400'>Experience</div>
              </div>
              <div className='rounded-2xl border border-neutral-800 p-4'>
                <div className='text-xl font-semibold'>New</div>
                <div className='mt-1 text-xs text-neutral-400'>Location</div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE PLACEHOLDER */}
          <div className='relative'>
            <div className='aspect-[4/5] w-full rounded-3xl bg-neutral-900 ring-1 ring-neutral-900' />
            <div className='absolute bottom-4 left-4 right-4 rounded-2xl bg-neutral-800 p-4 shadow-sm ring-1 ring-neutral-800 backdrop-blur'>
              <p className='text-sm font-semibold text-neutral-100'>
                Opening Special
              </p>
              <p className='mt-1 text-sm text-neutral-400'>
                Add your promo here (ex: “$20 off first color service”)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id='gallery'
        className='border-t border-neutral-800 bg-neutral-900'
      >
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <h2 className='text-2xl font-semibold'>Gallery</h2>
          <p className='mt-2 text-sm text-neutral-400'>
            Replace these blocks with real photos later.
          </p>

          <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className='aspect-square rounded-2xl bg-neutral-800 ring-1 ring-neutral-900'
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id='contact' className='border-t border-neutral-800'>
        <div className='mx-auto max-w-6xl px-4 py-14'>
          <h2 className='text-2xl font-semibold'>Contact & hours</h2>

          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='rounded-3xl border border-neutral-800 p-6'>
              <p className='text-sm font-semibold'>Location</p>
              <p className='mt-2 text-sm text-neutral-400'>
                123 Main St, Santa Cruz, CA
              </p>

              <p className='mt-5 text-sm font-semibold'>Hours</p>
              <p className='mt-2 text-sm text-neutral-400'>
                Tue–Sat: 10am–6pm <br />
                Sun–Mon: Closed
              </p>

              <p className='mt-5 text-sm font-semibold'>Email</p>
              <p className='mt-2 text-sm text-neutral-400'>
                hello@yoursalon.com
              </p>

              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <a
                  href='https://your-booking-link-here.com'
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200'
                >
                  Book Now
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-xl border border-neutral-700 px-5 py-3 text-center text-sm font-semibold hover:bg-neutral-800'
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className='rounded-3xl border border-neutral-800 p-6'>
              <p className='text-sm font-semibold'>Map</p>
              <p className='mt-2 text-sm text-neutral-400'>
                Drop a Google Maps embed here later.
              </p>
              <div className='mt-4 aspect-[16/10] w-full rounded-2xl bg-neutral-800 ring-1 ring-neutral-900' />
              <p className='mt-4 text-xs text-neutral-400'>
                (Optional) Add parking info, accessibility, and policies here.
              </p>
            </div>
          </div>

          <footer className='mt-12 border-t border-neutral-800 pt-6 text-xs text-neutral-500'>
            © {new Date().getFullYear()} Your Salon Name. All rights reserved.
          </footer>
        </div>
      </section>

      {/* eslint-disable @next/next/no-img-element */}
      <img
        src='/images/border-top-left.png'
        alt=''
        className='pointer-events-none absolute left-0 top-0 z-60 hidden md:block opacity-100'
        style={{ width: 'clamp(160px, 20vw, 340px)', height: 'auto' }}
      />

      <img
        src='/images/border-top-right.png'
        alt=''
        className='pointer-events-none absolute right-0 top-0 z-60 hidden md:block opacity-100'
        style={{ width: 'clamp(160px, 20vw, 340px)', height: 'auto' }}
      />

      <img
        src='/images/border-bot-left.png'
        alt=''
        className='pointer-events-none absolute left-0 bottom-0 z-60 hidden md:block opacity-100'
        style={{ width: 'clamp(160px, 20vw, 340px)', height: 'auto' }}
      />

      <img
        src='/images/border-bot-right.png'
        alt=''
        className='pointer-events-none absolute right-0 bottom-0 z-60 hidden md:block opacity-100'
        style={{ width: 'clamp(160px, 20vw, 340px)', height: 'auto' }}
      />
      {/* eslint-enable @next/next/no-img-element */}
    </main>
  );
}
