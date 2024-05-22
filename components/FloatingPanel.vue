<template>
  <transition
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-300"
    enter-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visibleModel"
      style="z-index: 100"
      class="grid fixed bg-gray-500 bg-opacity-50 backdrop-blur z-5"
      :class="[
        inside
          ? 'w-1/2 max-w-[88vw] md:max-w-[30rem]'
          : 'top-0 left-0 right-0 bottom-0',
      ]"
      :style="
        inside
          ? {
              right: from === 'right' ? '2rem' : '',
              left: from === 'left' ? '2rem' : '',
              top: '2rem',
              bottom: '2rem',
            }
          : null
      "
    >
      <div
        v-if="!inside"
        class="absolute inset-0 bg-opacity-50 backdrop-blur z-4 bg-warngray"
        @click="close"
      />

      <transition
        appear
        enter-active-class="transition-transform duration-500 transform-gpu"
        :enter-class="
          from === 'left' ? '-translate-x-full' : 'translate-x-full'
        "
      >
        <Card
          v-if="visibleModel"
          ref="panel"
          elevation="large"
          :fullHeight="true"
          padding="large"
          class="flex overflow-hidden relative flex-col !pb-4 space-y-2 w-full max-w-[88vw] md:max-w-[70rem] z-5"
          :class="{
            'xl:w-1/3': !inside,
            'rounded-l-none': from === 'left' && !inside,
            'rounded-r-none': from === 'right' && !inside,
            'justify-self-end': from === 'right',
          }"
          :style="attrStyle"
        >
          <header
            class="flex justify-between items-start pb-4 border-b border-whitesmoke"
            :class="{
              'flex-row-reverse': from === 'right',
            }"
          >
            <slot name="header">
              <div class="gap-3 w-full h-auto">
                <nuxt-link
                  class="flex md:flex-row flex-col justify-center md:justify-start items-center"
                  href="/"
                >
                  <div>
                    <img
                      src="~/assets/logo.png"
                      class="w-20"
                      alt="GetbackendJob logo"
                    />
                  </div>
                  <div>
                    <span class="text-2xl font-bold"> Get Backend Jobs</span>
                    <p class="font-light text-lg italic">
                      Find tailored backend engineerng jobs in the world.
                    </p>
                  </div>
                </nuxt-link>
              </div>
            </slot>

            <div v-if="enableClose">
              <button v-if="enableClose" @click.prevent="close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </header>
          <div
            v-if="waiting"
            class="flex flex-col flex-1 justify-center items-center space-y-6 drop-shadow md:overflow-hidden"
          >
            <!-- <Loading class="opacity-20" /> -->
          </div>
          <slot v-else name="card">
            <div class="flex overflow-hidden relative flex-1 -m-6">
              <div
                class="absolute top-0 right-4 left-2 z-40 h-4 bg-gradient-to-b from-white to-transparent pointer-events-none"
              />

              <div class="overflow-auto flex-auto py-4 px-6">
                <slot>
                  <div id="menuitem" class="w-full">
                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >💗 Your Bookmarks</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/blog" class="text-xs">
                          ✍ Blog</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🚀 Only Featured Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/remote-backend-jobs" class="text-xs"
                          >🌏 Remote Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/hire-backend" class="text-xs">
                          👨‍🎨 Hire Backend Engineers</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/hire-backend" class="text-xs"
                          >👩‍💻 Post backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🌚 Dark Mode</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="/backend-jobs"
                          class="text-xs flex items-center gap-1"
                        >
                          <span>
                            <img
                              src="~/assets/new2x.webp"
                              alt="New 2x"
                              class="w-ful w-4 h-auto"
                            />
                          </span>
                          Latest Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >❤️ Wall of Love</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="#"
                          class="text-xs font-bold bg-green-600 py-3 px-5 rounded-lg text-white"
                        >
                          👨‍🎨 Get HIRED</nuxt-link
                        >
                      </div>
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Companies
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🏆 Hire Backend Talents (coming soon)</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/hire-backend" class="text-xs"
                          >🧓 Post backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🧑‍🔧 Buy Job Bundle (coming soon)</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="https://tally.so/r/wblgQ6"
                          class="text-xs"
                          >🤔 Advertise your business</nuxt-link
                        >
                      </div>
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Top Backend Jobs
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <nuxt-link to="/backend-jobs" class="text-xs">
                          🍑 Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/senior-backend-jobs" class="text-xs"
                          >👵 Senior Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/junior-backend-jobs" class="text-xs">
                          👶 Junior Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs">
                          🤓 Mid-level Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/principal-backend-jobs" class="text-xs">
                          🥞 Principal Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="/contractors-backend-jobs"
                          class="text-xs"
                        >
                          👨‍🎨 Contractors Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/internship-backend-jobs" class="text-xs"
                          >👩‍🏫 Internship Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="/entry-level-backend-jobs"
                          class="text-xs"
                        >
                          👶 Entry-level Backend Jobs</nuxt-link
                        >
                      </div>
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Backend Jobs(Countries)
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <nuxt-link
                          to="/backend-jobs-in-on-site"
                          class="text-xs"
                        >
                          👩‍💻 Onsite Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link
                          to="/part-time,%20full-time-backend-jobs"
                          class="text-xs"
                        >
                          👨‍🎨 Part,Full Time Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/part-time-backend-jobs" class="text-xs"
                          >🦋 Part time Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/full-time-backend-jobs" class="text-xs"
                          >⏰ Full Time Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/backend-jobs-in-u.s." class="text-xs">
                          🇺🇸 Backend Jobs in US</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/backend-jobs-in-india" class="text-xs"
                          >🇮🇳 Backend Jobs in India</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="/backend-jobs-in-nigeria"
                          class="text-xs"
                        >
                          🇳🇬 Backend Jobs in Nigeria</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/backend-jobs-in-prague" class="text-xs">
                          👨‍⚕️ Backend Jobs in Prague</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="/backend-jobs-in-ireland"
                          class="text-xs"
                        >
                          🇮🇪 Backend Jobs in Ireland</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/backend-jobs-in-poland" class="text-xs">
                          🇵🇱 Backend Jobs in Poland</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/backend-jobs-in-london" class="text-xs">
                          🏴󠁧󠁢󠁥󠁮󠁧󠁿 Backend Jobs in London</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="/backend-jobs-in-portland"
                          class="text-xs"
                        >
                          🇵🇹 Backend Jobs in Portland</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link
                          to="/backend-jobs-in-germany"
                          class="text-xs"
                        >
                          🇩🇪 Backend Jobs in Germany</nuxt-link
                        >
                      </div>

                      <div v-for="(location, i) in locations" :key="i">
                        <nuxt-link
                          v-if="location.value === 'remote'"
                          :to="`/remote-backend-jobs`"
                          class="text-xs"
                        >
                          {{ location?.title.split(" ")[0] }}
                          Remote Backend Jobs</nuxt-link
                        >

                        <nuxt-link
                          v-else
                          :to="`/backend-jobs-in-${location.value}`"
                          class="text-xs"
                        >
                          {{ location?.title.split(" ")[0] }} Backend Jobs in
                          {{
                            location?.title.split(" ")?.slice(1)?.join(" ")
                          }}</nuxt-link
                        >
                      </div>

                      <div class="text-center pt-3 font-bold col-span-2">
                        <nuxt-link to="#" class="text-xs">
                          Can't find your country? Use Location
                          filter</nuxt-link
                        >
                      </div>
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Top Lang Backend Jobs
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div v-for="(language, index) in languages" :key="index">
                        <nuxt-link to="#" class="text-xs">
                          {{ language?.title.split(" ")[0] }}
                          {{ language?.title?.split(" ")?.slice(1)?.join(" ") }}
                          Backend Jobs</nuxt-link
                        >
                      </div>
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Top Framework Jobs
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <nuxt-link to="/laravel-backend-jobs" class="text-xs"
                          >🟣 Laravel Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/django-backend-jobs" class="text-xs"
                          >🔵 Django Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/expressjs-backend-jobs" class="text-xs"
                          >🟢 Expressjs Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/nestjs-backend-jobs" class="text-xs"
                          >🟡 Nestjs Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/adonisjs-backend-jobs" class="text-xs"
                          >🟠 Adonisjs Backend Jobs</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link
                          to="/ruby-on-rails-backend-jobs"
                          class="text-xs"
                          >🔴 Ruby on rails Backend Jobs</nuxt-link
                        >
                      </div>
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Hire Backend Talents
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🏆 All Talents</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs">
                          ☕ Hire JavaScript Engineers</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🔗 Hire Node.js Engineers</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >👨‍👨‍👧‍👦 Hire Golang Engineers</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >👨‍💻 Hire Python Engineers</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs">
                          👵 Hire PHP Engineers</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >👩‍🚒 Hire Rust Engineers</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🧑‍🎨 Hire Ruby Engineers</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >👩‍💻 Hire C# Engineers</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🤴 Hire Java Engineers</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🤹‍♂️ Hire TypeScript Engineers</nuxt-link
                        >
                      </div>
                      <!-- <div><nuxt-link to="#" class="text-xs">Hire Java Engineers</nuxt-link></div> -->
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Social Networks
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <a
                          target="_blank"
                          href="https://twitter.com/getbackendjobs"
                          class="text-xs"
                          >🥰 Twitter (464)</a
                        >
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/company/getbackendjobs"
                          class="text-xs"
                          >🤓Linkedin (57)</a
                        >
                      </div>

                      <div class="relative">
                        <a
                          target="_blank"
                          href="https://masteringbackend.com/community"
                          class="text-xs"
                          >👫 Slack (3000)</a
                        >

                        <a
                          target="_blank"
                          class="absolute w-28 hover:!bg-white"
                          href="https://slack.com/oauth/v2/authorize?client_id=1250072469155.1525140970550&scope=incoming-webhook,channels:join&user_scope="
                          ><img
                            alt="Add to Slack"
                            src="https://platform.slack-edge.com/img/add_to_slack.png"
                            srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                        /></a>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          href="https://vec.emlsend.com/newform/web/DoixZVisDzRq7oT8Lm6XDd58KAsOe1r6rUma6zaBBW0w4/46624/"
                          class="text-xs"
                          >📧 Email Newsletter (520)</a
                        >
                      </div>
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Feeds
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <nuxt-link to="/api/jobs" class="text-xs"
                          >👔 Backend Jobs API</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="/feeds.xml" class="text-xs"
                          >🍼 RSS Feed</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="/api/jobs" class="text-xs"
                          >👇JSON Feed</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >📰 Newsletter Feed</nuxt-link
                        >
                      </div>
                    </div>

                    <div class="border-t relative">
                      <div
                        style="
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 50%;
                        "
                        class="border bg-white relative p-1.5 text-xs font-bold text-center flex justify-center rounded-full"
                      >
                        Others
                      </div>
                    </div>

                    <div
                      class="flex md:justify-between flex-col justify-center md:grid-cols-2 md:grid gap-2 pb-10"
                    >
                      <div>
                        <a
                          href="https://plausible.io/getbackendjobs.com?period=30d"
                          class="text-xs"
                          target="_blank"
                          >📈 Pageviews ({{
                            new Intl.NumberFormat("en", {
                              notation: "compact",
                            }).format(pageviews)
                          }}/mo)</a
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >💹 Uptime (99.97%)</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >🙃 Backend Job Market size</nuxt-link
                        >
                      </div>
                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >Companies Hiring Backend Engineers</nuxt-link
                        >
                      </div>

                      <div>
                        <nuxt-link to="#" class="text-xs"
                          >💰 Highest Paying Backend Jobs</nuxt-link
                        >
                      </div>

                      <div>
                        <a
                          href="https://backendjoy.com?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >😋 Launch Backend MVP in a month</a
                        >
                      </div>
                      <div>
                        <a
                          href="https://nuxifysaas.com?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >🏆 Built with NuxifySaas</a
                        >
                      </div>

                      <div>
                        <a
                          to="https://newsletter.masteringbackend.com/p/becoming-a-great-backend-engineer?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >😇 Become a Great Backend Engineer</a
                        >
                      </div>
                      <div>
                        <a
                          href="https://codeplayground.site?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >😎 Backend Code Playground</a
                        >
                      </div>

                      <div>
                        <a href="#" class="text-xs"
                          >🤓 Ace your Backend Interviews</a
                        >
                      </div>
                      <div>
                        <a
                          href="https://enterprisevue.com?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >🫡 Master Vue/Nuxt</a
                        >
                      </div>

                      <div>
                        <a
                          href="https://boilerplatesearch.com?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >🤨 Discover top SaaS Boilerplates
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://getrustjobs.com?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >😎 Get Rust Jobs (Coming soon)</a
                        >
                      </div>

                      <div>
                        <a href="#" class="text-xs"
                          >😍 Top Developers Tools (Coming soon)</a
                        >
                      </div>
                      <div>
                        <a
                          href="https://codepreneurs.dev?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >😋 Become a Codepreneur (Coming soon)</a
                        >
                      </div>
                      <div>
                        <a
                          href="https://newsletter.masteringbackend.com?ref=getbackendjobs&utm_source=getbackendjobs"
                          class="text-xs"
                          >🫵 Recieve Weekly Backend Tips/Tricks</a
                        >
                      </div>
                    </div>
                  </div>
                </slot>
              </div>

              <div
                class="absolute right-4 bottom-0 left-2 z-40 h-4 bg-gradient-to-b from-transparent to-white pointer-events-none"
              />

              <!-- <LazyWarnDialog
                v-if="persistent"
                v-bind="persistent"
                ref="warnDialog"
                @confirm="handleVisibility(false)"
              /> -->
            </div>
          </slot>
        </Card>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { locations, languages } from "~/helpers";
