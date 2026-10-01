import type { APIRoute } from 'astro';
import { renderOgImage } from '../../../lib/ogImage';
import { t } from '../../../i18n/strings';

export const prerender = true;

export const GET: APIRoute = async () => {
  const strings = t('es');
  const png = await renderOgImage({
    eyebrow: 'SOCDOC.TECH',
    title: strings.hero.name,
    subtitle: strings.hero.tagline,
  });

  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  });
};
