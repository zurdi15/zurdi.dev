export default defineNuxtConfig({
  app: {
    head: {
      title: "MLOps and Full Stack | zurdi.dev",
      meta: [
        {
          name: "description",
          content: "MLOps by profession, Full Stack by passion.",
        },
        // Open Graph
        { property: "og:title", content: "MLOps and Full Stack | zurdi.dev" },
        {
          property: "og:description",
          content: "MLOps by profession, Full Stack by passion.",
        },
        {
          property: "og:image",
          content: "https://zurdi.dev/social-preview.png",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        { property: "og:url", content: "https://zurdi.dev" },
        { property: "og:type", content: "website" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "MLOps and Full Stack | zurdi.dev" },
        {
          name: "twitter:description",
          content: "MLOps by profession, Full Stack by passion.",
        },
        {
          name: "twitter:image",
          content: "https://zurdi.dev/social-preview.png",
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
