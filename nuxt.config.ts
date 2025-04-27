// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: '/portfolio/' // Set the base URL for GitHub Pages
  },
  nitro: {
    prerender: {
      routes: ['/'] // Define routes to prerender
    }
  }
})