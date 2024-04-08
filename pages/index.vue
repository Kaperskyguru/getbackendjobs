<template>
  <div class="relaive">
    <section>
      <Banner @search="onSearch" />
    </section>

    <div class="page md:mx-auto md:container">
      <section class="md:my-0 mt-10 px-2">
        <PostJobAd />
      </section>
      <section class="container mx-auto md:w-3/4 w-full px-2 my-6">
        <div
          class="flex gap-2 overflow-x-auto text-black bg-white"
          style="opacity: 0.5; filter: saturate(0)"
        >
          <p class="text-gray-500 text-sm">trusted by</p>
          <div class="flex items-center gap-5">
            <div class="w-40">
              <img
                src="~/assets/masteringlogo.png"
                class="w-full cover"
                alt=""
              />
            </div>
            <div class="w-40">
              <Pressone />
            </div>
            <div class="w-40">
              <Contentre />
            </div>
          </div>
        </div>
      </section>

      <section class="container mx-auto md:w-3/4 w-full px-2 my-10">
        <div class="flex flex-row justify-around gap-2 my-5 overflow-x-auto">
          <div class="flex w-full gap-5">
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
                  'JavaScript',
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
              <Suggested title="Contractors" link="/contractors-backend-jobs" />
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
            <a
              target="_blank"
              href="https://app.masteringbackend.com?ref=getbackendjobs"
              class="px-10 flex text-black left-1 py-2 bg-red-600 rounded-full bg-white"
            >
              Sign up today
            </a>
          </div>
        </div>
      </section>

      <section>
        <span v-for="(job, i) in jobs" :key="i">
          <Job
            :job="job"
            :bg-color="
              job?.highlight_post_yellow
                ? 'blue'
                : job?.show_color
                ? ''
                : 'white'
            "
          />
        </span>

        <!-- <Job bg-color="red" /> -->

        <!-- <Job bg-color="blue" /> -->
      </section>
    </div>
  </div>
</template>

<script setup>
import Pressone from "~/assets/pressone-fulltext-logo.svg";
import Contentre from "~/assets/contentre.svg";
import {
  locations,
  benefits,
  capitalizeSpecialCharacters,
  sortItems,
} from "~/helpers";
const loading = ref(false);
const filters = ref({});
const jobs = ref([]);

const loadJobs = async (queries = {}) => {
  try {
    loading.value = true;

    let url = `/api/jobs`;

    if (JSON.stringify(queries) !== "{}") url = `/api/jobs?${queries}`;

    const { data } = await useFetch(url);

    jobs.value = data.value?.result;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

function onLocationSelected(locations) {
  filters.value.locations = [...(filters.value?.locations ?? []), ...locations];
}
function onKeywordSelected(keywords) {
  filters.value.keywords = keywords;
}
function onBenefitSelected(benefits) {
  filters.value.benefits = benefits;
}
function onSortBySelected(sortBy) {
  filters.value.sortBy = sortBy;
}
function onFilterSelected(filter) {
  filters.value.locations = [...(filters.value?.locations ?? []), ...filter];
}

function onSearch(search) {
  filters.value.search = search;
}

loadJobs();

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
    return `keywords=${capitalizeSpecialCharacters(
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
}

watch(
  () => filters.value,
  () => {
    const queries = generateQuery(filters.value);
    loadJobs(queries);
  },
  { deep: true }
);
</script>


<style></style>
