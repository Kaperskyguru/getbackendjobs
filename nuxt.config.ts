import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/main.css"],
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title:
        "Remote Backend Engineering Jobs in Programming, Software Engineering, Backend Engineering and more",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Looking for a backend engineering job? Get Backend Jobs is the #1 Backend Engineering Job Board and has 50,000+ backend jobs as a Backend Developer, Backend Engineer, Remote Backend Engineer, Remote Backend Software Developer, Remote Backend Software Engineer and more! Find your backend engineering career where you can work remotely from anywhere.",
        },

        {
          hid: "keywords",
          name: "keywords",
          content: `remote backend jobs, C# Backend Jobs, PHP Backend Jobs, Java Backend Jobs, JavaScript Backend Jobs, Rust Backend Jobs, Golang Backend Jobs`,
        },

        {
          hid: "og:title",
          property: "og:title",
          content: `Remote Backend Engineering Jobs in Programming, Software Engineering, Backend Engineering and more`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `Looking for a backend engineering job? Get Backend Jobs is the #1 Backend Engineering Job Board and has 50,000+ backend jobs as a Backend Developer, Backend Engineer, Remote Backend Engineer, Remote Backend Software Developer, Remote Backend Software Engineer and more! Find your backend engineering career where you can work remotely from anywhere.`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://res.cloudinary.com/kaperskydisk/image/upload/v1710945111/Get%20Backend%20Jobs/hero.png`,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://getbackendjobs.com`,
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "100",
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "100",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },

        {
          hid: "twitter:creator",
          property: "twitter:creator",
          content: "@getbackendjobs",
        },

        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        // {
        //   type: "application/ld+json",
        //   textContent: {
        //     "@context": "http://schema.org",
        //     "@graph": [
        //       {
        //         "@type": "WebPage",
        //         author: { "@id": "#identity" },
        //         copyrightHolder: { "@id": "#identity" },
        //         copyrightYear: new Date(),
        //         creator: { "@id": "#creator" },
        //         dateModified: new Date(),
        //         datePublished: "2019-06-06T10:10:00-07:00",
        //         description:
        //           "Looking for a backend engineering job? Get Backend Jobs is the #1 Backend Engineering Job Board and has 50,000+ backend jobs as a Backend Developer, Backend Engineer, Remote Backend Engineer, Remote Backend Software Developer, Remote Backend Software Engineer and more! Find your backend engineering career where you can work remotely from anywhere.",
        //         headline: "Get Backend Jobs",
        //         image: {
        //           "@type": "ImageObject",
        //           url: "/logo.png",
        //         },
        //         inLanguage: "en-us",
        //         mainEntityOfPage: "https://getbackendjobs.com/",
        //         name: "Get Backend Jobs",
        //         publisher: { "@id": "#creator" },
        //         url: "https://getbackendjobs.com",
        //       },
        //       { "@id": "#identity", "@type": "LocalBusiness", priceRange: "$" },
        //       { "@id": "#creator", "@type": "Organization" },
        //       {
        //         "@type": "BreadcrumbList",
        //         description: "Breadcrumbs list",
        //         itemListElement: [
        //           {
        //             "@type": "ListItem",
        //             item: "https://getbackendjobs.com/",
        //             name: "Tailored Backend Jobs",
        //             position: 1,
        //           },
        //           {
        //             "@type": "ListItem",
        //             item: "https://getbackendjobs.com/categories/remote",
        //             name: "Remote Backend Jobs",
        //             position: 2,
        //           },
        //           {
        //             "@type": "ListItem",
        //             item: "https://getbackendjobs.com/signup",
        //             name: "Job Application Tracker & CRM",
        //             position: 3,
        //           },
        //           {
        //             "@type": "ListItem",
        //             item: "https://getbackendjobs.com/signup",
        //             name: "Application Streak",
        //             position: 4,
        //           },
        //         ],
        //         name: "Breadcrumbs",
        //       },
        //     ],
        //   },
        // },
      ],
    },
  },

  modules: ["@nuxtjs/cloudinary", "@vueuse/nuxt", "@nuxt/content"],

  content: {},

  nitro: {
    prerender: {
      routes: ["/feeds.xml"],
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },

  runtimeConfig: {
    public: {
      gtagId: process.env.GTAG_ID,
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      apiID: process.env.FIREBASE_APP_ID,
      cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
      appEnv: process.env.NODE_ENV,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      lemon_API_key: process.env.LEMON_API_KEY,
      lemon_store: process.env.LEMON_STORE,
      lemon_variant: process.env.LEMON_VARIANT,
      baseURL: process.env.BASE_URL,
      tinymce: process.env.TINYMCE,
    },
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
