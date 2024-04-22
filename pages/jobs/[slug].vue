<template>
  <div class="relative">
    <section>
      <Banner :is-full="true" />
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

      <section>
        <Job :is-full="true" :job="job" />
      </section>
    </div>
  </div>
</template>

<script setup>
const job = ref({});
const loading = ref(false);

const query = computed(() => {
  let id = useRoute()?.query?.id;
  let slug = useRoute()?.params?.slug;

  if (!id) return `?slug=${slug}`;
  return `?slug=${id}&id=${id}`;
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

function updateViews() {}
updateViews();

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
      content: `https://res.cloudinary.com/kaperskydisk/image/upload/v1710945111/Get%20Backend%20Jobs/hero.png`,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `/${useRoute().params?.slug}`,
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
});
</script>

<style>
</style>