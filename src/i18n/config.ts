export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Builds a path for the given locale. `path` has no leading or trailing slash
 * (e.g. `''` for home, `'projects'` for the projects index).
 * Astro's i18n routing drops the prefix for the default locale (`prefixDefaultLocale: false`).
 */
export function localePath(locale: Locale, path = ''): string {
  const segment = locale === defaultLocale ? '' : `${locale}/`;
  return `/${segment}${path}`;
}

/** URL path segment per locale for each section — kept distinct so URLs read naturally in both languages. */
export const routes = {
  es: {
    projects: 'proyectos',
    stack: 'tecnologias',
    about: 'sobre-mi',
    contact: 'contacto',
    services: 'servicios',
  },
  en: {
    projects: 'projects',
    stack: 'stack',
    about: 'about',
    contact: 'contact',
    services: 'services',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type Section = keyof (typeof routes)['es'];

export function sectionPath(locale: Locale, section: Section): string {
  return localePath(locale, routes[locale][section]);
}

export function projectPath(locale: Locale, slug: string): string {
  return localePath(locale, `${routes[locale].projects}/${slug}`);
}