const config = useRuntimeConfig();
const pageviews = ref(0);
async function getPlausableStat() {
  console.log("asas");
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
<script>
export default {
  name: "FloatingPanel",

  model: {
    prop: "visible",
    event: "toggle",
  },

  props: {
    waiting: {
      type: Boolean,
      default: false,
    },
    attrStyle: {
      type: String,
      default: null,
    },
    inside: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Object,
      default: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },

    visibleModelPreview: {
      type: Boolean,
      default: false,
    },

    externalClose: {
      type: Boolean,
      default: false,
    },

    enableClose: { type: Boolean, default: true },

    from: {
      type: String,
      validate: (value) => ["left", "right"].includes(value),
      default: "left",
    },
  },

  emits: ["toggle", "closed"],

  computed: {
    visibleModel: {
      get() {
        return this.visible;
      },

      set(value) {
        if (this.persistent && !value) {
          return this.$refs.warnDialog.show();
        }
        this.handleVisibility(value);
      },
    },
  },

  watch: {
    async visible(value) {
      await this.$nextTick();

      if (value) {
        document.addEventListener("keyup", this.close);

        const panel = this.$refs.panel;
        if (panel && panel.$el && panel.$el.focus) panel.$el.focus();
      } else {
        document.removeEventListener("keyup", this.close);
      }
    },
  },

  destroyed() {
    document.removeEventListener("keyup", this.close);
  },

  methods: {
    handleVisibility(value) {
      if (!this.externalClose) {
        this.$emit("toggle", value);
      }

      if (!value) {
        this.$emit("closed");
      }
    },
    close(event) {
      if (event.type !== "keyup" || event.keyCode === 27) {
        this.visibleModel = false;
      }
    },
  },
};
</script>

<style>
#menuitem a:hover {
  background-color: grey;
  padding: 5px;
  color: white;
}

#menuitem a {
  padding: 5px;
}
</style>
