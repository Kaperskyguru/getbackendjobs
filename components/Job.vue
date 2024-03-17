<template>
  <div
    :class="{
      'bg-gradient-to-r from-purple-600 to-blue-600  text-white':
        bgColor === 'blue',

      'bg-[#ff4742] text-white': bgColor === 'red',
    }"
    class="flex group py-2 pl-2 md:justify-btween md:rounded-lg md:flex-row flex-col justify-start items-center gap-3 container mx-auto md:w-3/4 w-full px-2 md:mt-3 border-t md:border border-solid border-gray-300 md:pr-32 pr-5"
  >
    <div class="flex w-full items-center gap-5">
      <div><Avatar name="Mastering Backend" /></div>
      <div class="w-full">
        <div class="flex gap-2">
          <h2>Backend Software Engineer</h2>
          <div class="uppercase text-white text-sm">
            <span
              class="original tooltip-set"
              style="vertical-align: middle"
              title="This post was bumped by its poster 3 days ago"
              >🎈</span
            >
          </div>
          <div class="uppercase text-white text-sm">
            <span class="px-2 py-1 bg-green-600 rounded-full">verified</span>
          </div>
        </div>
        <div class="py-1 flex">
          <h3 class="text-sm">Mastering Backend</h3>
          <span class="w-8 h-8"
            ><img src="~/assets/hot2x.webp" alt="Hot 2x" class="w-full"
          /></span>
          <span class="w-8 h-8"
            ><img src="~/assets/new2x.webp" alt="New 2x" class="w-full"
          /></span>
        </div>
        <div class="flex gap-2 py-1 items-center">
          <div
            class="rounded-full w-fll flex items-center gap-1 px-2 py-1 bg-white text-black border-solid border border-gray-300"
          >
            <span>🌏</span>
            <span class="text-sm">Nigeria</span>
          </div>

          <div
            class="rounded-full w-ful flex items-center gap-1 px-2 py-1 bg-white text-black border-solid border border-gray-300"
          >
            <span>💰</span>
            <span class="text-sm">$130k-$150k</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex md:flex-row flex-col justify-around jus w-full">
      <div class="md:flex md:flex-row flex-col gap-3 hidden">
        <div
          class="rounded-full w-full flex items-center gap-3 px-2 py-1"
          :class="{
            'bg-white text-[#ff4742] border-solid border border-gray-[#ff4742]':
              bgColor === 'red',

            '  bg-white text-black border-solid border border-gray-800':
              bgColor === 'white',

            'bg-white text-black': bgColor === 'blue',
          }"
        >
          <span class="">Nigeria</span>
        </div>

        <div
          class="rounded-full w-full flex items-center gap-3 px-2 py-1"
          :class="{
            'bg-white text-[#ff4742] border-solid border border-gray-[#ff4742]':
              bgColor === 'red',

            '  bg-white text-black border-solid border border-gray-800':
              bgColor === 'white',
            'bg-white text-black': bgColor === 'blue',
          }"
        >
          <span class="">Nigeria</span>
        </div>

        <div
          class="rounded-full w-full flex items-center gap-3 px-2 py-1"
          :class="{
            'bg-white text-[#ff4742] border-solid border border-gray-[#ff4742]':
              bgColor === 'red',

            ' bg-white text-black border-solid border border-gray-800':
              bgColor === 'white',
            'bg-white text-black': bgColor === 'blue',
          }"
        >
          <span class="">Nigeria</span>
        </div>
      </div>
      <div
        class="flex relative items-center justify-center gap-5"
        style="align-content: baseline"
      >
        <span class="flex items-center gap-1"
          ><PaperClip class="" />
          <p>4h</p>
        </span>
        <button
          :class="{
            'bg-white text-[#ff4742]': bgColor === 'red',
            'bg-gradient-to-r from-purple-600 to-blue-600  text-white':
              bgColor === 'white',
          }"
          class="px-6 text-black absolute left-10 py-2 bg-red-600 rounded-full hidden group-hover:block bg-white"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import PaperClip from "~/assets/paper-clip.svg";
defineProps({
  bgColor: {
    default: "white",
    type: String,
  },
});
</script>

<style>
</style>