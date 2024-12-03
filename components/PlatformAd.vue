<template>
  <div class="text-white rounded-lg bg-[#011727] my-5 md:w-1/2 mx-auto">
    <div class="relative" :style="{ backgroundColor: white }">
      <div class="pb-3" :style="`border-bottom: 4px solid ${bgColor}`">
        <div class="p-4">
          <h3 class="text-3xl text-[#8B5CF6] pb-3">Whenever you're ready</h3>
          <p>
            There are 4 ways we can help you become a great backend engineer:
          </p>
        </div>
      </div>
      <div class="py-3 px-4">
        <a
          target="_blank"
          :href="`https://app.masteringbackend.com?ref=getbackendjobs&utm_source=getbackendjobs&utm_medium=blog&utm_campaign=${campaign}`"
        >
          <div
            class="flex md:flex-row flex-col items-center justify-center py-1"
          >
            <div class="lg:w-25">
              <img class="w-full" src="~/assets/img/3.png" alt="" />
            </div>
            <div class="w-full">
              <h4 class="text-2xl" style="color: #fff">The MB Platform</h4>

              <p>
                Join 1000+ backend engineers learning backend engineering. Build
                real-world backend projects, learn from expert-vetted courses
                and roadmaps, track your learnings and set schedules, and solve
                backend engineering tasks, exercises, and challenges.
              </p>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          :href="`https://masteringbackend.com/academy?ref=getbackendjobs&utm_source=getbackendjobs&utm_medium=blog&utm_campaign=${campaign}`"
        >
          <div
            class="flex md:flex-row flex-col items-center justify-center py-2 border-t border-solid border-gray-600"
          >
            <div class="lg:w-25">
              <img class="w-full" src="~/assets/img/2.png" alt="" />
            </div>
            <div class="w-full">
              <h4 class="text-2xl">The MB Academy</h4>
              <p>
                The “MB Academy” is a 6-month intensive Advanced Backend
                Engineering BootCamp to produce great backend engineers.
              </p>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          :href="`https://newsletter.masteringbackend.com/?ref=getbackendjobs&utm_source=getbackendjobs&utm_medium=blog&utm_campaign=${campaign}`"
        >
          <div
            class="flex md:flex-row flex-col items-center justify-center py-2 border-t border-solid border-gray-600"
          >
            <div class="lg:w-25">
              <img class="w-full" src="~/assets/img/1.png" alt="" />
            </div>
            <div class="w-full">
              <h4 class="text-2xl">Join Backend Weekly</h4>
              <p>
                If you like post like this, you will absolutely enjoy our
                exclusive weekly newsletter, Sharing exclusive backend
                engineering resources to help you become a great Backend
                Engineer.
              </p>
            </div>
          </div>
        </a>

        <a
          target="_blank"
          :href="`https://getbackendjobs.com?ref=getbackendjobs&utm_source=getbackendjobs&utm_medium=blog&utm_campaign=${campaign}`"
        >
          <div
            class="flex md:flex-row flex-col items-center justify-center py-2 border-t border-solid border-gray-600"
          >
            <div class="lg:w-25">
              <img class="w-full" src="~/assets/img/1.png" alt="" />
            </div>
            <div class="w-full">
              <h4 class="text-2xl">Get Backend Jobs</h4>
              <p>
                Find over 2,000+ Tailored International Remote Backend Jobs or
                Reach 50,000+ backend engineers on the #1 Backend Engineering
                Job Board
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "#64748B",
    },
  },

  computed: {
    campaign() {
      return this.$route?.params?.slug ?? "post_details";
    },
  },
};
</script>

<style>
</style>