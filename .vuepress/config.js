module.exports = {
  title: 'Futures Festival',
  description: 'Just playing around',
  head: [
    [ 'link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png'} ],
    [ 'link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap' } ],
    [ 'link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap' } ],
    [ 'link', { rel: 'stylesheet', href: 'https://unpkg.com/normalize.css@8.0.1/normalize.css' } ],
    [ 'link', { rel: 'stylesheet', href: 'https://unpkg.com/@clr/core@4.0.0/styles/module.layout.min.css' } ],
  ],
  themeConfig: {
    logo: '/images/logo.svg',
    search: false,
    nav: [
      { text: 'Register', link: 'https://www.apf.org/events/register.aspx?id=1397920' },
      { text: 'Sessions', link: '/sessions/' },
      { text: 'Speakers', link: '/speakers/' },
      { text: 'About', link: '/about' },
    ]
  },
  plugins: [
    [ 
      '@vuepress/blog', 
      {
        directories: [
          {
            id: 'sessions',
            dirname: '_sessions',
            layout: 'Sessions',
            itemLayout: 'Session',
            path: '/sessions/',
            itemPermalink: '/sessions/:year/:slug'
          },
          {
            id: 'speakers',
            dirname: '_sessions',
            layout: 'Speakers',
            itemLayout: 'Speaker',
            path: '/speakers/',
            itemPermalink: '/speakers/:year/:slug'
          }
        ]
      },
    ],
  ]
}