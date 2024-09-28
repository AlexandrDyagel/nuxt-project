// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  ssr: false,

  routeRules: {
    "/": { redirect: "/feed" },
  },

  app: {
    rootAttrs: {
      id: "app",
    },
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
      ],
      script: [
        { src: "https://telegram.org/js/telegram-web-app.js", defer: true },
      ],
    },
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "dayjs-nuxt",
    "nuxt-typed-router",
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@prisma/nuxt",
  ],

  prisma: {
    autoSetupPrisma: true,
  },

  css: ["~/assets/css/main.css"],

  fonts: {
    families: [{ name: "montserrat", provider: "google" }],
  },

  devServer: {
    host: "192.168.31.189",
    loadingTemplate(data) {
      return `${data.loading}`;
    },
  },

  imports: {
    presets: [
      {
        from: "vue-tg",
        imports: [
          "useWebApp",
          "useWebAppPopup",
          "useWebAppBackButton",
          "useWebAppNavigation",
        ],
      },
    ],
  },
});
