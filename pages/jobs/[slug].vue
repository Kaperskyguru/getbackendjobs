<template>
  <div class="relative">
    <section>
      <Banner @openMenu="showFloatingPanel = true" :is-full="true" />
    </section>

    <div class="page md:mx-auto md:container">
      <section class="md:my-0 mt-10 px-2">
        <PostJobAd />
      </section>

      <section id="vert">
        <div
          class="flex md:flex-row flex-col group bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 pl-2 md:justify-between md:rounded-lg rounded justify-start items-center gap-3 container mx-auto md:w-3/4 w-full px-2 md:mt-3 border-t md:border border-solid border-gray-300 md:pr-20 pr-5"
        >
          <div class="flex md:flex-row flex-col items-center gap-3 w-full">
            <div><Avatar size="normal" name="Mastering Backend" /></div>
            <div class="py-4">
              <div>
                <h2 class="text-2xl">Become A Great Backend Engineer</h2>
              </div>
              <div class="py-1 flex">
                <p class="text-lg">
                  Kickstart or advance your software engineering career with the
                  latest backend strategies, tips, and tactics working today.
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative flex items-center md:w-2/6 w-full justify-center"
            style="align-content: baseline"
          >
            <a href="https://app.masteringbackend.com?ref=getbackendjobs">
              <button
                class="px-10 flex text-black left-1 py-2 bg-red-600 rounded-full bg-white"
              >
                Sign up today
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="vet" class="py-2 md:mt-3">
        <placeAds />
      </section>

      <section>
        <Job
          :bg-color="
            job?.highlight_post_yellow
              ? 'blue'
              : job?.show_color
              ? job?.brand_color
              : 'white'
          "
          :is-full="true"
          :job="job"
        />
      </section>
    </div>

    <FloatingPanel
      :visible="showFloatingPanel"
      @closed="showFloatingPanel = false"
    >
    </FloatingPanel>
  </div>
</template>

<script setup>
import { generate } from "text-to-image";
const job = ref({});
const loading = ref(false);
const showFloatingPanel = ref(false);
const config = useRuntimeConfig();

const query = computed(() => {
  let id = useRoute()?.query?.id;
  let slug = useRoute()?.params?.slug;

  if (!id) return `?slug=${slug}`;
  return `?slug=${id}&id=${id}`;
});

const link = computed(() => {
  if (!job.value?.slug) return `/jobs/${job.value?.id}?id=${job.value?.id}`;
  return `/jobs/${job.value?.slug}`;
});

async function getJob() {
  try {
    loading.value = true;

    const { data } = await useFetch(`/api/jobs${query.value}`);

    job.value = data.value?.result[0];
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
await getJob();

async function generateImage() {
  try {
    const dataUri = await generate(
      `${job.value?.company_name} is hiring \n\n Role: ${
        job.value?.position
      } \n\n Locations: ${job.value?.locations?.join(
        ", "
      )} \n\n\n by getbackendjobs.com`,
      {
        debug: true,
        debugFilename: `./public/jobs/${useRoute().params?.slug}.png`,
        maxWidth: 750,
        fontSize: 30,
        fontWeight: "bold",
        lineHeight: 30,
        customHeight: 400,
        margin: 30,
      }
    );
    return dataUri;
  } catch (error) {}
}

// await generateImage();

function updateViews() {}

useHead({
  title: `${job.value?.position} (${job.value?.locations?.join(", ")}) at ${
    job.value?.company_name
  }`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: `${job.value?.company_name} is hiring a ${
        job.value?.position
      } (${job.value?.locations?.join(", ")})`,
    },

    {
      hid: "og:title",
      property: "og:title",
      content: `${job.value?.position} (${job.value?.locations?.join(
        ", "
      )}) at ${job.value?.company_name}`,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: `${job.value?.company_name} is hiring a ${
        job.value?.position
      } (${job.value?.locations?.join(", ")})`,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `/jobs/${useRoute().params?.slug}.png`,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `/jobs/${useRoute().params?.slug}`,
    },
    {
      hid: "og:image:width",
      property: "og:image:width",
      content: "100",
    },
    {
      hid: "og:image:height",
      property: "og:image:height",
      content: "100",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "website",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],

  link: [
    {
      rel: "canonical",
      href: `${config.public.baseURL}${link.value}`,
    },
  ],
});
</script>

<style>
</style>