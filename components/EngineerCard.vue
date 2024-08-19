<script setup lang="ts">
defineProps<{
  slug?: string;
}>();
</script>
<template>
  <NuxtLink :to="slug">
    <div
      class="rounded-3xl border border-gray-100 bg-white hover:bg-white/60 hover:border-gray-200 p-2 shadow-2xl shadow-gray-600/10"
    >
      <div class="relative gap-6 flex flex-col">
        <div
          class="flex rounded-2xl border-2 border-gray-100 overflow-hidden relative"
        >
          <span class="absolute bg-red-500 text-white left-0 px-5 rounded-b"
            >Featured</span
          >
          <img
            class="w-full aspect-[5/4] object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
            alt="company logo"
          />
        </div>
        <div class="mb-2 px-6 space-y-6">
          <div class="">
            <h2 class="text-xl font-semibold text-gray-800">
              Atakereke Ajagunna
            </h2>
            <p class="mt-2 text-gray-600">TransferGo</p>
            <div
              class="flex gap-y-2 sm:gap-6 lg:grid grid-cols-3 flex-wrap my-4"
            >
              <div
                class="relative flex items-center before:absolute before:inset-y-0 before:-left-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-green-400"
              >
                <span
                  class="rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-xs tracking-wider text-green-900"
                  >Remote</span
                >
              </div>
              <div
                class="relative flex items-center before:absolute before:inset-y-0 before:-left-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-red-400"
              >
                <span
                  class="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-xs tracking-wider text-red-900"
                  >Bayero</span
                >
              </div>
              <div
                class="relative flex items-center before:absolute before:inset-y-0 before:-left-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-green-400"
              >
                <span
                  class="rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-xs tracking-wider text-green-900"
                  >Full time</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
