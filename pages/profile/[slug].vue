<script setup lang="ts">
const engineerDetails = {
  summary: {},
  experience: {},
  education: {},
  hobbies: {},
  tools: {},
};
</script>
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

    <SectionWrapper
      :showDetails="true"
      title="Engineer Name"
      description="Hire the hottest and topmost engineers with experience from leading companies."
      background-color="bg-white"
    >
      <div class="mt-12 min-h-96 grid md:grid-cols-3 gap-6">
        <div
          class="md:col-span-2 rounded-3xl border border-gray-100 bg-white hover:bg-white/60 hover:border-gray-200 p-5 shadow-2xl shadow-gray-600/10"
        >
          <div class="p-5">
            <div>
              <div id="salary" class="py-5">
                <h2 class="text-4xl font-bold">About me</h2>
                <p class="py-4">
                  Job details are listed on the companies website regarding this
                  job. Click on the APPLY button to see more information.
                </p>
              </div>
              <div id="salary" class="py-5">
                <h2 class="text-4xl font-bold">Work experience</h2>
                <p class="py-4">
                  Salary details are listed on the companies website regarding
                  this job. Click on the APPLY button to see more information.
                </p>
              </div>
              <div id="benefits" class="py-5">
                <h2 class="text-4xl font-bold">Benefits</h2>
                <ul>
                  <p class="py-4">Click on APPLY to view more benefits</p>
                  <!--[--><!--]-->
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div
            class="grid place-items-center w-full rounded-3xl border border-gray-100 bg-white hover:bg-white/60 hover:border-gray-200 p-8 shadow-2xl shadow-gray-600/10"
          >
            <picture
              class="flex overflow-hidden grow-0 shrink-0 justify-center items-center rounded-lg border border-solid border-inherit w-full aspect-square bg-white"
            >
              <img
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Backbase"
                width="48"
                height="48"
                class="object-cover w-full h-full rounded-lg"
              />
            </picture>
            <div class="py-4 text-center">
              <h4 class="text-2xl font-black">Engineer Name</h4>
              <a href="" class="underline text-xl w-full font-bold">
                <p class="w-full"></p>
              </a>
            </div>
            <div class="py-2 w-full">
              <a href="jobDetails.applyUrl"
                ><button
                  class="px-3 py-2 bg-red-600 rounded-lg text-white w-full"
                >
                  <span> Hire me </span>
                </button></a
              >
            </div>
          </div>
          <div
            class="grid place-items-center w-full h-80 rounded-3xl border border-gray-100 bg-white hover:bg-white/60 hover:border-gray-200 p-2 shadow-2xl shadow-gray-600/10"
          >
            <span class="grid place-items-center w-full max-h-80 h-full"
              >Advertise here</span
            >
          </div>
        </div>
      </div>
    </SectionWrapper>
  </main>
</template>