export const languages = {
  en: 'English',
  es: 'Español',
}

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.blog': 'Blog',
    'nav.projects': 'Proyectos',
  },
} as const;

export const routes = {
  en: {
    about: 'about',
    blog: 'blog',
    projects: 'projects',
  },
  es: {
    about: 'sobre-mi',
    blog: 'blog',
    projects: 'proyectos',
  },
} as const;