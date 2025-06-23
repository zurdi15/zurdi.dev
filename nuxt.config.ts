export default defineNuxtConfig({
  app: {
    head: {
      title: "MLOps and Full Stack | zurdi.dev",
      meta: [
        {
          name: "description",
          content: "MLOps by profession, Full Stack by passion.",
        },
        {
          name: "robots",
          content: "index, follow",
        },
      ],
      link: [{ rel: "canonical", href: "https://zurdi.dev" }],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "@/assets/css/common.css",
    "@/assets/css/themes.css",
    "aos/dist/aos.css",
  ],
  modules: ["vuetify-nuxt-module", "@nuxtjs/i18n"],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {},
  },
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.ts" },
      { code: "es", name: "Español", file: "es.ts" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    detectBrowserLanguage: false,
  },
  vite: {
    server: {
      allowedHosts: ["ginnugagap", "dev.zurdi.dev.ginnugagap.net"],
    },
  },
});
