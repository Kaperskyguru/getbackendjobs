<template>
  <nuxt-link
    :to="link"
    style="opacity: 0.5; filter: saturate(0)"
    class="border border-dashed border-gray-300 text-black bg-white py-2 px-3 flex rounded-full w-full items-center gap-2"
  >
    <span class="text-inherit"> 🤓</span>
    <p>{{ title }}</p>
  </nuxt-link>
</template>

<script setup>
import WorldIcon from "~/assets/world.svg";

const props = defineProps(["title", "link"]);
</script>

<style>
</style>