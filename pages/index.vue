<template>
  <div ref="el" class="max-h-screen overflow-auto">
    <div class="relaive">
      <section>
        <Banner @search="onSearch" @openMenu="showFloatingPanel = true" />
      </section>

      <div class="page lg:mx-auto lg:container">
        <section class="md:my-0 mt-10 px-2">
          <PostJobAd />
        </section>
        <section
          class="container mx-auto lg:w-3/4 w-full lg:pt-0 pt-10 px-2 my-6"
        >
          <div
            class="flex gap-2 overflow-x-auto text-black bg-white"
            style="opacity: 0.5; filter: saturate(0)"
          >
            <p class="text-gray-500 text-sm">trusted by</p>
            <div class="flex items-center gap-5">
              <div class="w-40 flex gap-2 items-center">
                <Avatar src="/logo-icon.png" /> Mastering Backend
              </div>

              <div class="w-40 flex">
                <Pressone />
              </div>

              <div class="w-40">
                <img
                  src="https://fincra.com/wp-content/uploads/2022/10/fincra-website-logo-colored-retina.png"
                  class="w-full cover"
                  alt="masteringlogo"
                />
              </div>

              <div class="flex items-center gap-2 w-40">
                <Avatar
                  src="https://bandlabtechnologies.com/static/bandlabtechnologies-logo-2a66f793177987454243fdef2cc13587.svg"
                />
                BandLab Technologies
              </div>

              <div class="flex items-center gap-2 w-40">
                <Avatar
                  src="https://media.licdn.com/dms/image/D4E0BAQFWGZ6xT4Xsxw/company-logo_200_200/0/1699546938114/wundergraph_logo?e=1721865600&v=beta&t=DrN0eGX8HldDVvtH8NyDLJ4oPoEPTPJndMx3-Og0qzg"
                />
                WunderGraph
              </div>
            </div>
          </div>
        </section>

        <section class="container mx-auto lg:w-3/4 w-full px-2 my-10">
          <div
            class="flex flex-row w-full justify-around gap-2 my-5 overflow-x-auto"
          >
            <div class="flex items-center w-full gap-5">
              <div>
                <button
                  @click.prevent="showFloatingPanel = true"
                  class="flex items-center w-20"
                >
                  <span>
                    <img
                      src="~/assets/logo.png"
                      class="w-full"
                      alt="GetbackendJob logo"
                    />
                  </span>
                  <span>
                    <svg
                      class="w-2.5 h-2.5"
                      fill="none"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div>
                <Dropdown
                  title="Filter"
                  :items="[
                    'Full-time',
                    'Part-time',
                    'Contractor',
                    'Temporary',
                    'Internship',
                    'Volunteer',
                    'Senior',
                    'Principal',
                    'Junior',
                    'Staff',
                    'Entry-Level',
                    'Intern',
                    'Cofounder',
                  ]"
                  @selected="onFilterSelected"
                />
              </div>

              <div>
                <Dropdown
                  title="Location"
                  :items="locations"
                  @selected="onLocationSelected"
                />
              </div>

              <div>
                <Dropdown
                  title="Keywords"
                  :items="[
                    'Javascript',
                    'Python',
                    'Rust',
                    'PHP',
                    'Go',
                    'Java',
                    'Backend',
                    'Engineer',
                    'Developer',
                  ]"
                  @selected="onKeywordSelected"
                />
              </div>

              <div>
                <Dropdown
                  title="Benefits"
                  :items="benefits"
                  @selected="onBenefitSelected"
                />
              </div>

              <div class="md:hidden block">
                <Dropdown
                  title="Sort By"
                  :multiple="false"
                  :items="sortItems"
                  @selected="onSortBySelected"
                />
              </div>
            </div>
            <div class="md:w-40 w-full hidden md:block">
              <Dropdown
                title="Sort By"
                :multiple="false"
                :items="sortItems"
                @selected="onSortBySelected"
              />
            </div>
          </div>

          <div class="flex overflow-x-auto gap-2">
            <div class="flex w-full gap-5">
              <div>
                <Suggested title="Remote" link="/remote-backend-jobs" />
              </div>
              <div>
                <Suggested title="Senior" link="/senior-backend-jobs" />
              </div>

              <div>
                <Suggested title="Principal" link="/principal-backend-jobs" />
              </div>

              <div>
                <Suggested title="Junior" link="/junior-backend-jobs" />
              </div>

              <div>
                <Suggested
                  title="Contractors"
                  link="/contractors-backend-jobs"
                />
              </div>

              <div>
                <Suggested
                  title="Backend Jobs in US"
                  link="/backend-jobs-in-u.s."
                />
              </div>
            </div>
          </div>
        </section>

        <section id="vert" class="p-2 md:mt-3">
          <div
            class="flex md:flex-row flex-col group bg-gradient-to-r from-purple-600 to-blue-600 text-white pl-2 md:justify-between md:rounded-lg rounded justify-start items-center gap-3 container mx-auto lg:w-3/4 w-full px-2 border-t md:border border-solid border-gray-300 md:pr-20 pr-5"
          >
            <div class="flex md:flex-row flex-col items-center gap-3 w-full">
              <div><Avatar size="normal" name="Mastering Backend" /></div>
              <div class="py-4">
                <div>
                  <h2 class="text-2xl">Become A Great Backend Engineer</h2>
                </div>
                <div class="py-1 flex">
                  <p class="text-lg">
                    Kickstart or advance your software engineering career with
                    the latest backend strategies, tips, and tactics working
                    today.
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
                @click.prevent="
                  adClickEvent(
                    'masteringbackend',
                    'https://app.masteringbackend.com?ref=getbackendjobs'
                  )
                "
                href="https://app.masteringbackend.com?ref=getbackendjobs"
                class="px-10 flex text-black left-1 py-2 bg-red-600 rounded-full bg-white"
              >
                Sign up today
              </a>
            </div>
          </div>
        </section>

        <section id="vert" class="p-2 md:mt-3">
          <PlaceAds />
        </section>

        <section class="px-2">
          <!-- Pin Jobs -->
          <span v-for="(job, i) in pinJobs" :key="i">
            <Job
              :job="job"
              v-if="!isStickyExpired(job?.sticky_expired_date)"
              :bg-color="
                job?.highlight_post_yellow
                  ? 'blue'
                  : job?.show_color
                  ? job?.brand_color
                  : 'white'
              "
            />
          </span>
          <span v-for="(job, i) in unPinJobs" :key="i">
            <Job
              :job="job"
              :bg-color="
                job?.highlight_post_yellow
                  ? 'blue'
                  : job?.show_color
                  ? job?.brand_color
                  : 'white'
              "
            />
          </span>
        </section>
      </div>
    </div>

    <Dialog
      :visible="showPaymentSuccess"
      @update:visible="showPaymentSuccess = false"
      ><p class="text-green-500 text-xl">
        You payment was successfully and your job will be posted ASAP.
      </p></Dialog
    >

    <FloatingPanel
      :visible="showFloatingPanel"
      @closed="showFloatingPanel = false"
    >
    </FloatingPanel>
  </div>
