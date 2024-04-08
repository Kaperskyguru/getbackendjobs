<template>
  <div class="relative">
    <section>
      <Banner />
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

// useHead({
//   "@context": "https://schema.org/",
//   "@type": "JobPosting",
//   title: "Software Engineer",
//   description:
//     "<p>Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.</p>",
//   identifier: {
//     "@type": "PropertyValue",
//     name: "Google",
//     value: "1234567",
//   },
//   datePosted: "2017-01-18",
//   validThrough: "2017-03-18T00:00",
//   employmentType: "CONTRACTOR",
//   hiringOrganization: {
//     "@type": "Organization",
//     name: "Google",
//     sameAs: "https://www.google.com",
//     logo: "https://www.example.com/images/logo.png",
//   },
//   jobLocation: {
//     "@type": "Place",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "1600 Amphitheatre Pkwy",
//       addressLocality: "Mountain View",
//       addressRegion: "CA",
//       postalCode: "94043",
//       addressCountry: "US",
//     },
//   },
//   baseSalary: {
//     "@type": "MonetaryAmount",
//     currency: "USD",
//     value: {
//       "@type": "QuantitativeValue",
//       value: 40.0,
//       unitText: "HOUR",
//     },
//   },
// });
</script>

<style>
</style>