<template>
  <div
    class="flex md:flex-row flex-col group bg-white pl-2 md:justify-between md:rounded-lg rounded justify-start items-center gap-3 container mx-auto lg:w-3/4 w-full px-2 border-t md:border border-dashed border-red-600 md:pr-20 pr-5"
  >
    <span class="flex md:flex-row flex-col py-3 md:py-0 justify-between w-full">
      <div class="flex md:flex-row flex-col items-center gap-3 w-full">
        <div><Avatar size="normal" src="/yourlogo.png" name="Your Logo" /></div>
        <div class="py-4">
          <div>
            <h2 class="text-2xl z-20 text-gray-700">
              Your brand here

              <!-- seen by (<a
                target="_blank"
                class="text-red-600 underline"
                href="https://plausible.io/getbackendjobs.com?period=30d"
                >{{
                  new Intl.NumberFormat("en", {
                    notation: "compact",
                  }).format(pageviews)
                }}/mo</a
              >) people -->
            </h2>
          </div>
          <div class="py-1 flex">
            <p class="text-lg text-gray-400">
              Imagine your business here

              <!-- with over (<a
                target="_blank"
                href="https://plausible.io/getbackendjobs.com?period=30d"
                >{{
                  new Intl.NumberFormat("en", {
                    notation: "compact",
                  }).format(pageviews)
                }}/mo </a
              >) pageviews -->
            </p>
          </div>
        </div>
      </div>
      <div
        class="relative flex items-center md:w-2/6 w-full justify-center"
        style="align-content: baseline"
      >
        <button
          disabled
          class="border-dashed group-hover:hidden text-gray-400 border border-gray-400 px-5 rounded-lg py-1"
        >
          Your call to action
        </button>

        <a
          @click.prevent="adClickEvent('pages_ad')"
          href="https://tally.so/r/wblgQ6"
          target="_blank"
          class="border-dashed bg-gradient-to-r from-purple-600 to-blue-600 text-white hidden group-hover:block text-white border border-gray-400 px-5 rounded-lg py-1"
        >
          Click here to advertize
        </a>
      </div>
    </span>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const pageviews = ref(0);

function adClickEvent(location = "homepage_ad") {
  useTrackEvent("place_ad", { props: { from: location, action: "click" } });
  window.open("https://tally.so/r/wblgQ6");
}

async function getPlausableStat() {
  try {
    const res = await useFetch(
      "https://plausible.io/api/v1/stats/aggregate?site_id=getbackendjobs.com&period=30d&metrics=pageviews",
      {
        onRequest({ request, options }) {
          // Set the request headers
          options.headers = options?.headers || {};
          options.headers.authorization =
            "Bearer " + config.public?.plausibleKey;
        },
      }
    );
    const results = res.data.value?.results;

    pageviews.value = results?.pageviews?.value ?? 0;
  } catch (error) {
    console.log(error);
  } finally {
  }
}

await getPlausableStat();
</script>

<style>
</style>