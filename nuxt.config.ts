import tailwindcss from "@tailwindcss/vite";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/tails.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'theme-color', content: '#292e47' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
