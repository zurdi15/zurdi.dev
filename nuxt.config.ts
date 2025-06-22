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
      { code: "en", name: "English", file: "en.json" },
      { code: "es", name: "Español", file: "es.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    detectBrowserLanguage: {
      useCookie: true, // store the chosen locale
      cookieKey: "i18n_redirected",
      fallbackLocale: "en",
      redirectOn: "root", // run the detector only on ‘/’
      alwaysRedirect: true, // write the cookie on the first hit
    },
  },
  vite: {
    server: {
      allowedHosts: ["ginnugagap", "dev.zurdi.dev.ginnugagap.net"],
    },
  },
});
