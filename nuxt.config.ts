export default defineNuxtConfig({
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
      { code: "es", name: "Español", iso: "es-ES", file: "es.json" },
      { code: "en", name: "English", iso: "en-US", file: "en.json" },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
  },
  vite: {
    server: {
      allowedHosts: ["ginnugagap", "dev.zurdi.dev.ginnugagap.net"],
    },
  },
});
