import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem('theme');
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the toggle still works for this view.
  }
}

export default function ThemeToggle({
  labelToggle,
  labelLight,
  labelDark,
}: {
  labelToggle: string;
  labelLight: string;
  labelDark: string;
}) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = getStoredTheme();
    const current =
      stored ??
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(current);
  }, []);

  if (theme === null) {
    return (
      <button
        type="button"
        aria-label={labelToggle}
        className="h-9 w-9 rounded border border-[var(--border)]"
      />
    );
  }

  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      aria-label={theme === 'dark' ? labelLight : labelDark}
      title={theme === 'dark' ? labelLight : labelDark}
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
      className="flex h-9 w-9 items-center justify-center rounded border border-[var(--border)] text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
    </button>
  );
}
