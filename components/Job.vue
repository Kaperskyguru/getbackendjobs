<template>
  <div
    class="container mx-auto md:w-3/4 w-full md:border-x border-solid border-gray-300 md:mt-3 md:rounded-lg"
    :class="{
      'border-t md:border-b': isFull || bgColor === 'white',
    }"
  >
    <a :href="link">
      <div
        :class="{
          'bg-gradient-to-r from-purple-600 to-blue-600  text-white':
            bgColor === 'blue',

          'bg-[#ff4742] text-white': bgColor === 'red',

          'md:rounded-t-lg': isFull,
          'md:rounded-lg': !isFull,
          'border-t border-solid border-gray-300': bgColor !== 'white',
        }"
        class="flex group md:my-2 py-2 pl-2 md:justify-between md:flex-row flex-col justify-start items-center gap-3 md:pr-32 pr-5"
      >
        <div class="flex w-full items-center gap-5">
          <div v-if="job?.show_company_logo">
            <Avatar :src="job?.company_logo" :name="job?.company_name" />
          </div>
          <div v-else>
            <Avatar :name="job?.company_name" />
          </div>
          <div class="w-full">
            <div class="flex gap-2">
              <h2>{{ job?.position }}</h2>
              <div class="uppercase text-white text-sm" v-if="isSticky(job)">
                <span
                  class="original tooltip-set"
                  style="vertical-align: middle"
                  title="This post was bumped by its poster 3 days ago"
                  >🎈</span
                >
              </div>
              <div class="uppercase text-white text-sm" v-if="isVerified(job)">
                <span class="px-2 py-1 bg-green-600 rounded-full"
                  >verified</span
                >
              </div>
            </div>
            <div class="py-1 flex">
              <h3 class="text-sm">{{ job?.company_name }}</h3>
              <!-- <span class="w-8 h-8"
                ><img src="~/assets/hot2x.webp" alt="Hot 2x" class="w-full"
              /></span> -->
              <span class="w-8 h-8" v-if="isNew(job)"
                ><img src="~/assets/new2x.webp" alt="New 2x" class="w-full"
              /></span>
            </div>
            <div
              class="flex gap-2 py-1 w-full items-center"
              :class="{
                'grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 flex-col':
                  isFull,
              }"
            >
              <nuxt-link
                :to="getLocationSlug(location)"
                v-for="(location, i) in displayLocation"
                :key="i"
                class="rounded-full flex items-center gap-1 px-2 py-1 bg-white text-black border-solid border border-gray-300"
              >
                <span v-if="isRemote(location)">🌏</span>
                <span class="text-sm">{{ location }}</span>
              </nuxt-link>

              <div
                v-if="hasSalary(job)"
                class="rounded-full w-full flex items-center gap-1 px-2 py-1 bg-white text-black border-solid border border-gray-300"
              >
                <span>💰</span>
                <span class="text-sm w-full"
                  >${{
                    Intl.NumberFormat("en", { notation: "compact" }).format(
                      job?.min_salary ?? 0.0
                    )
                  }}-${{
                    Intl.NumberFormat("en", { notation: "compact" }).format(
                      job?.max_salary ?? 0.0
                    )
                  }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col justify-around w-full">
          <div
            class="gap-3 items-center"
            :class="{
              'grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 flex-col': isFull,

              'md:flex hidden': !isFull,
            }"
          >
            <nuxt-link
              :to="getTagSlug(skill)"
              v-for="(skill, i) in displaySkills"
              :key="i"
              class="rounded-full w-full flex items-center gap-3 px-2 py-1"
              :class="{
                'bg-white text-[#ff4742] border-solid border border-gray-[#ff4742]':
                  bgColor === 'red',

                '  bg-white text-black border-solid border border-gray-800':
                  bgColor === 'white',

                'bg-white text-black': bgColor === 'blue',
              }"
            >
              <span class="">{{ skill }}</span>
            </nuxt-link>
          </div>
          <div
            class="flex relative items-center justify-center gap-5 py-5 lg:py-1"
            style="align-content: baseline"
          >
            <span class="flex items-center gap-1" v-if="job?.posted_at"
              ><PaperClip class="" />
              <p>{{ postedAt }}</p>
            </span>
            <a
              target="_blank"
              ref="apply_btn"
              :href="link"
              :class="{
                'bg-white text-[#ff4742]': bgColor === 'red',
                'bg-gradient-to-r from-purple-600 to-blue-600  text-white':
                  bgColor === 'white',

                'hidden group-hover:block': !isFull,
                'left-40': job?.posted_at,

                hidden: isFull,
              }"
              class="px-6 text-black absolute left-10 py-2 bg-red-600 rounded-full bg-white"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </a>

    <div v-if="isFull">
      <div style="">
        <div
          class="p-5 container mx-auto"
          style="max-width: 900px; margin: 0 auto"
        >
          <div class="flex flex-col lg:flex-row justify-between relative gap-5">
            <div class="pb-3">
              <div>
                <h2 class="text-3xl py-4">
                  {{ job?.company_name }} is hiring a
                </h2>

                <h1 class="text-4xl font-bold">{{ job?.position }}</h1>
              </div>
              <div class="pt-2">
                <article
                  v-html="
                    job?.description
                      ? job?.description
                      : 'Click on APPLY to view more imformation'
                  "
                ></article>
              </div>
            </div>

            <div
              class="rounded-lg border border-solid border-gray-200 p-5 lg:my-0 my-4 lg:w-[250px] w-full justify-center bg-[#fbfaf8]"
              style="float: right"
            >
              <div class="flex justify-center">
                <Avatar
                  :name="job?.company_name"
                  :src="job?.company_logo"
                  size="medium"
                />
              </div>
              <div class="py-4 text-center">
                <h4 class="text-2xl font-black">{{ job?.company_name }}</h4>

                <a
                  :href="job?.company_website"
                  class="underline text-xl w-full font-bold"
                  ><p class="w-full">{{ job?.company_website }}</p></a
                >
              </div>

              <div class="py-2">
                <a :href="job?.apply_url" @click.prevent="openLink">
                  <button
                    class="px-3 py-2 bg-red-600 rounded-lg text-white w-full"
                  >
                    <span v-if="job?.apply_url"> Apply Now </span
                    ><span v-else>Apply Now via email</span>
                  </button>
                </a>
              </div>

              <div class="py-2 text-center">
                <div class="text-lg py-2 font-light">
                  <span> 👀 </span> <span>18,541 views</span>
                </div>

                <div class="text-lg py-2 font-light">
                  <span> ✅ </span>
                  <span>2,780 applied (15%)</span>
                </div>
              </div>

              <div class="flex justify-center text-center py-2 flex-col">
                <h5 class="text-lg font-bold pb-2">Share this job:</h5>
                <input
                  type="text"
                  :placeholder="getSharedLink"
                  class="rounded-lg"
                  :value="getSharedLink"
                />
              </div>
            </div>
          </div>

          <div>
            <article
              v-html="
                job?.how_to_apply
                  ? job?.description
                  : 'Click on APPLY to view more imformation on how to apply'
              "
            ></article>

            <div id="salary" class="py-5">
              <h2 class="text-4xl font-bold">Salary and compensation</h2>

              <p v-if="!job?.min_salary || !job?.max_salary">
                Salary details are listed on the companies website regarding
                this job. Click on the APPLY button to see more information.
              </p>
              <p v-else>${{ job?.min_salary }} — ${{ job?.max_salary }}/year</p>
            </div>

            <div id="benefits" class="py-5">
              <h2 class="text-4xl font-bold">Benefits</h2>
              <ul>
                <p class="py-4" v-if="!job?.benefits?.length">
                  Click on APPLY to view more benefits
                </p>

                <li v-for="(benefit, i) in job?.benefits" :key="i">
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>

          <div
            class="rounded-lg border w-full border-solid border-gray-300 p-5 mt-20 mb-5"
          >
            <div class="w-full">
              <a
                @click.prevent="openLink"
                :href="job?.apply_url"
                class="px-3 flex justify-center py-3 bg-red-600 text-white w-full rounded-lg"
                ><span v-if="job?.apply_url">Apply for this job</span>
                <span v-else>Click here to apply vial email</span></a
              >
            </div>
            <p class="font-bold text-center text-sm py-4">
              👉 Please reference you found the job on GetBackendJobs, this
              helps us get more companies to post here, thanks!
            </p>
            <p class="text-sm text-center">
              When applying for jobs, you should NEVER have to pay to apply. You
              should also NEVER have to pay to buy equipment which they then pay
              you back for later. Also never pay for trainings you have to do.
              Those are scams! NEVER PAY FOR ANYTHING! Posts that link to pages
              with "how to work online" are also scams. Don't use them or pay
              for them. Also always verify you're actually talking to the
              company in the job post and not an imposter. A good idea is to
              check the domain name for the site/email and see if it's the
              actual company's main domain name. Scams in remote work are
              rampant, be careful! Read more to avoid scams. When clicking on
              the button to apply above, you will leave GetBackendJobs and go to
              the job application page for that company outside this site.
              GetBackendJobs accepts no liability or responsibility as a
              consequence of any reliance upon information on there (external
              sites) or here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PaperClip from "~/assets/paper-clip.svg";
