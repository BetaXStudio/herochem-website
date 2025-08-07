

import Link from 'next/link';

const categories = [
  { name: 'INJEKTION', slug: 'injektion' },
  { name: 'ORAL', slug: 'oral' },
  { name: 'POSTCYCLE', slug: 'postcycle' },
  { name: 'FAT BURNER', slug: 'fat-burner' },
  { name: 'SEXUAL WELLNESS', slug: 'sexual-wellness' },
  { name: 'PEPTIDE & HGH', slug: 'peptide-hgh' },
  { name: 'SARMS', slug: 'sarms' },
  { name: 'AMINOSÄUREN', slug: 'aminosaeuren' },
  { name: 'ALLE PRODUKTE', slug: 'all' },
];

export default function Collections() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <nav className="flex flex-col gap-2 py-4">
      {categories.map((cat) => {
        const active = pathname.includes(`/search/${cat.slug}`) || (cat.slug === 'all' && pathname === '/search');
        return (
          <Link
            key={cat.slug}
            href={cat.slug === 'all' ? '/search' : `/search/${cat.slug}`}
            className={`px-3 py-2 rounded text-sm font-medium transition-colors ${active ? 'bg-neutral-800 text-white dark:bg-neutral-300 dark:text-black' : 'hover:bg-neutral-700 hover:text-white dark:hover:bg-neutral-700 dark:hover:text-white'}`}
          >
            {cat.name}
          </Link>
        );
      })}
    </nav>
  );
}
