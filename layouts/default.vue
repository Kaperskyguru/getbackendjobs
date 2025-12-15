<template>
  <div>
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
