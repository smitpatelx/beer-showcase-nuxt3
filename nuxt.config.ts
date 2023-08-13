import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: import.meta.env.NODE_ENV === 'development' },
  typescript: {
    shim: false,
  },
  modules: [
    '@pinia/nuxt',
  ],
  alias: {
    '@/interfaces': path.resolve(__dirname, 'interfaces'),
    '@/api': path.resolve(__dirname, 'api'),
    '@/store': path.resolve(__dirname, 'store'),
  },
  imports: {
    dirs: [
      './interfaces',
      './store',
    ],
    presets: [
      {
        from: 'pinia',
        imports: ['storeToRefs']
      },
    ]
  },
  app: {
    head: {
      title: 'Beer Showcase | Nuxt 3',
      meta: [
        { name: 'description', content: 'Filter through your favourite list of beers.' }
      ],
    }
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    }
  },
  components: {
    dirs: [
      { path: '~/components/beer', prefix: '' },
      { path: '~/components/filters', prefix: '' },
      { path: '~/components/generic', prefix: '' },
      '~/components',
    ],
  }
})
