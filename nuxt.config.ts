// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    css: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    }
  }
})
