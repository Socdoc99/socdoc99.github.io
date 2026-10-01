import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Build-time only: these fonts are never shipped to the browser. Satori
// needs TTF/OTF/WOFF (not WOFF2), so this uses the static @fontsource
// packages instead of the @fontsource-variable ones the site itself ships.
function loadFont(specifier: string): Buffer {
  return readFileSync(fileURLToPath(import.meta.resolve(specifier)));
}

const manropeBold = loadFont('@fontsource/manrope/files/manrope-latin-700-normal.woff');
const manropeRegular = loadFont('@fontsource/manrope/files/manrope-latin-400-normal.woff');
const monoMedium = loadFont('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff');

// Same values as the --bg/--fg/--accent/--border tokens in global.css.
// Satori can't read CSS custom properties, so they're mirrored here once.
const COLORS = {
  bg: '#0b0f14',
  fg: '#e6e8eb',
  fgMuted: '#9aa4b2',
  accent: '#5ec9b0',
  border: '#222b36',
} as const;

interface OgImageInput {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Rendered as the footer line; falls back to the site owner's name when omitted. */
  tags?: string[];
}

// The canvas is a fixed 1200x630 regardless of how long the source copy is
// (project summaries can run past 500 characters, stacks past 8 items), so
// both inputs are capped here rather than trusting the caller — this is
// what was actually overflowing the LOVE / LSC image before this was added.
const SUBTITLE_MAX_CHARS = 170;
const MAX_TAGS = 5;

function truncate(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  const cut = text.slice(0, maxChars);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxChars)}…`;
}

export async function renderOgImage({ eyebrow, title, subtitle, tags = [] }: OgImageInput): Promise<Buffer> {
  const visibleTags = tags.slice(0, MAX_TAGS);
  const tagsLine = tags.length
    ? visibleTags.join('   ·   ') + (tags.length > MAX_TAGS ? '   ·   …' : '')
    : 'Santiago Ospina Calle';

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '36px',
          width: '1200px',
          height: '630px',
          padding: '72px',
          backgroundColor: COLORS.bg,
          fontFamily: 'Manrope',
          overflow: 'hidden',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                fontFamily: 'JetBrains Mono',
                fontSize: 24,
                color: COLORS.accent,
                letterSpacing: 2,
              },
              children: eyebrow,
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '22px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: 58,
                      fontWeight: 700,
                      color: COLORS.fg,
                      lineHeight: 1.15,
                      maxWidth: '980px',
                    },
                    children: title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: 27,
                      color: COLORS.fgMuted,
                      lineHeight: 1.45,
                      maxWidth: '920px',
                    },
                    children: truncate(subtitle, SUBTITLE_MAX_CHARS),
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: 'auto',
                borderTop: `1px solid ${COLORS.border}`,
                paddingTop: '26px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: COLORS.accent,
                      display: 'flex',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontFamily: 'JetBrains Mono',
                      fontSize: 21,
                      color: COLORS.fgMuted,
                    },
                    children: tagsLine,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Manrope', data: manropeBold, weight: 700, style: 'normal' },
        { name: 'Manrope', data: manropeRegular, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: monoMedium, weight: 500, style: 'normal' },
      ],
    }
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return resvg.render().asPng();
}
