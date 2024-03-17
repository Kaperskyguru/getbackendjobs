import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/main.css"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },

  extends: ["~/layouts/base"],

  vite: {
    plugins: [
      svgLoader({
        defaultImport: "component", // or 'raw'
      }),
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
