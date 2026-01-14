export default {
  logo: <span style={{ fontWeight: 800 }}>Knowledge Base</span>,
  project: {
    link: 'https://github.com/david/knowledge-base'
  },
  docsRepositoryBase: 'https://github.com/david/knowledge-base',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Knowledge Base'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Knowledge Base" />
      <meta property="og:description" content="Dev, Network, DevOps, Security - Du concret, pas de bullshit" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 210,
  primarySaturation: 100,
  sidebar: {
    defaultMenuCollapseLevel: 1,
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
    text: (
      <span>
        Knowledge Base {new Date().getFullYear()} - Du concret, pas de bullshit
      </span>
    )
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
