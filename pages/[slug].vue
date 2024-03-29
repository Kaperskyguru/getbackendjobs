<template>
  <div class="relaive">
    <section>
      <Banner :search="false" :title="title" :subtitle="subtitle" />
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
            <a
              target="_blank"
              href="https://masteringbackend.com?ref=getbackendjobs"
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

const loading = ref(false);
const route = useRoute();
const jobs = ref([]);
const title = ref("");
const subtitle = ref("");

function generateQuery() {
  const slug = route.params?.slug;

  if (slug.includes("backend-jobs-in")) {
    const loc = slug.split("backend-jobs-in-")[1];
    return `locations=${capitalize(loc.replaceAll("-", " "))}`;
  }

  if (slug.includes("remote")) {
    return `locations=Remote`;
  }

  if (slug.includes("worldwide")) {
    return `locations=Worldwide`;
  }

  const tags = slug.split("-");
  if (!tags[0]?.includes("backend")) {
    return `tags=${capitalize(tags[0])}`;
  }

  if (tags[0]?.includes("backend") && tags?.length > 2)
    return `tags=${capitalize(tags[1])}`;

  return `tags=${capitalize(tags[0])}`;
}

function capitalizeWord([first, ...rest], lc) {
  return (
    first.toUpperCase() + (lc ? rest.join("").toLowerCase() : rest.join(""))
  );
}

function capitalize(str, lc = true, all = true) {
  if (str.includes(".")) {
    return str.toUpperCase();
  }

  return all
    ? str
        .split(/(\s|-|')/)
        .map((s) => capitalizeWord(s, lc))
        .join("")
    : capitalizeWord(str, lc);
}

const loadJobs = async () => {
  try {
    loading.value = true;

    const query = generateQuery();

    console.log(query);

    const { data } = await useFetch(`/api/jobs?${query}`);

    jobs.value = data.value?.result;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

loadJobs();

function getPageDetails() {
  const slug = route.params?.slug;
  const text = slug.toLowerCase().replaceAll("-", " ");

  if (slug.includes("backend-jobs-in")) {
    title.value = `${text}`;
    subtitle.value = `Find tailored ${text}`;
  }

  title.value = `Latest ${text}`;
  subtitle.value = `Find tailored ${text}`;
}
getPageDetails();

useHead({
  title: title.value,
  meta: [
    {
      hid: "keywords",
      name: "keywords",
      content: `remote backend jobs, C# Backend Jobs, PHP Backend Jobs, Java Backend Jobs, JavaScript Backend Jobs, Rust Backend Jobs, Golang Backend Jobs`,
    },
    {
      hid: "description",
      name: "description",
      content: `${subtitle.value} in ${new Date().toLocaleString("en-us", {
        month: "long",
        year: "numeric",
      })} at companies like Alqen, Rebilly and Coconut Software with salaries from $40,000/year to $130,000/year working as a Senior Backend Developer or Senior Backend Engineer. Last post 15 days,`,
    },

    {
      hid: "og:title",
      property: "og:title",
      content: title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: subtitle.value,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://res.cloudinary.com/kaperskydisk/image/upload/v1710945111/Get%20Backend%20Jobs/hero.png`,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `/${route.params?.slug}`,
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
  
  
  <style></style>