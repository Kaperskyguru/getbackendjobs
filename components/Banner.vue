<template>
  <div class="top z-0">
    <div
      class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-full text-white overflow-hidden video px-5"
    >
      <div class="absolute inset-0">
        <img
          src="~/assets/christin-hume-unsplash.jpg"
          alt="Background Image"
          class="object-cover object-center w-full h-full"
        />
        <div
          class="absolute inset-0 bg-black opacity-40 bg-gradient-to-r from-purple-900 to-blue-900"
        ></div>
      </div>

      <div
        class="relative flex flex-col justify-center items-center h-full text-center"
      >
        <div class="absolute left-0 top-0 mt-5 lg:flex gap-3 w-20 h-auto">
          <nuxt-link href="/">
            <img src="~/assets/logo.png" class="w-full" alt="" />
          </nuxt-link>
        </div>

        <div class="absolute right-0 top-0 mt-5 lg:flex gap-3 hidden">
          <a href="#" class="px-3 py-2 text-white border rounded-lg"> Login </a>
          <a
            href="#"
            class="px-3 py-2 text-white rounded-lg text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600"
          >
            Sign Up
          </a>
          <a
            href="/hire-backend"
            class="px-3 py-2 text-white bg-red-500 rounded-lg text-lg font-bold"
          >
            Post a Backend Job
          </a>
        </div>

        <h1
          v-if="title"
          class="text-5xl font-bold leading-tight mb-4 capitalize"
        >
          {{ title }}
        </h1>

        <h1 v-else class="text-5xl font-bold leading-tight mb-4">
          Unlock Your <span class="lg:text-6xl font-black">Backend</span> Future
        </h1>

        <p
          v-if="subtitle"
          class="text-lg font-black text-white mb-8 capitalize"
        >
          {{ subtitle }}
        </p>
        <p v-else class="text-lg font-black text-white mb-8">
          Find the Tailored
          <span class="text-2xl font-black">Backend Job</span> or the Perfect
          <span class="text-2xl font-black">Backend Talent</span>.
        </p>
      </div>
    </div>

    <div class="">
      <svg viewBox="0 0 1440 120" fill="#fbfaf8" class="wave absolute bottom-0">
        <path
          d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    defualt: "",
  },
  subtitle: {
    type: String,
    defualt: "",
  },
});
</script>

<style>
</style>