import { Timestamp } from "firebase/firestore";
import { format } from "timeago.js";
const apply_btn = ref(null);
const props = defineProps({
  bgColor: {
    default: "white",
    type: String,
  },

  job: {
    type: Object,
    default: () => {},
  },

  isFull: {
    type: Boolean,
    default: false,
  },
});

const displayLocation = computed(() => {
  return props.isFull
    ? props.job?.locations
    : props.job?.locations?.slice(0, 2);
});

const displaySkills = computed(() => {
  return props.isFull ? props.job?.keywords : props.job?.keywords?.slice(0, 3);
});

function isNew(job) {
  const now = new Date();
  now.setHours(0, 0, 0);

  const createdDate = Date.parse(job?.created_at);
  const currentDate = Date.parse(now);

  return createdDate >= currentDate;
}

const postedAt = computed(() => {
  const date = new Date(props.job?.posted_at?.seconds * 1000);
  return format(date, "en_US");
});

const link = computed(() => {
  if (props.isFull) return "#";

  const job = props.job;
  if (!job?.slug) return `/jobs/${job?.id}?id=${job?.id}`;
  return `/jobs/${job?.slug}`;
});

function isVerified(job) {
  if (!job?.company_email) return false;
  const domain = job.company_email?.split("@")[1];
  const domainName = domain?.split(".")[0];

  return (
    (job?.company_website ?? domain.includes(job?.company_website)) ||
    (job?.company_name &&
      job?.company_name.toLowerCase().split(" ").includes(domainName))
  );
}

