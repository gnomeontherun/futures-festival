module.exports = {
  title: 'Futures Festival',
  description: 'Futures Festival is an annual online event that promotes speakers with insights around Futures Thinking, hosted by the Association of Professional Futurists.',
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
      // { text: 'Call for Speakers', link: 'https://docs.google.com/forms/d/18_FIJitIgYklewM3zIe4ewEwP2Esq7kcyRUQu-6J6F4/edit' },
      { text: 'Home', link: '/' },
      { text: 'Register', link: 'https://www.eventbrite.com/e/futures-festival-2021-tickets-182908001757' },
      { text: 'Schedule', link: '/schedule/' },
      { text: 'Sessions', link: '/sessions/' },
      { text: 'Speakers', link: '/speakers/' },
      { text: 'About', link: '/about' },
      { text: 'Archives', link: '/#archives' },

    ]
  },
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
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
          // {
          //   id: 'speakers',
          //   dirname: '_sessions',
          //   layout: 'Speakers',
          //   itemLayout: 'Session',
          //   path: '/sessions/',
          //   itemPermalink: '/sessions/:year/:slug'
          // }
        ]
      },
    ],
  ]
}