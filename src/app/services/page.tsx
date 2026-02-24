const SERVICES = [
  {
    title: 'Haircuts',
    desc: 'Bang trims, clipper cuts, standard + big transformations',
    price: 'Starting at $50',
    more: {
      blurb:
        'Most cuts include a wash, treatment, and finished style. Book transformative if you want a big change or have extra length or density.',
      items: [
        'Bang trim: $25 to $35',
        'Short haircut: $50 to $60',
        'Haircut: $60 to $65',
        'Transformative haircut: $75 to $80',
      ],
    },
  },
  {
    title: 'Color No Bleach',
    desc: 'Root touch ups, gloss and toner, all over permanent color',
    price: 'Starting at $110',
    more: {
      blurb:
        'For natural shades and maintenance without lightening. New color clients should book a consultation first.',
      items: [
        'Root touch up: $110 to $140',
        'Gloss or toner: $120 to $130',
        'Root touch up + gloss: $160 to $180',
        'All over permanent color: $200',
        'Color remove + gloss: $200',
      ],
    },
  },
  {
    title: 'Blonding and Highlights',
    desc: 'Highlights, balayage, global bleach, platinum retouches',
    price: 'Starting at $240',
    more: {
      blurb:
        'Foils and blonding services often include toner, treatment, trim, and a blowdry style. Consultation required for many first time blonding services.',
      items: [
        'Partial highlight: $240 to $275',
        'Full highlight: $320 to $450',
        'Balayage or foiliage: $360',
        'Global bleach: $400 to $480',
        'Global bleach retouch: $280',
      ],
    },
  },
  {
    title: 'Vivids and Creative Color',
    desc: 'Raccoon tails, color blocks, split dyes, rainbow hair',
    price: 'Starting at $125',
    more: {
      blurb:
        'Alternative placements and vivid work. Many services require a consultation, especially anything involving bleach or first time vivids.',
      items: [
        'Raccoon tails: $125 to $150',
        'Color block: $175 to $180',
        'Split dye: $320 to $330',
        'Multi color refresh no bleach: $240 to $300',
        'Rainbow or creative color: $425 to $550',
      ],
    },
  },
  {
    title: 'Retouches and Corrections',
    desc: 'Bleach retouches, vivid refreshes, big shifts and fixes',
    price: 'Starting at $240',
    more: {
      blurb:
        'For regrowth, big changes, and corrective work. If you have more than 1 inch regrowth, color correction is usually the right booking.',
      items: [
        'Bleach retouch + vivid refresh: $280 to $350',
        'Bleach root touch up + multi vivid refresh: $320 to $400',
        'Color correction: $450 to $540',
      ],
    },
  },
  {
    title: 'Extensions',
    desc: 'Consultation, ordering, and custom installs',
    price: 'Starting at $50',
    more: {
      blurb:
        'Consultation required before installs so we can match, order, and plan. Install pricing does not include hair cost.',
      items: ['Extension consultation: $50', 'Custom install: $240'],
    },
  },
  {
    title: 'Styling',
    desc: 'Blowouts, hot tool styling, packages',
    price: 'Starting at $50',
    more: {
      blurb:
        'Perfect for events or a refresh. Hot tool styling does not include shampoo. Blowouts may include a clarifying and mask treatment.',
      items: ['Hot tool styling: $50', 'Blow out: $55 to $60', 'Package: $120'],
    },
  },
  {
    title: 'Consultations',
    desc: 'Strand test, prep treatment, and a plan for your goals',
    price: 'Starting at $45',
    more: {
      blurb:
        'Required for most bleach and vivid services and recommended for new color clients. Pricing varies by stylist.',
      items: ['Color consultation: $45 to $55', 'Model consultation: varies'],
    },
  },
] as const;

