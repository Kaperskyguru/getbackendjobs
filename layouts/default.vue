<template>
  <div>
    <div
      class="bg-yellow-400 sticky"
      style="padding: 10px; display: flex; justify-content: center"
    >
      <h2
        class="flex items-center gap-1.5 text-xs font-medium text-black md:text-base"
        style="font-size: 1rem; font-weight: bold"
      >
        Unlock Your Python Backend Career: Build 30 Projects in 30 Days.

        <a
          class="items-center gap-1.5 rounded-full bg-black px-2 py-0.5 text-sm text-xs font-medium uppercase tracking-wide text-white hover:bg-zinc-800 sm:px-3 sm:py-1"
          target="_blank"
          href="https://python30.masteringbackend.com?ref=getbackendjobs"
          >Join now for just $54</a
        >
      </h2>
    </div>
    <slot />

    <footer class="justify-center items-center flex flex-col border">
      <div class="pb-3 pt-2">
        <a
          href="https://nuxifysaas.com?ref=getbackendjobs&utm_source=getbackendjobs"
          class="border flex gap-2 items-center justify-center border-gray-400 py-1 px-5"
        >
          <p>Built with</p>
          <img
            class="w-32 h-6"
            src="https://nuxifysaas.com/images/logo.png"
            alt=""
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.privacypolicies.com/live/df632bab-6825-4049-b208-160a0f7c7990"
          target="_blank"
          >Privacy Policy</a
        >|
        <a
          href="https://www.privacypolicies.com/live/f35e34b0-f818-4639-a124-edad8fa96424"
          target="_blank"
          >Return Policy</a
        >|
        <a
          href="https://www.privacypolicies.com/live/ed3c63af-d5dd-48da-98a5-563281e2a64d"
          target="_blank"
          >Terms of service</a
        >
      </div>
    </footer>
  </div>
</template>

<script setup>
const baseURL = ref("https://getbackendjobs.com");
useHead({
  link: [
    {
      rel: "canonical",
      href: `${baseURL.value}${useRoute().path}`,
    },
  ],
});
</script>

<style>
#form-acm_46258 {
  bottom: 0px !important;
}
</style>