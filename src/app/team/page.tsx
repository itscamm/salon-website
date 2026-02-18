import Link from 'next/link';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const STYLISTS = [
  {
    name: 'Ashleigh',
    slug: 'ashleigh',
    specialty: '@riotcathair',
    booking: 'https://ashonthemoonbooking.as.me/schedule/b9551587',
    image: '/images/Ashleigh2.jpg',
    instagram: 'https://www.instagram.com/riotcathair/',
    tiktok: 'https://www.tiktok.com/@riotcathair',
    buttonClass: 'bg-pink-500 text-white hover:opacity-90',
  },
  {
    name: 'Maya',
    slug: 'maya',
    specialty: '@lunarcathairr',
    booking: 'https://bookwithmaya.as.me/schedule/86b68931',
    image: '/images/Maya2.jpg',
    instagram: 'https://www.instagram.com/lunarcathairr/',
    tiktok: 'https://www.tiktok.com/@lunarcathairr',
    buttonClass: 'bg-blue-500 text-white hover:opacity-90',
  },
  {
    name: 'Sindi',
    slug: 'sindi',
    specialty: '@straycathair',
    booking: 'https://bookwithsindi.as.me/schedule/ab649dad',
    image: '/images/Sindi2.jpg',
    instagram: 'https://www.instagram.com/straycathair/',
    tiktok: 'https://www.tiktok.com/@straycathair',
    buttonClass: 'bg-violet-500 text-white hover:opacity-90',
  },
];

export default function TeamPage() {
  return (
    <main className='bg-neutral-950 text-neutral-100'>
      <div className='mx-auto max-w-6xl px-4 py-14'>
        <h1 className='text-4xl font-semibold tracking-tight md:text-5xl'>
          Stylists
        </h1>
        <p className='mt-3 max-w-3xl text-neutral-400'>
          Book directly with your stylist using their individual link, or tap
          Learn More to see their page.
        </p>

        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {STYLISTS.map((s) => (
            <div
              key={s.slug}
              className='overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900'
            >
              {/* Photo */}
              <div className='aspect-[3/4] w-full bg-neutral-800'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.name}
                  className='h-full w-full object-cover'
                />
              </div>

              <div className='p-4'>
                <a
                  href={s.booking}
                  target='_blank'
                  rel='noreferrer'
                  className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-opacity ${s.buttonClass}`}
                >
                  Book Now
                </a>

                <Link
                  href={`/team/${s.slug}`}
                  className='mt-3 inline-flex w-full items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm font-semibold text-neutral-100 transition-colors hover:bg-neutral-800'
                >
                  Learn More
                </Link>

                <div className='mt-4'>
                  <div className='flex items-start justify-between gap-3'>
                    <div>
                      <h3 className='text-lg font-semibold leading-tight'>
                        {s.name}
                      </h3>
                      <p className='mt-1 text-sm text-neutral-400'>
                        {s.specialty}
                      </p>
                    </div>

                    <div className='flex shrink-0 gap-2'>
                      {s.instagram && (
                        <a
                          href={s.instagram}
                          target='_blank'
                          rel='noreferrer'
                          aria-label={`${s.name} on Instagram`}
                          title='Instagram'
                          className='inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 text-neutral-100 hover:bg-neutral-800'
                        >
                          <FaInstagram className='h-6 w-6' />
                        </a>
                      )}

                      {s.tiktok && (
                        <a
                          href={s.tiktok}
                          target='_blank'
                          rel='noreferrer'
                          aria-label={`${s.name} on TikTok`}
                          title='TikTok'
                          className='inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 text-neutral-100 hover:bg-neutral-800'
                        >
                          <FaTiktok className='h-6 w-6' />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