export default function ServicesPage() {
  return (
    <main className='bg-neutral-950 text-neutral-100'>
      <div className='mx-auto max-w-6xl px-4 py-14'>
        <h1 className='text-4xl font-semibold tracking-tight md:text-5xl'>
          Services
        </h1>

        <p className='mt-3 max-w-5xl text-neutral-300'>
          Our stylists have <strong>individual pricing</strong>. The services
          below reflect <strong>starting rates</strong> and common ranges.
        </p>

        <p className='mt-4 text-neutral-300'>
          <strong>Final pricing may vary</strong> based on hair length, density,
          and the plan needed to achieve your desired results.
        </p>

        <p className='mt-4 text-neutral-300'>
          New clients booking <strong>color services</strong> are kindly asked
          to schedule a <strong>consultation beforehand</strong> so we can
          create the right game plan.
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

              <details className='mt-4'>
                <summary className='cursor-pointer select-none text-sm font-semibold text-neutral-200 hover:text-white'>
                  Learn more
                </summary>

                <div className='mt-3 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4'>
                  <p className='text-sm text-neutral-300'>{s.more.blurb}</p>

                  <ul className='mt-3 space-y-1 text-sm text-neutral-400'>
                    {s.more.items.map((line) => (
                      <li key={line} className='flex gap-2'>
                        <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500' />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className='mt-4 text-xs text-neutral-500'>
                    Pricing ranges are based on current stylist menus and may
                    vary by hair type and appointment needs.
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className='mt-10 rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
          <h2 className='text-lg font-semibold'>
            Nine Lives Salon Suite Policies
          </h2>

          <p className='mt-2 text-sm text-neutral-300'>
            Please read before booking: ฅ^&gt;⩊&lt;^ ฅ
          </p>

          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-300'>
            <li>
              The salon suite is a very small space. Please respect the space
              and others while you are here, as it is close quarters.
            </li>

            <li>
              <strong>Rescheduling and cancellations:</strong> Please reschedule
              or cancel at least <strong>48 hours</strong> in advance. If you
              cancel or reschedule within 48 hours, your deposit is{' '}
              <strong>non refundable</strong>.
            </li>

            <li>
              <strong>Illness:</strong> If you are sick with a cold, virus, etc
              please do not come to your appointment. Please text to let me know
              you are sick and I will reschedule you, even if it is the day of
              your appointment. If you arrive sick, even with a mask, you will
              be sent home.
            </li>

            <li>
              <strong>Late policy:</strong> If you are running late, please let
              me know. If you are over <strong>15 minutes</strong> late, your
              appointment will be cancelled and your deposit is{' '}
              <strong>non refundable</strong>.
            </li>

            <li>
              <strong>Arriving early:</strong> Please do not arrive 30 minutes
              early. There is no lobby space for multiple waiting clients.
              Please arrive at your scheduled time or up to{' '}
              <strong>10 minutes early</strong>. If you are 30 to 60 minutes
              early, feel free to walk around the shopping center or grab food
              nearby.
            </li>

            <li>
              <strong>No plus ones or pets:</strong> No additional guests or
              pets are allowed. Our suite is very small and we do not have space
              to accommodate extra people or animals.
            </li>

            <li>
              <strong>Food policy:</strong> Please avoid bringing meals into the
              suite. Drinks with lids are okay. If you need to eat before or
              after, there are great options nearby in the shopping center.
            </li>

            <li>
              <strong>No call no show:</strong> No call, no show appointments
              will be charged <strong>50% of the scheduled service</strong>. A
              card may be kept on file for this purpose.
            </li>
          </ul>

          <p className='mt-4 text-sm text-neutral-300'>
            Thank you for booking at the Nine Lives Salon Suite. I can’t wait to
            have you in my chair! ദ്ദി◝ ⩊ ◜.ᐟ
          </p>

          <p className='mt-2 text-xs text-neutral-500'>ੈ✩‧₊˚༺☆༻ੈ✩‧₊˚</p>
        </div>
      </div>
    </main>
  );
}
