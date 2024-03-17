<template>
  <div
    v-if="show"
    class="rounded-xl bg-white px-5 md:w-3/4 w-full md:py-4 p-1 md:px-10 container border border-gray-300 border-solid mx-auto"
    style="bottom: -5.1em"
  >
    <div
      class="w-full md:flex-row flex-col justify-between items-center flex gap-2 z-50"
    >
      <div class="md:w-3/4 w-full px-2 md:px-0">
        <p class="text-sm font-bold">
          Hiring backend engineers? Reach 50,000+ backend engineers on the #1
          Backend Engineering Job Board
        </p>
      </div>
      <div class="w-ful justify-end gap-4 flex">
        <button
          class="bg-red-600 w-ful px-2 py-3 rounded-xl text-sm text-white"
        >
          <p class="w-full">Post a Backend Job</p>
        </button>
        <button
          @click.prevent="show = !show"
          class="border-red-600 w-ful border borser-solid px-2 py-1 rounded-xl text-sm text-red-600"
        >
          Hide this
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const show = ref(true);
</script>

<style>
</style>