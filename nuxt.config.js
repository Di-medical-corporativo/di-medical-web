module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Di-medical corporativo | Lo más selecto de las mejores marcas para el mercado hospitalario.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Di-medical corporativo, empresa mexicana dedicada a la importación y distribución de equipo médico y material de curación.' },
      { hid: 'keywords', name: 'keywords', content: 'dimedical, di-medical, di-medical corporativo ,dimedical del sur, dimedical corporativo, material medico' },
      { hid: 'author', name: 'author', content: 'Di-medical corporativo' },
      { hid: 'og-title', name: 'og:title', content: 'Di-medical corporativo | Lo más selecto de las mejores marcas para el mercado hospitalario.' },
      { hid: 'og-type', name: 'og:type', content: 'website' },
      { hid: 'og-url', name: 'og:url', content: `https://www.dimedicalcorporativo.mx/` },
      { hid: 'og-description', name: 'og:description', content: 'Di-medical corporativo, empresa mexicana dedicada a la importación y distribución de equipo médico y material de curación.' },
      { hid: 'og-image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2FlogoCorporativo.png?alt=media&token=ca32a756-7656-4259-b5b7-921c11a0a3e8' }
    ],


    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logoCorporativo.ico' }
    ]
  },

  css: [
    '~/assets/styles/main',
    'aos/dist/aos.css'
  ],

  loading: {
    color: "#c28400",
    height: "4px",
    throttle: 0
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios,
    '@nuxtjs/axios',
    'nuxt-lazy-load',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  sitemap: {
    hostname: 'https://www.dimedicalcorporativo.mx',
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    exclude: [
        '/policy/privacy',
    ],
    routes: [
        {
            url: '/products/detail/-N98PCOj4EB0M8aKzrVI',
            changefreq: 'daily',
            priority: 1,
            lastmod: '2022-10-31T13:30:00.000Z'
        },
        {
            url: '/products/detail/-N98ejov7R7OLcD0bvhj',
            changefreq: 'daily',
            priority: 1,
            lastmod: '2022-10-31T13:30:00.000Z'
        },
        {
            url: '/products/detail/-N98nNnI9MA39ZJ5jVyX',
            changefreq: 'daily',
            priority: 1,
            lastmod: '2022-10-31T13:30:00.000Z'
        },
    ]
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://dimedicalcorporativo.mx/sitemap.xml'
  },

  styleResources: {
    scss: ['~/assets/styles/mixins.scss', '~/assets/styles/variables.scss']
  },

  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  plugins: [{ src: '~/plugins/aos', ssr: false }],
  
}
