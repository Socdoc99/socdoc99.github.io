import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { renderOgImage } from '../../../../lib/ogImage';

export const prerender = true;

export const getStaticPaths = (async () => {
  const projects = await getCollection('projects-en');
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project },
  }));
}) satisfies GetStaticPaths;

interface Props {
  project: CollectionEntry<'projects-en'>;
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const { project } = props;
  const png = await renderOgImage({
    eyebrow: 'SOCDOC.TECH · PROJECT',
    title: project.data.title,
    subtitle: project.data.summary,
    tags: project.data.stack,
  });

  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  });
};
