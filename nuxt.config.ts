export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/common.css", "@/assets/css/themes.css"],
  modules: ["vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {},
  },
});