function isSticky(job) {
  return (
    job?.stick_for_1_week || job?.stick_for_24_hours || job?.stick_for_1_month
  );
}

function hasSalary(job) {
  return job?.min_salary > 0 && job?.max_salary > 0;
}

function isRemote(location) {
  return location.toLowerCase().includes("emote");
}

function getLocationSlug(location) {
  const _location = location.toLowerCase();

  if (
    _location.toLowerCase().includes("hybrid") ||
    _location.includes("remote")
  )
    return `/remote-backend-jobs`;

  if (_location.includes("0")) return "";
  if (_location.includes("time")) return `/${_location}-backend-jobs`;

  return `/backend-jobs-in-${_location.replaceAll(" ", "-")}`;
}

const getSharedLink = computed(() => {
  const id = useRoute().query?.id;
  const path = useRoute().path;
  let host = "https://getbackendjobs.com";

  if (process.env.NODE_ENV === "development") host = "http://localhost:3000";

  if (id) return `${host}${path}?id=${id}&ref=shareable_link`;

  return `${host}${path}?ref=shareable_link`;
});

function openLink() {
  // Update Click
  if (props.job?.apply_url) {
    window.open(props.job?.apply_url, "_blank");
    return;
  }

  window.location.href = `mailto:${props.job?.apply_email}`;
}

function getTagSlug(tag) {
  const _tag = tag.toLowerCase();

  if (_tag == "engineer" || _tag == "developer") {
    return `/backend-${_tag.replaceAll(" ", "-")}-jobs`;
  }

  if (!_tag.includes("backend")) {
    return `/${_tag.replaceAll(" ", "-")}-backend-jobs`;
  }

  return `/${_tag.replaceAll(" ", "-")}-jobs`;
}
</script>

<style>
article p {
  @apply py-2;
}

#benefits ul li {
  @apply py-2;
}

#salary p {
  @apply py-2;
}
</style>