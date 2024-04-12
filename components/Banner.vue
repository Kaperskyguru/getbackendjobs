<template>
  <div class="top z-0">
    <div
      class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-full text-white overflow-hidden video px-5"
    >
      <div class="absolute inset-0">
        <img
          src="https://res.cloudinary.com/kaperskydisk/image/upload/v1712966097/Get%20Backend%20Jobs/christin-hume-unsplash_20_1.webp"
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

        <form v-if="search" class="max-w-md w-full mx-auto pb-5">
          <div
            class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 m-4 p-1 rounded-full max-w-sm"
          >
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              @input="onSearch"
              class="block p-3 w-full rounded-full focus:outline-none w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
              placeholder="backend engineers, remote backend roles"
            />
          </div>
        </form>
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
const emit = defineEmits(["search"]);
const props = defineProps({
  title: {
    type: String,
    defualt: "",
  },
  search: {
    default: true,
    type: Boolean,
  },
  subtitle: {
    type: String,
    defualt: "",
  },
});

function onSearch(e) {
  console.log(e);
  emit("search", e?.target?.value);
}
</script>

<style>
</style>