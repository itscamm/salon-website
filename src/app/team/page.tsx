import Link from 'next/link';

const STYLISTS = [
  {
    name: 'Ashleigh',
    slug: 'ashleigh',
    specialty: 'Vivid color • transformations',
    booking: 'https://ashonthemoonbooking.as.me/schedule/b9551587',
  },
  {
    name: 'Maya',
    slug: 'maya',
    specialty: 'Blondes • lived-in color',
    booking: 'https://bookwithmaya.as.me/schedule/86b68931',
  },
  {
    name: 'Sindi',
    slug: 'sindi',
    specialty: 'Cuts • styling',
    booking: 'https://bookwithsindi.as.me/schedule/ab649dad',
  },
];

export default function TeamPage() {
  return (
    <main className='bg-neutral-950 text-neutral-100'>
      <div className='mx-auto max-w-6xl px-4 py-14'>
        <h1 className='text-4xl font-semibold tracking-tight md:text-5xl'>
          Stylists
        </h1>
        <p className='mt-3 max-w-2xl text-neutral-400'>
          Pick your stylist — or just book the soonest available.
        </p>

        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {STYLISTS.map((s) => (
            <div
              key={s.slug}
              className='overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900'
            >
              {/* Photo placeholder */}
              <div className='aspect-[3/4] w-full bg-neutral-800' />

              <div className='p-4'>
                <a
                  href={s.booking}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200'
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
                  <h3 className='text-lg font-semibold'>{s.name}</h3>
                  <p className='mt-1 text-sm text-neutral-400'>{s.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-10 rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
          <p className='text-sm text-neutral-300'>
            Coming soon: a “Next Available” booking option if you don’t care who
            you book with.
          </p>
        </div>
      </div>
    </main>
  );
}
