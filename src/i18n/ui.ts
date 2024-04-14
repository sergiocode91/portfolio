export const languages = {
  en: 'English',
  es: 'Español',
}

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.blog': 'Blog',
    'nav.projects': 'Proyectos',
  },
} as const;

export const routes = {
  en: {
    home: 'home',
    about: 'about',
    blog: 'blog',
    projects: 'projects',
  },
  es: {
    home: 'inicio',
    about: 'sobre-mi',
    blog: 'blog',
    projects: 'proyectos',
  },
} as const;