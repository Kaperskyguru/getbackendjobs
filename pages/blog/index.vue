<template>
  <main>
    <div class="shadow">
      <div
        class="py-4 mb-5 flex justify-between items-center w-full overflow-hidden"
      >
        <div class="lg:flex gap-3 w-20 h-auto">
          <nuxt-link href="/">
            <img src="~/assets/logo.png" class="w-full" alt="" />
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

    <div class="container mx-auto max-w-3xl p-8 grow mt-10">
      <div>
        <ContentList path="/blog" v-slot="{ list }">
          <div
            class="mb-8 border-dotted border-b pb-8 border-gray-300"
            v-for="article in list"
            :key="article._path"
          >
            <h1 class="font-bold text-4xl py-2">
              <a class="block" :href="article._path">{{ article.title }}</a>
            </h1>

            <p class="excerpt">
              {{ article.description }}
            </p>

            <!-- <span
            class="block md:inline md:float-right md:pt-4 pt-2 created-date"
            datetime="Sat Oct 08 2016 19:00:00 GMT-0500 (Central Daylight Time)"
          >
            October 9, 2016
          </span> -->
          </div>
        </ContentList>
      </div>

      <!-- <div>
      <div class="md:flex justify-evenly mb-6">
        <div class="flex justify-between mx-auto w-full">
          <div class="mx-auto mb-4">
            <a class="next-page md:mb-2" href="/blog/page/2/">Previous Page</a>
          </div>
        </div>

        <div class="flex justify-between mx-auto w-full">
          <div class="mx-auto">
            <a class="last-page" href="/blog/page/2/">Last Page</a>
          </div>
        </div>
      </div>

      <p class="text-center text-sm italic mb-10">(On page 1 of 2.)</p>
    </div> -->
    </div>
  </main>
</template>

<script setup>
</script>

<style>
</style>