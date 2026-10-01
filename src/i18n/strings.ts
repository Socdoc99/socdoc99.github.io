import type { Locale } from './config';

export const strings = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      stack: 'Tecnologías',
      about: 'Sobre mí',
      contact: 'Contacto',
      services: 'Servicios',
    },
    hero: {
      name: 'Santiago Ospina Calle',
      tagline: 'Desarrollador junior enfocado en bases de datos y automatización.',
      subtitle: 'Practicante en BI e infraestructura Azure DevOps · Pereira, Colombia',
    },
    language: {
      label: 'Idioma',
      switchTo: 'English',
    },
    projects: {
      title: 'Proyectos',
      intro:
        'Cuatro proyectos propios y de equipo: una plataforma de aprendizaje de Lengua de Señas Colombiana, un curador de rutas de aprendizaje con RAG, un sistema de reservas de parqueadero y un formulario de inscripción para un hackatón — cada uno en su estado real, de MVP a prototipo sin terminar.',
      listLabel: 'Lista de proyectos',
    },
    stack: {
      title: 'Tecnologías',
      intro: 'Lo que uso con regularidad, y lo que todavía estoy consolidando.',
      inPractice: 'en práctica',
    },
    about: {
      title: 'Sobre mí',
      body: 'Soy tecnólogo en Desarrollo de Software de la Universidad Tecnológica de Pereira. Me enfoco en bases de datos y automatización: me gusta entender cómo se mueven los datos dentro de un sistema y encontrar qué trabajo manual se puede quitar de en medio. Actualmente hago prácticas en BI e infraestructura en Azure DevOps, donde aprendo cómo se construyen y se despliegan soluciones de datos en un entorno real. En paralelo desarrollo proyectos propios: una plataforma de aprendizaje de Lengua de Señas Colombiana, un asistente conversacional sobre una base SQL Server como ejercicio de arquitectura en Azure, y un prototipo de reservas de parqueadero con Django. Antes de programar trabajé en atención al cliente y supervisión de equipos. De ahí me quedó la costumbre de escuchar bien el problema antes de proponer una solución y de explicar con claridad qué está listo y qué no.',
    },
    contact: {
      title: 'Contacto',
      intro: 'La forma más directa de contactarme es por correo.',
      emailLabel: 'Correo',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    services: {
      title: 'Servicios',
      intro: 'Esto es lo que puedo ofrecer como freelance o colaboración puntual.',
      items: [
        {
          title: 'Automatización de procesos',
          description:
            'Scripts e integraciones que eliminan trabajo manual repetitivo entre sistemas.',
        },
        {
          title: 'Modelado y optimización de bases de datos',
          description: 'Diseño de esquemas, consultas e índices en SQL Server y PostgreSQL.',
        },
        {
          title: 'Desarrollo backend a medida',
          description: 'APIs REST con Django REST Framework o FastAPI.',
        },
        {
          title: 'Consultoría ligera de arquitectura en Azure',
          description: 'Orientación en Key Vault, App Service e infraestructura como código (en práctica).',
        },
      ],
      ctaLabel: 'Hablemos',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      stack: 'Tech stack',
      about: 'About',
      contact: 'Contact',
      services: 'Services',
    },
    hero: {
      name: 'Santiago Ospina Calle',
      tagline: 'Junior developer focused on databases and automation.',
      subtitle: 'BI and Azure DevOps infrastructure intern · Pereira, Colombia',
    },
    language: {
      label: 'Language',
      switchTo: 'Español',
    },
    projects: {
      title: 'Projects',
      intro:
        'Four personal and team projects: a Colombian Sign Language learning platform, a RAG-based learning-roadmap curator, a parking reservation system, and a hackathon registration form — each at its real stage, from MVP to unfinished prototype.',
      listLabel: 'Project list',
    },
    stack: {
      title: 'Tech stack',
      intro: "What I use regularly, and what I'm still consolidating.",
      inPractice: 'in practice',
    },
    about: {
      title: 'About me',
      body: "I hold a software development technologist degree from Universidad Tecnológica de Pereira. I focus on databases and automation: I like understanding how data moves through a system and finding which manual work can be removed. I'm currently doing an internship in BI and Azure DevOps infrastructure, learning how data solutions are built and deployed in a real environment. Alongside it, I build my own projects: a learning platform for Colombian Sign Language, a conversational assistant over a SQL Server database as an Azure architecture exercise, and a parking reservation prototype with Django. Before programming, I worked in customer service and team supervision. That taught me to listen carefully to a problem before proposing a solution, and to explain clearly what is ready and what isn't.",
    },
    contact: {
      title: 'Contact',
      intro: 'The most direct way to reach me is by email.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    services: {
      title: 'Services',
      intro: 'Here is what I can offer as freelance or one-off collaboration.',
      items: [
        {
          title: 'Process automation',
          description: 'Scripts and integrations that remove repetitive manual work between systems.',
        },
        {
          title: 'Database modeling and optimization',
          description: 'Schema, query and index design on SQL Server and PostgreSQL.',
        },
        {
          title: 'Custom backend development',
          description: 'REST APIs with Django REST Framework or FastAPI.',
        },
        {
          title: 'Light Azure architecture consulting',
          description: 'Guidance on Key Vault, App Service and infrastructure as code (in practice).',
        },
      ],
      ctaLabel: "Let's talk",
    },
  },
} as const satisfies Record<Locale, unknown>;

export function t(locale: Locale) {
  return strings[locale];
}
