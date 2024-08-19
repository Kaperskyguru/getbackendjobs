<template>
  <div ref="el" class="max-h-screen overflow-auto">
    <div class="relaive">
      <section>
        <Banner
          @openMenu="showFloatingPanel = true"
          :title="`Find Top Backend Engineers`"
          subtitle="Hire the perfect Backend Talent for your team and project."
        />
      </section>

      <div class="relative">
        <div class="page md:mx-auto md:container">
          <section class="md:my-0 mt-10 px-2">
            <PostJobAd />
          </section>

          <section id="vert">
            <div
              class="flex md:flex-row flex-col group bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 pl-2 md:justify-between md:rounded-lg rounded justify-start items-center gap-3 container mx-auto md:w-3/4 w-full px-2 md:mt-3 border-t md:border border-solid border-gray-300 md:pr-20 pr-5"
            >
              <div class="flex md:flex-row flex-col items-center gap-3 w-full">
                <div><Avatar size="normal" name="Backend Joy" /></div>
                <div class="py-4">
                  <div>
                    <h2 class="text-2xl">Your Backend-as-a-Service Partner</h2>
                  </div>
                  <div class="py-1 flex">
                    <p class="text-lg">
                      Maybe you need a Backend-as-a-Service Partner instead.
                      Book a free consultation with the BackendJoy team.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="relative flex items-center md:w-2/6 w-full justify-center"
                style="align-content: baseline"
              >
                <a
                  target="_blank"
                  href="https://app.masteringbackend.com?ref=getbackendjobs"
                  class="px-10 flex text-black left-1 py-2 bg-red-600 rounded-full bg-white"
                >
                  Free Consultation
                </a>
              </div>
            </div>
          </section>

          <section id="vet" class="py-2 md:mt-3"><PlaceAds /></section>

          <section>
            <SectionWrapper
              title="Featured Backend Engineers"
              description="Hire the hottest and topmost backend engineers with experience from leading companies."
            >
              <div
                class="mt-12 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                <EngineerCard slug="/profile/asas" />
                <EngineerCard />
                <EngineerCard />
                <EngineerCard />
              </div>
            </SectionWrapper>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>