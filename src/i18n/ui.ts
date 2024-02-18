export const languages = {
  en: 'English',
  es: 'Español'
}

export const defaultLang = 'es'

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de mi'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About me'
  }
} as const

export const showDefaultLang = false

export const routes = {
  es: {
    'acerca-de': 'acerca-de',
    blog: 'blog',
    tags: 'tags'
  },
  en: {
    'acerca-de': 'about-me',
    blog: 'blog',
    tags: 'tags'
  }
}
