<template>
  <main>
    <div class="shadow">
      <div
        class="py-4 mb-5 flex justify-between items-center w-full overflow-hidden"
      >
        <div class="lg:flex gap-3 w-20 h-auto">
          <nuxt-link href="/">
            <img
              src="~/assets/logo.png"
              class="w-full"
              alt="getbackendjobs logo"
            />
          </nuxt-link>
        </div>

        <div class="px-4">
          <a href="/blog" class="px-4 py-2 text-black text-xl rounded">
            Blog
          </a>

          <a
            href="/hire-backend"
            class="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded"
          >
            Post Backend Job
          </a>
        </div>
      </div>
    </div>
    <div class="pt-10 pb-16 lg:pt-16 lg:pb-24 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
        <ContentDoc v-slot="{ doc }">
          <article
            class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
          >
            <header class="mb-4 lg:mb-6 not-format">
              <h1
                class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
              >
                {{ doc.title }}
              </h1>
            </header>
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style>
article p {
  @apply py-3 text-lg;
}

article h2 {
  @apply py-4 text-2xl;
}

article h3 {
  @apply py-3 text-xl;
}

article h4 {
  @apply py-2 text-lg;
}

article h2,
article h3,
article h4,
article h5,
article h6 {
  @apply font-bold;
}

article ul,
article ol {
  @apply list-disc px-5;
}

article img {
  @apply py-3;
}

article li {
  @apply py-1;
}
</style>