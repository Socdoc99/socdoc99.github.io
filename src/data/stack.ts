import type { Locale } from '../i18n/config';

interface StackItem {
  name: Record<Locale, string>;
  inPractice?: boolean;
}

interface StackGroup {
  label: Record<Locale, string>;
  items: StackItem[];
}

const same = (value: string): Record<Locale, string> => ({ es: value, en: value });

export const stackGroups: StackGroup[] = [
  {
    label: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { name: same('SQL') },
      { name: same('PostgreSQL') },
      { name: same('SQL Server') },
      { name: same('Firebase (Firestore/Auth)') },
      { name: same('Supabase'), inPractice: true },
    ],
  },
  {
    label: { es: 'Backend', en: 'Backend' },
    items: [
      { name: same('Python (Django, Django REST Framework)') },
      { name: same('Node.js') },
    ],
  },
  {
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: same('JavaScript') },
      { name: same('TypeScript') },
      { name: same('React') },
      { name: same('Angular') },
      { name: same('Ionic') },
    ],
  },
  {
    label: { es: 'Automatización', en: 'Automation' },
    items: [{ name: same('n8n'), inPractice: true }],
  },
  {
    label: { es: 'Nube', en: 'Cloud' },
    items: [
      {
        name: same('Azure (App Service, Key Vault, AI Search, IaC con Bicep)'),
        inPractice: true,
      },
    ],
  },
  {
    label: { es: 'Otros', en: 'Other' },
    items: [
      { name: same('Git / GitHub') },
      { name: { es: 'Control de versiones', en: 'Version control' } },
      {
        name: {
          es: 'Consumo y diseño de APIs REST',
          en: 'Designing and consuming REST APIs',
        },
      },
    ],
  },
];
