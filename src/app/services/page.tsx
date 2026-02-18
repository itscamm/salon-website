const SERVICES = [
  { title: 'Haircut', desc: 'Precision cut + style', price: 'Starting at $60' },
  {
    title: 'Color',
    desc: 'All-over, retouch, gloss',
    price: 'Starting at $120',
  },
  {
    title: 'Blonding',
    desc: 'Highlights, balayage',
    price: 'Starting at $180',
  },
  { title: 'Extensions', desc: 'Consult required', price: 'Varies' },
  { title: 'Styling', desc: 'Event + blowouts', price: 'Starting at $45' },
  { title: 'Treatments', desc: 'Repair + shine', price: 'Starting at $35' },
  { title: 'Vivids', desc: 'Creative color', price: 'Starting at $200' },
  { title: 'Consult', desc: 'Plan + quote', price: 'Free / required' },
];

export default function ServicesPage() {
  return (
    <main className='bg-neutral-950 text-neutral-100'>
      <div className='mx-auto max-w-6xl px-4 py-14'>
        <h1 className='text-4xl font-semibold tracking-tight md:text-5xl'>
          Services
        </h1>
        <p className='mt-3 max-w-2xl text-neutral-400'>
          Pricing is shown as <span className='font-semibold'>starting at</span>
          . Exact quote after consultation (hair length, density, and goals).
        </p>

        <div className='mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className='rounded-2xl border border-neutral-800 bg-neutral-900 p-5'
            >
              <div className='flex items-start justify-between gap-4'>
                <h3 className='text-base font-semibold'>{s.title}</h3>
                <span className='text-sm font-semibold text-neutral-100'>
                  {s.price}
                </span>
              </div>
              <p className='mt-2 text-sm text-neutral-400'>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className='mt-10 rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
          <h2 className='text-lg font-semibold'>Policies (placeholder)</h2>
          <ul className='mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300'>
            <li>24-hour cancellation notice recommended.</li>
            <li>Late arrivals may be shortened or rescheduled.</li>
            <li>Consultations required for major changes + extensions.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
