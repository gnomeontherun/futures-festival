module.exports = {
  title: 'Futures Festival',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap' } ],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap' } ],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/normalize.css@8.0.1/normalize.css' } ],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/@clr/core@4.0.0/styles/module.layout.min.css' } ],
  ],
  themeConfig: {
    logo: '/images/logo.svg',
    search: false,
    nav: [
      { text: 'Speakers', link: '/speakers' }
    ]
  }
}