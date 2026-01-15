const config = {
  logo: <span style={{ fontWeight: 700 }}>Knowledge</span>,
  project: {
    link: ''
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Knowledge'
    }
  },
  primaryHue: 210,
  primarySaturation: 100,
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  feedback: {
    content: null
  },
  editLink: {
    text: null
  },
  footer: {
    text: 'Du concret, pas de bullshit'
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  },
  navigation: {
    prev: true,
    next: true
  }
}

export default config