</template>

<script setup>
import { useInfiniteScroll } from "@vueuse/core";
import Pressone from "~/assets/pressone-fulltext-logo.svg";
import {
  locations,
  benefits,
  capitalizeSpecialCharacters,
  sortItems,
} from "~/helpers";
import { computed, onMounted } from "vue";
const el = ref(null);
const loading = ref(false);
const filters = ref({});
const jobs = ref([]);
const pinJobs = ref([]);
const isLast = ref(false);
const moreData = ref([]);
const showPaymentSuccess = ref(false);
const showFloatingPanel = ref(false);
const loadJobs = async (queries = {}) => {
  try {
    loading.value = true;

    let url = `/api/jobs`;

    if (JSON.stringify(queries) !== "{}") url = `/api/jobs?${queries}`;

    const { data } = await useFetch(url);

    return data.value?.result;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const loadFeaturedJobs = async () => {
  try {
    loading.value = true;

    const url = `/api/featured`;

    const { data } = await useFetch(url);

    return data.value?.result;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

function onLocationSelected(locations) {
  filters.value.locations = locations;

  const queries = {};
  if (locations.length) {
    queries.locations = `backend-jobs-in-${filters.value.locations.join("+")}`;
  } else delete queries.locations;

  useRouter().push({
    slug: "/",
    query: {
      ...useRoute().query,
      ...queries,
    },
  });
}
function onKeywordSelected(keywords) {
  filters.value.keywords = keywords;

  const queries = {};
  if (keywords.length) {
    queries.keywords = `${filters.value.keywords.join("+")}-backend-jobs`;
  } else delete queries.keywords;

  useRouter().push({
    slug: "/",
    query: {
      ...useRoute().query,
      ...queries,
    },
  });
}
function onBenefitSelected(benefits) {
  filters.value.benefits = benefits;

  const queries = {};
  if (benefits.length) {
    queries.benefits = `backend-jobs-with-${filters.value.benefits.join("+")}`;
  } else delete queries.benefits;

  console.log(queries);

  useRouter().push({
    path: "/",
    query: {
      ...useRoute().query,
      ...queries,
    },
  });
}
function onSortBySelected(sortBy) {
  filters.value.sortBy = sortBy;
}
function onFilterSelected(filter) {
  filters.value.locations = filter;

  const queries = {};
  if (filter.length) {
    queries.type = `${filters.value.locations.join("+")}-backend-jobs`;
  } else delete queries.type;

  useRouter().push({
    path: "/",
    query: {
      ...useRoute().query,
      ...queries,
    },
  });
}

function onSearch(search) {
  filters.value.search = search;
}

pinJobs.value = await loadFeaturedJobs();
jobs.value = await loadJobs();

console.log(jobs.value);

function generateQuery(filters) {
  if (filters?.locations) {
    return `locations=${capitalizeSpecialCharacters(
      filters?.locations.join(";"),
      ";"
    )}`;
  }

  if (filters?.benefits) {
    return `benefits=${capitalizeSpecialCharacters(
      filters?.benefits.join(";"),
      ";"
    )}`;
  }

  if (filters?.keywords) {
    return `tags=${capitalizeSpecialCharacters(
      filters?.keywords.join(";"),
      ";"
    )}`;
  }

  if (filters?.filter) {
    return `locations=${capitalizeSpecialCharacters(
      filters?.filter.join(";"),
      ";"
    )}`;
  }

  if (filters?.sortBy) {
    return `sortBy=${filters?.sortBy}`;
  }

  if (filters?.search) {
    return `search=${filters?.search}`;
  }

  if (filters?.seconds || filters?.nanoseconds) {
    return `seconds=${filters?.seconds}&nanoseconds=${filters?.nanoseconds}`;
  }
}

useInfiniteScroll(
  el,
  async () => {
    // load more

    if (isLast.value) return;

    const lastJobTimestamp = jobs.value[jobs.value.length - 1].timestamp;
    filters.value.seconds = lastJobTimestamp.seconds;
    filters.value.nanoseconds = lastJobTimestamp.nanoseconds;
    const queries = generateQuery(filters.value);

    moreData.value = await loadJobs(queries);

    if (moreData.value?.length < 20) isLast.value = true;

    jobs.value.push(...moreData.value);
  },
  { distance: 10 }
);

watch(
  () => filters.value,
  async () => {
    const queries = generateQuery(filters.value);
    jobs.value = await loadJobs(queries);
    if (moreData.value?.length < 20) isLast.value = true;
  },
  { deep: true }
);

onMounted(() => {
  if (useRoute().query?.redirect === "payment-success") {
    showPaymentSuccess.value = true;
    useRouter().replace({ query: [] });
  }
});

function isStickyExpired(date) {
  return new Date(date).getTime() < Date.now();
}

const unPinJobs = computed(() => {
  if (!jobs.value.length) return [];

  return jobs.value.filter((job) => {
    if (isStickyExpired(job?.sticky_expired_date)) return job;
    if (
      !job?.stick_for_1_month &&
      !job?.stick_for_1_week &&
      !job?.stick_for_24_hours
    )
      return job;
  });
});

function adClickEvent(brand, url, location = "homepage_ad") {
  useTrackEvent(brand + "_ad", { props: { from: location, action: "click" } });
  window.open(url);
}
</script>


<style></style>
