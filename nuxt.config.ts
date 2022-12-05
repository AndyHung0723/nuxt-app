// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true,
  },
  css: ['@/assets/styles/main.scss'],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "@/assets/styles/variable.scss";',
  //       },
  //     },
  //   },
  // },
});
