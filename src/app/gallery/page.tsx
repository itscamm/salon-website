import Image from 'next/image';

type GalleryImg = {
  src: string;
  alt: string;
};

type StylistSection = {
  id: 'ashleigh' | 'maya' | 'sindi';
  name: string;
  tagline: string;
  featured: GalleryImg[];
  grid: GalleryImg[];
};

const toItems = (
  basePath: string,
  names: string[],
  ext: string,
  altPrefix: string
): GalleryImg[] =>
  names.map((n) => ({
    src: `${basePath}/${n}.${ext}`,
    alt: `${altPrefix} ${n}`,
  }));

const ASHLEIGH_ALL: GalleryImg[] = [
  ...toItems(
    '/images/gallery',
    [
      'AG2',
      'AG1',
      'AG5',
      'AG4',
      'AG3',
      'AG6',
      'AG7',
      'AG8',
      'AG9',
      'AG10',
      'AG11',
    ],
    'png',
    "Ashleigh's work"
  ),
];

const MAYA_ALL: GalleryImg[] = [
  ...toItems(
    '/images/gallery',
    [
      'MG1',
      'MG2',
      'MG3',
      'MG4',
      'MG5',
      'MG6',
      'MG7',
      'MG8',
      'MG9',
      'MG10',
      'MG11',
      'MG12',
      'MG13',
      'MG14',
      'MG15',
      'MG16',
      'MG17',
    ],
    'jpg',
    "Maya's work"
  ),
];

const SINDI_ALL: GalleryImg[] = [
  ...toItems(
    '/images/gallery',
    [
      'SG1',
      'SG2',
      'SG3',
      'SG4',
      'SG5',
      'SG6',
      'SG7',
      'SG8',
      'SG9',
      'SG10',
      'SG11',
      'SG12',
      'SG13',
      'SG14',
      'SG15',
      'SG16',
      'SG17',
      'SG18',
      'SG19',
      'SG20',
      'SG21',
    ],
    'jpg',
    "Sindi's work"
  ),
];

const SECTIONS: StylistSection[] = [
  {
    id: 'ashleigh',
    name: 'Ashleigh',
    tagline: '@riotcathair',
    featured: ASHLEIGH_ALL.slice(0, 3),
    grid: ASHLEIGH_ALL.slice(3),
  },
  {
    id: 'maya',
    name: 'Maya',
    tagline: '@lunarcathairr',
    featured: MAYA_ALL.slice(0, 3),
    grid: MAYA_ALL.slice(3),
  },
  {
    id: 'sindi',
    name: 'Sindi',
    tagline: '@straycathair',
    featured: SINDI_ALL.slice(0, 3),
    grid: SINDI_ALL.slice(3),
  },
];

function FeaturedMosaic({ items }: { items: GalleryImg[] }) {
  const [a, b, c] = items;

  return (
    <div className='mt-6 grid gap-4 md:grid-cols-12 md:grid-rows-2'>
      {/* Big left */}
      <div className='relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-neutral-800 md:col-span-7 md:row-span-2 h-[640px] md:h-[740px]'>
        <Image
          src={a.src}
          alt={a.alt}
          fill
          className='object-cover [object-position:center_20%]'
          sizes='(min-width: 768px) 60vw, 100vw'
        />
      </div>

      {/* Top right (more square) */}
      <div className='relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-neutral-800 md:col-span-5 md:row-start-1 h-[360px] md:h-[360px]'>
        <Image
          src={b.src}
          alt={b.alt}
          fill
          className='object-cover [object-position:center_20%]'
          sizes='(min-width: 768px) 40vw, 100vw'
        />
      </div>

      {/* Bottom right (more square) */}
      <div className='relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-neutral-800 md:col-span-5 md:row-start-2 h-[360px] md:h-[360px]'>
        <Image
          src={c.src}
          alt={c.alt}
          fill
          className='object-cover [object-position:center_20%]'
          sizes='(min-width: 768px) 40vw, 100vw'
        />
      </div>
    </div>
  );
}

function GridGallery({ items }: { items: GalleryImg[] }) {
  return (
    <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
      {items.map((img, i) => (
        <div
          key={img.src + i}
          className='relative overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-neutral-800'
        >
          <div className='relative aspect-square'>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className='object-cover'
              sizes='(min-width: 768px) 25vw, 50vw'
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className='bg-neutral-950 text-neutral-100'>
      <div id='top' className='h-0 w-0' />
      <div className='mx-auto max-w-6xl px-4 py-14'>
        <h1 className='text-4xl font-semibold tracking-tight md:text-5xl'>
          Gallery
        </h1>
        <p className='mt-3 max-w-2xl text-neutral-400'>
          A few featured looks from each stylist, plus a full gallery below.
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='#ashleigh'
            className='rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800'
          >
            Ashleigh
          </a>
          <a
            href='#maya'
            className='rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800'
          >
            Maya
          </a>
          <a
            href='#sindi'
            className='rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800'
          >
            Sindi
          </a>
        </div>

        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className='mt-14 scroll-mt-24'>
            <div className='flex items-end justify-between gap-6'>
              <div>
                <h2 className='text-2xl font-semibold'>{s.name}’s Work</h2>
                <p className='mt-1 text-sm text-neutral-400'>{s.tagline}</p>
              </div>
              <a
                href='#top'
                className='hidden text-xs text-neutral-500 hover:text-neutral-300 md:inline'
              >
                Back to top
              </a>
            </div>

            <FeaturedMosaic items={s.featured} />
            <GridGallery items={s.grid} />
          </section>
        ))}

        <div className='mt-14 rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
          <p className='text-sm text-neutral-300'>
            Want your hair featured here? Tag us when you post your new look.
          </p>
        </div>
      </div>
    </main>
  );
}
