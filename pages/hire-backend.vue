<template>
  <main>
    <div class="shadow">
      <div
        class="py-4 mb-5 flex justify-between items-center w-full overflow-hidden"
      >
        <div class="lg:flex gap-3 w-20 h-auto">
          <nuxt-link href="/">
            <img src="~/assets/logo.png" class="w-full" alt="" />
          </nuxt-link>
        </div>

        <div class="px-4">
          <a href="/blog" class="px-4 py-2 text-black text-xl rounded">
            Blog
          </a>
          <button
            class="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded"
          >
            Buy Job Bundle
          </button>
        </div>
      </div>
    </div>

    <div v-if="false" class="flex relative justify-center py-2">
      <p class="font-bold text-lg text-center">
        🏷 A discount of 10% with code 573ACB3B8848293F9E81010ADFF53383 is
        applied on checkout
      </p>
    </div>

    <div
      class="bg-gradient-to-r from-purple-600 to-blue-600 py-4 px-4 flex justify-center text-white"
    >
      <p>⛳️ Save up to 50% when buying multiple job posts — Buy a bundle →</p>
    </div>

    <section class="flex md:flex-row flex-col relative justify-between">
      <div
        class="p-5 w-full md:w-2/3 bg-[#FBFAF8] md:pb-60 pb-5 border-r border-solid border-gray-200"
      >
        <!-- Job Details -->
        <div class="rounded border border-solid border-gray-300 p-3">
          <!-- <form class="w-full p-3"> -->
          <div class="pb-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="company_name">Company Name*</label>
              </div>
              <input
                type="text"
                v-model="job.company_name"
                id="company_name"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Company name"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.company_name.$error">{{
              v$.company_name.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              Your company's brand/trade name: without Inc., Ltd., B.V., Pte.,
              etc.
            </p>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="position">Position*</label>
              </div>
              <input
                type="text"
                v-model="job.position"
                id="position"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Position"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.position.$error">{{
              v$.position.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              Please specify as single job position like "Senior Backend
              Engineer" or "Node JS Developer", not a sentence like "Looking for
              SBE / SWE / Manager". We know your job is important but please DO
              NOT WRITE IN FULL CAPS. If posting multiple roles, please create
              multiple job posts. A job post is limited to a single job. We only
              allow real jobs, absolutely no MLM-type courses "learn how to work
              online" please.
            </p>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="type">Type*</label>
              </div>
              <select
                type="text"
                id="type"
                v-model="job.type"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Type"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contractor">Contractor</option>
                <option value="Temporary">Temporary</option>
                <option value="Internship">Internship</option>
                <option value="Volunteer">Volunteer</option>
                <!-- <option>Full-time</option> -->
              </select>
              <span class="text-xs text-red-500" v-if="v$.type.$error">{{
                v$.type.$errors[0].$message
              }}</span>
            </div>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="primary_level">PRIMARY Level *</label>
              </div>
              <select
                type="text"
                v-model="job.primary_level"
                id="primary_level"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Level"
              >
                <option selected value="Senior">Senior</option>
                <option value="Principal">Principal</option>
                <option value="Junior">Junior</option>
                <option value="Staff">Staff</option>
                <option value="Entry-Level">Entry-Level</option>
                <option value="Intern">Intern</option>
                <option value="Cofounder">Cofounder</option>
              </select>
            </div>
            <span class="text-xs text-red-500" v-if="v$.primary_level.$error">{{
              v$.primary_level.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              Select a primary tag This primary tag shows first and increases
              visibility in the main sections. Your job is shown on every page
              that is tagged with though. E.g. if you tag it as PHP, it shows
              for PHP Backend Jobs etc.
            </p>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="company_name uppercase"
                  >TAGS, KEYWORDS OR STACK*
                </label>
              </div>
              <div class="pb- bg-white rounded-lg">
                <Dropdown
                  editable
                  :items="['Backend']"
                  title="Tags, keywords or stacks"
                  @selected="selectedKeywords"
                  :isRoundedFull="false"
                />
              </div>
            </div>
            <span class="text-xs text-red-500" v-if="v$.keywords.$error">{{
              v$.keywords.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              Short tags are preferred. Use tags like industry and tech stack.
              The first 3 or 4 tags are shown on the site, the other tags aren't
              but the job will be shown on each tag specific page (like
              /remote-backend-jobs). We also sometimes generate tags
              automatically after you post/edit to supplement.
            </p>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="location uppercase"
                  >JOB IS RESTRICTED TO LOCATIONS?
                </label>
              </div>
              <div class="pb- bg-white rounded-lg">
                <Dropdown
                  :items="locations"
                  editable
                  title="Locations"
                  @selected="selectedLocation"
                  :isRoundedFull="false"
                />
              </div>
            </div>
            <span class="text-xs text-red-500" v-if="v$.locations.$error">{{
              v$.locations.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              If you'd only like to hire people from a specific location or
              timezone this backend job is restricted to (e.g. Europe, United
              States or Japan). If not restricted, please leave it as
              "Worldwide". The less restricted this is, the more applicants you
              will get. Keeping it "Worldwide" is highly recommended as you'll
              have access to a worldwide pool of talent. To promote fairness in
              remote work positions, worldwide jobs are ranked higher.
            </p>
          </div>
          <!-- </form> -->
        </div>

        <!-- Job Design -->
        <div class="rounded border border-solid border-gray-300 p-3 my-5">
          <div class="items-center py-2">
            <input
              checked
              id="premium_support"
              type="checkbox"
              v-model="job.primium_support"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="premium_support"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
              >Get 💁‍♀️ premium support and help with your job post (<span
                class="font-bold pr-1"
                >FREE</span
              >
              <span class="pr-2 line-through decoration-red-500">$50</span
              >)</label
            >
          </div>

          <div class="flex items-center py-2">
            <input
              checked
              id="showCompanyLogo"
              type="checkbox"
              v-model="job.show_company_logo"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="showCompanyLogo"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
              >Show my ⭐️ company logo besides my post (<span
                class="font-bold pr-1"
                >+$5</span
              >
              <span class="pr-2 line-through decoration-red-500">$20</span
              >)</label
            >
            <span
              class="tooltip"
              title="Based on previous job post data compared to a regular job post"
              style="
                border: 1px solid #ff4742;
                background: none;
                display: inline-block;
                text-transform: uppercase;
                color: #ff4742;
                font-size: 12px;
                margin-left: 14px;
                font-weight: bold;
                border-radius: 6px;
                padding: 3px;
              "
            >
              2x more views
            </span>
          </div>

          <div class="flex items-center py-2">
            <input
              checked
              id="blast_to_newsletter"
              type="checkbox"
              v-model="job.blast_to_newsletter"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="blast_to_newsletter"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              Email blast my job post to 📮15,000 backend engineers (<span
                class="font-bold pr-1"
                >+$10</span
              >
              <span class="pr-2 line-through decoration-red-500">$40</span>)
            </label>
            <span
              class="tooltip"
              title="Based on previous job post data compared to a regular job post"
              style="
                border: 1px solid #ff4742;
                background: none;
                display: inline-block;
                text-transform: uppercase;
                color: #ff4742;
                font-size: 12px;
                margin-left: 14px;
                font-weight: bold;
                border-radius: 6px;
                padding: 3px;
              "
            >
              2x more views
            </span>
          </div>

          <div class="flex items-center py-2">
            <input
              checked
              id="directory_of_backend_engineers"
              type="checkbox"
              v-model="job.send_to_directory"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="directory_of_backend_engineers"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              Get auto matched with suitable applicants from our
              <a href="#">community of backend engineers</a>
            </label>
          </div>

          <div class="flex items-center py-2">
            <input
              checked
              id="highlight_post_yellow"
              v-model="job.highlight_post_yellow"
              type="checkbox"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="highlight_post_yellow"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              Highlight your post in ⚠️ gradient (<span class="font-bold pr-1"
                >+$15</span
              >
              <span class="pr-2 line-through decoration-red-500">$39</span>)
            </label>
            <span
              class="tooltip"
              title="Based on previous job post data compared to a regular job post"
              style="
                border: 1px solid #ff4742;
                background: none;
                display: inline-block;
                text-transform: uppercase;
                color: #ff4742;
                font-size: 12px;
                margin-left: 14px;
                font-weight: bold;
                border-radius: 6px;
                padding: 3px;
              "
            >
              2x more views
            </span>
          </div>

          <div class="flex items-center py-2">
            <input
              checked
              id="enable_qr_code"
              v-model="job.enable_qr_code"
              type="checkbox"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="enable_qr_code"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              Create a
              <!-- <img
                src="/assets/qr_icon.png?1708185060"
                style="
                  width: 22px;
                  height: 22px;
                  vertical-align: middle;
                  display: inline-block;
                "
              /> -->
              QR-code short link for your post like
              <a href="#"> gbj.co/bz</a> to share easily (+$24)
            </label>
          </div>

          <div class="flex items-center py-2">
            <input
              id="stick_for_24_hours"
              type="checkbox"
              v-model="job.stick_for_24_hours"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="stick_for_24_hours"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              Sticky your post so it stays on 📌 top of the frontpage for ⏰ 24
              hours (<span class="font-bold pr-1">+$19</span>
              <span class="pr-2 line-through decoration-red-500">$49</span>)
            </label>
            <span
              class="tooltip"
              title="Based on previous job post data compared to a regular job post"
              style="
                border: 1px solid #ff4742;
                background: none;
                display: inline-block;
                text-transform: uppercase;
                color: #ff4742;
                font-size: 12px;
                margin-left: 14px;
                font-weight: bold;
                border-radius: 6px;
                padding: 3px;
              "
            >
              2x more views
            </span>
          </div>

          <div class="flex items-center py-2">
            <input
              id="stick_for_1_week"
              type="checkbox"
              v-model="job.stick_for_1_week"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="stick_for_1_week"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              Sticky your post so it stays on 📌 top of the frontpage for ⏰ 1
              week (<span class="font-bold pr-1">+$25</span>
              <span class="pr-2 line-through decoration-red-500">$147</span>)
            </label>
            <span
              class="tooltip"
              title="Based on previous job post data compared to a regular job post"
              style="
                border: 1px solid #ff4742;
                background: none;
                display: inline-block;
                text-transform: uppercase;
                color: #ff4742;
                font-size: 12px;
                margin-left: 14px;
                font-weight: bold;
                border-radius: 6px;
                padding: 3px;
              "
            >
              6x more views
            </span>
          </div>

          <div class="flex items-center py-2">
            <input
              id="stick_for_1_month"
              type="checkbox"
              v-model="job.stick_for_1_month"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="stick_for_1_month"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              Sticky your post so it stays on 📌 top of the frontpage for ⏰ 1
              month (<span class="font-bold pr-1">+$50</span>
              <span class="pr-2 line-through decoration-red-500">$441</span>)
            </label>
            <span
              class="tooltip"
              title="Based on previous job post data compared to a regular job post"
              style="
                border: 1px solid #ff4742;
                background: none;
                display: inline-block;
                text-transform: uppercase;
                color: #ff4742;
                font-size: 12px;
                margin-left: 14px;
                font-weight: bold;
                border-radius: 6px;
                padding: 3px;
              "
            >
              9x more views
            </span>
          </div>

          <!-- <div class="flex items-center py-2">
            <input
              id="selected_location"
              type="checkbox"
              v-model="job.stick_1_color"
              value=""
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="selected_location"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              Geolock your post for people only in the location it's restricted
              to above and block applicants from elsewhere (+$89)
            </label>
          </div> -->

          <div class="flex lg:flex-row flex-col w-full items-center py-2">
            <div
              class="flex flex-col lg:flex-row p-1 flex-start items-center rounded-lg w-ful gap-5 mr-5"
            >
              <div class="font-light text-md">
                <label for="views">Expected views</label>
              </div>
              <input
                disabled
                type="text"
                id="views"
                :value="Intl.NumberFormat()?.format(calculatedViews)"
                class="block p-3 rounded-lg focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
              />
            </div>

            <div
              class="relative flex-col lg:flex-row items-center flex-start flex p-1 rounded-lg w-ful gap-5"
            >
              <div class="font-light text-md">
                <label for="clicks">Expected clicks</label>
              </div>
              <input
                disabled
                :value="Intl.NumberFormat()?.format(calculatedClicks)"
                type="text"
                id="clicks"
                class="block p-3 w-ful rounded-lg focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
              />
            </div>
          </div>

          <p class="text-gray-500 pt-2 text-xs font-thin">
            Pricing of job posts and extra features is dynamic and may change
            based on how many jobs are posted every week, for example to avoid
            too many sticky jobs at one time. Sticky posts are limited to max 2
            per company at one time. Job posts are a) published for 30 days, b)
            cannot be refunded, and c) renew automatically after 30 days unless
            you 1) disable auto renew after posting on the edit page, or 2)
            close your job post on the edit page. We send a reminder 7 days by
            email before renewing. Renewing is the same price as the original
            job post for 30 days. If you buy a bundle, the discounted single job
            post price is used to renew. Automatic renewals can be self-refunded
            within 7 days after renewing with the link in the email.
          </p>
        </div>

        <!-- Company Details -->
        <div class="rounded border border-solid border-gray-300 p-3 my-5">
          <div class="pb-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="company_name"
                  >Company Logo
                  <span class="text-xs"
                    >(.JPG OR .PNG, SQUARE OR ROUND)</span
                  ></label
                >
              </div>
              <div class="inline-block mr-5">
                <Avatar
                  size="medium"
                  :src="job.company_logo"
                  :name="job.company_name"
                />
              </div>
              <CldUploadWidget
                :options="{
                  showPoweredBy: false,
                  folder: '/Get Backend Jobs/logos',
                  multiple: false,
                  sources: ['local', 'url'],
                  clientAllowedFormats: ['jpeg', 'png', 'jpg'],
                }"
                v-slot="{ open }"
                signatureEndpoint="/api/sign-cloudinary-params"
                :on-upload="uploadImage"
              >
                <button
                  class="py-2 px-3 bg-blue-600 rounded text-white"
                  type="button"
                  @click="open"
                >
                  Upload an Image
                </button>
              </CldUploadWidget>
            </div>
          </div>

          <div class="flex items-center pb-5">
            <div>
              <input
                id="show_color"
                type="checkbox"
                v-model="job.show_color"
                value=""
                class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="show_color"
                class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
                >Highlight with your company's 🌈 brand color (+$29
                <span class="pr-2 line-through decoration-red-500">$199</span>)
                👉</label
              >
            </div>
            <input
              autocomplete="off"
              type="color"
              :disabled="!job.show_color"
              @change="
                (item) => {
                  color = item?.target?.value ?? '#ff4742';
                }
              "
              class="input_highlight_color_value"
              value="#ff4742"
            />
            <span
              class="tooltip"
              title="Based on previous job post data compared to a regular job post"
              style="
                border: 1px solid #ff4742;
                background: none;
                display: inline-block;
                text-transform: uppercase;
                color: #ff4742;
                font-size: 12px;
                margin-left: 14px;
                font-weight: bold;
                border-radius: 6px;
                padding: 3px;
              "
            >
              2x more views
            </span>

            <span class="text-xs text-red-500" v-if="v$.brand_color.$error">{{
              v$.brand_color.$errors[0].$message
            }}</span>
          </div>

          <div class="pb-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="company_name"
                  >ANNUAL SALARY OR COMPENSATION IN USD

                  <span class="text-xs"
                    >(GROSS, ANNUALIZED, FULL-TIME-EQUIVALENT (FTE) IN USD
                    EQUIVALENT)</span
                  >*</label
                >
              </div>
              <div class="flex lg:flex-row flex-col items-center text-white">
                <div
                  class="flex p-1 flex-start items-center rounded-lg w-ful gap-5 mr-5"
                >
                  <div class="font-light text-md">
                    <label for="minimum_per_year">Minimum per year </label>
                  </div>
                  <input
                    type="number"
                    v-model="job.min_salary"
                    placeholder="0.0"
                    id="minimum_per_year"
                    class="block p-3 rounded-lg focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                  />
                </div>

                <div
                  class="relative items-center flex-start flex p-1 rounded-lg w-ful gap-5"
                >
                  <div class="font-light text-md">
                    <label for="maximum_per_year">Maximum per year </label>
                  </div>
                  <input
                    type="number"
                    v-model="job.max_salary"
                    placeholder="0.0"
                    id="maximum_per_year"
                    class="block p-3 w-ful rounded-lg focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <span class="text-xs text-red-500" v-if="v$.min_salary.$error"
            >{{ v$.min_salary.$errors[0].$message }} |
          </span>

          <span class="text-xs text-red-500" v-if="v$.max_salary.$error">{{
            v$.max_salary.$errors[0].$message
          }}</span>

          <p class="text-gray-500 pt-2 pb-5 text-xs font-thin">
            <span>
              <strong class="highlight" style="text-decoration: underline"
                >It's illegal to not share salary range on job posts since
                2021.</strong
              >
              Posts without salary will automatically show an estimate of salary
              based on similar jobs. Remote job postings are
              <a
                target="_blank"
                class="underline"
                href="https://www.natlawreview.com/article/colorado-pay-transparency-more-guidance-job-promotional-posting-requirements-issued"
                >legally required to show a salary compensation range</a
              >
              in
              <a
                target="_blank"
                class="underline"
                href="https://www.lexology.com/library/detail.aspx?g=f81b6cd9-f614-411c-908b-88866db7ea84"
                >many U.S. states and countries</a
              >. Google does NOT index jobs without salary data. If it's a
              short-term gig, use the annual full-time equivalent. For example,
              if it's a 2-week project for $2,000, the annual equivalent would
              be $2,000 / 2 weeks * 52 weeks = $52,000. Please use USD
              equivalent. We don't have currency built-in yet and we'd like to
              use this salary data to show salary trends in remote work.
              <a
                target="_blank"
                class="underline"
                href="https://twitter.com/levelsio/status/1364288537030459400"
                >Get Backend Jobs is a supporter of #OpenSalaries</a
              >.
            </span>
          </p>

          <div class="pb-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="job_description">Job description*</label>
              </div>
              <div class="flex w-full items-center">
                <div class="w-full">
                  <Editor
                    id="job_description"
                    :init="{
                      menubar: false,
                      plugins:
                        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                      toolbar:
                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | removeformat',
                    }"
                    class="w-full"
                    initial-valu="The description of the job position will appear here. Write this in the 'Job Description' box above."
                    :api-key="config.public?.tinymce"
                    v-model="job.description"
                  />
                </div>
              </div>
            </div>
            <span class="text-xs text-red-500" v-if="v$.description.$error">{{
              v$.description.$errors[0].$message
            }}</span>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="benefits">Benefits* </label>
              </div>
              <div class="pb- bg-white rounded-lg">
                <Dropdown
                  :items="benefits"
                  editable
                  @selected="selectedbenefits"
                  title="Benefits"
                  :isRoundedFull="false"
                />
              </div>
            </div>
            <span class="text-xs text-red-500" v-if="v$.benefits.$error">{{
              v$.benefits.$errors[0].$message
            }}</span>
          </div>

          <div class="pb-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="how_to_apply">How to Apply</label>
              </div>
              <div class="flex items-center">
                <!-- <textarea
                  v-model="job.how_to_apply"
                  id="how_to_apply"
                  class="w-full"
                  rows="20"
                  placeholder="Here the instructions go on how to apply for this job. Write them in the 'How to Apply?' box"
                ></textarea> -->

                <div class="w-full">
                  <Editor
                    id="how_to_apply"
                    :init="{
                      menubar: false,
                      plugins:
                        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                      toolbar:
                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | removeformat',
                    }"
                    class="w-full"
                    initial-valu="Here the instructions go on how to apply for this job. Write them in the 'How to Apply?' box"
                    :api-key="config.public?.tinymce"
                    v-model="job.how_to_apply"
                  />
                </div>
              </div>
            </div>
            <span class="text-xs text-red-500" v-if="v$.how_to_apply.$error">{{
              v$.how_to_apply.$errors[0].$message
            }}</span>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="apply_url">APPLY URL*</label>
              </div>
              <input
                type="text"
                v-model="job.apply_url"
                id="apply_url"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Apply URL"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.apply_url.$error">{{
              v$.apply_url.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              Apply URLs with a form an applicant can fill out generally receive
              a lot more applicants than having people apply by email (below). A
              good platform to have applicants apply on is Lever (not
              affiliated).
            </p>
          </div>
          <p class="text-center text-2xl">Or</p>
          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="apply_email">APPLY Email Address</label>
              </div>
              <input
                type="email"
                v-model="job.apply_email"
                id="apply_email"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Apply Emaill Address"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.apply_email.$error">{{
              v$.apply_email.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              This email is public (!), the [ Apply ] button links to it if you
              do not specify an Apply URL above. We recommend using an Apply
              URL, instead of an Apply Email Address, because you might get a
              lot of spam/automated applicants by email.
            </p>
          </div>
        </div>
        <div class="rounded border border-solid border-gray-300 p-3 my-5">
          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="company_twitter">Company Twitter</label>
              </div>
              <input
                type="text"
                v-model="job.company_twitter"
                id="company_twitter"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Twitter username"
              />
            </div>
            <span
              class="text-xs text-red-500"
              v-if="v$.company_twitter.$error"
              >{{ v$.company_twitter.$errors[0].$message }}</span
            >
            <p class="text-gray-500 pt-2 text-xs">
              Twitter username without @. Not required, but used to tag your
              company when we tweet out your job post.
            </p>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="company_email"
                  >COMPANY EMAIL* (STAYS PRIVATE, FOR INVOICE + EDIT LINK)
                </label>
              </div>
              <input
                type="email"
                v-model="job.company_email"
                id="company_email"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Company email"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.company_email.$error">{{
              v$.company_email.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              Make sure this email is accessible by you! We use this to send the
              invoice and edit link. We can not and do not manually resend it!
              If you use your company domain (same as company name), we will
              show a [ Verified ] tag on your job post.
            </p>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="company_website">Company Website</label>
              </div>
              <input
                type="text"
                v-model="job.company_website"
                id="company_website"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Company website"
              />
            </div>
            <span
              class="text-xs text-red-500"
              v-if="v$.company_website.$error"
              >{{ v$.company_website.$errors[0].$message }}</span
            >
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="invoice_email">Invoice Email (Stays private)</label>
              </div>
              <input
                type="email"
                v-model="job.invoice_email"
                id="invoice_email"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Invoice email"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.invoice_email.$error">{{
              v$.invoice_email.$errors[0].$message
            }}</span>
            <p class="text-gray-500 pt-2 text-xs">
              We send a copy of the invoice and edit link to here too. You can
              write your finance department or accountant expenses email here so
              they get a copy of the invoice for your bookkeeping.
            </p>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="invoice_address">INVOICE ADDRESS </label>
              </div>
              <textarea
                id="invoice_address"
                v-model="job.invoice_address"
                placeholder="e.g. your company's full name and full invoice address, including building, street, city and country; also things like your VAT number, this is shown on the invoice."
                class="w-full"
                rows="5"
              ></textarea>
            </div>
            <span
              class="text-xs text-red-500"
              v-if="v$.invoice_address.$error"
              >{{ v$.invoice_address.$errors[0].$message }}</span
            >
            <p class="text-gray-500 pt-2 text-xs">
              Specify your company address here and we'll put it on your invoice
              for your bookkeeping. Be sure to [ Save changes ] in bottom right
              after editing your invoice address. Then it'll be instantly
              updated on the invoice.
            </p>
          </div>

          <div class="py-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="invoice_notes">INVOICE NOTES / PO NUMBER</label>
              </div>
              <input
                type="text"
                id="invoice_notes"
                v-model="job.invoice_notes"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="e.g PO number 1234"
              />
            </div>
            <p class="text-gray-500 pt-2 text-xs">
              Not required. Add notes here that you'd like to see on the
              invoice/receipt such as a Purchase Order number or any other
              internal notes you need for reference. You can add or edit this
              later.
            </p>
          </div>

          <div class="flex items-center py-2">
            <input
              id="pay_later"
              type="checkbox"
              value=""
              v-model="should_pay_later"
              class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="pay_later"
              class="ms-2 text-md font-light text-gray-900 dark:text-gray-300"
            >
              I'd like to pay later
            </label>
          </div>
          <p class="text-gray-500 pt-2 text-xs">
            Need to get approval for this payment? Or send the invoice to your
            finance department first? No problem, we'll save your job post and
            send you (and your finance department below) a payment link. Once
            it's paid we immediately publish it!
          </p>

          <div class="py-5" v-if="should_pay_later">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="pay_later_email">PAY LATER EMAIL* </label>
              </div>
              <input
                type="email"
                id="pay_later_email"
                v-model="job.pay_later_email"
                class="block p-3 w-full rounded-lg focus:outline-none w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white"
                placeholder="Pay later email address"
              />
            </div>
            <span
              class="text-xs text-red-500"
              v-if="v$.pay_later_email.$error"
              >{{ v$.pay_later_email.$errors[0].$message }}</span
            >
            <p class="text-gray-500 pt-2 text-xs">
              We will send a link to pay for this job to this email address.
            </p>
          </div>
        </div>

        <!-- Feedback box -->
        <div class="rounded border border-solid border-gray-300 p-3 my-5">
          <div class="pb-5">
            <div
              class="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-lg w-full"
            >
              <div class="p-2 text-white font-bold text-lg">
                <label for="company_name">Feedback box</label>
              </div>
              <div class="flex items-center">
                <textarea
                  v-model="job.feedback"
                  class="w-full"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <p class="text-gray-500 pt-2 text-xs">
              This isn't part of the job post. If you have any feature requests
              or general feedback about posting a job Get Backend Jobs, leave it
              here. Please be radically honest, I'm always improving the site
              and act on your feedback fast. It's most important that you're
              happy with the site and I want you to keep coming back to post
              here! This feedback box gets sent straight to my phone wherever I
              am. -Solomon Eseme, Founder of Get Backend Jobs
            </p>
          </div>
        </div>

        <!-- Preview -->
        <div class="rounded border border-solid border-gray-300 p-3 my-5">
          <div class="text-center">
            <p class="text-md font-bold">
              Here's a preview of how your job post will look like
            </p>
            <p class="font-light text-md py-4">
              Don't worry if it's not perfect first time: your job is fully
              editable for free after posting it
            </p>
          </div>

          <div class="rounded-lg bg-gray-100 w-full p-5">
            <div
              class="gap-5 flex lg:flex-row flex-col justify-between items-center p-4 rounded-t-lg"
              :class="{
                'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white':
                  job.highlight_post_yellow,
                'text-black': color.includes('#fff') || !color,
                'text-white': color && !color.includes('#fff'),
                'text-white':
                  job.show_color && color && !color.includes('#fff'),
              }"
              :style="{
                'background-color':
                  job.show_color && color.includes('#fff') ? '#ff4742' : color,
              }"
            >
              <div class="flex justify-between items-center gap-20">
                <div v-if="job.show_company_logo">
                  <Avatar
                    :src="job.company_logo"
                    :name="job.company_name"
                  ></Avatar>
                </div>
                <div class="flex flex-col">
                  <p>{{ job?.company_name ? job.company_name : "Company" }}</p>
                  <p class="font-bold text-lg">
                    {{ job?.positon ? job.position : "Position" }}
                  </p>
                  <div
                    class="flex gap-1 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 flex-col"
                  >
                    <span
                      v-if="!job?.locations.length"
                      :class="{
                        'text-black border border-solid border-gray-200':
                          color.includes('#fff') || !color,
                        'text-black': color && !color.includes('#fff'),
                      }"
                      class="bg-white px-2 py-1 mt-2 rounded-lg text-xs"
                      >🌏 Worldwide</span
                    >
                    <span
                      v-for="(location, i) in job?.locations?.length &&
                      job.locations"
                      :key="i"
                      :class="{
                        'text-black border border-solid border-gray-200':
                          color.includes('#fff') || !color,
                        'text-black': color && !color.includes('#fff'),
                      }"
                      class="bg-white px-2 py-1 rounded-lg text-xs"
                    >
                      {{ location }}</span
                    >

                    <span
                      :class="{
                        'text-black border border-solid border-black':
                          color.includes('#fff') || !color,
                        'text-black': color && !color.includes('#fff'),
                      }"
                      class="bg-white px-2 py-1 mt-2 rounded-lg text-xs"
                      >💰 ${{
                        Intl.NumberFormat("en", { notation: "compact" }).format(
                          job?.min_salary ?? 0.0
                        )
                      }}
                      - ${{
                        Intl.NumberFormat("en", { notation: "compact" }).format(
                          job?.max_salary ?? 0.0
                        )
                      }}</span
                    >
                  </div>
                </div>
              </div>

              <div
                class="flex gap-2 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 flex-col"
              >
                <span
                  v-for="(keyword, i) in job.keywords"
                  :key="i"
                  class="bg-white px-2 py-1 rounded-lg text-xs"
                  :class="{
                    'text-black border border-solid border-gray-200':
                      color.includes('#fff') || !color,
                    'text-black': color && !color.includes('#fff'),
                  }"
                  >{{ keyword }}</span
                >
              </div>

              <div
                :class="{
                  'text-white border-white': job.highlight_post_yellow,
                  'text-white border-white': !color,
                  'text-white': job.show_color && color,
                }"
              >
                <p v-if="job.stick_for_1_month">📌sticky for 30 days</p>
                <p v-if="job.stick_for_1_week">📌sticky for 7 days</p>
                <p v-if="job.stick_for_24_hours">📌sticky for 1 day</p>
              </div>

              <div>
                <button
                  disabled
                  :class="{
                    'text-white border-white': job.highlight_post_yellow,
                    'text-white border-white': !color,
                    'text-white':
                      job.show_color && color && !color.includes('#fff'),
                  }"
                  class="border-dashed border px-5 rounded-lg py-1"
                >
                  Apply
                </button>
              </div>
            </div>

            <div
              class="flex flex-col lg:flex-row justify-between relative gap-5"
            >
              <div class="pb-3 md:px-10 pt-10">
                <div>
                  <h2 class="text-3xl font-thin py-4">
                    {{ job.company_name ? job.company_name : "Company" }} is
                    hiring a
                  </h2>

                  <h1 class="text-4xl font-bold">
                    {{ job.position ? job.position : "Backend Position" }}
                  </h1>
                </div>
                <div class="pt-2 font-light">
                  <article
                    class="py-2"
                    v-if="job.description"
                    v-html="job.description"
                  ></article>

                  <article v-else class="py-2">
                    The description of the job position will appear here. Write
                    this in the 'Job Description' box above.
                  </article>
                </div>
              </div>

              <div
                class="rounded-b-lg border border-solid border-gray-200 p-5 lg:my-0 my-4 lg:w-[250px] w-full justify-center bg-[#fbfaf8]"
                style="float: right"
              >
                <div class="flex justify-center">
                  <Avatar
                    :name="job.company_name ? job.company_name : 'Company'"
                    :src="job.company_logo"
                    size="medium"
                  />
                </div>
                <div class="py-4 text-center">
                  <h4 class="text-2xl font-black">
                    {{ job.company_name ? job.company_name : "Company" }}
                  </h4>

                  <a
                    :href="job.company_website ?? '#'"
                    class="underline text-xl w-full font-bold"
                    ><p class="w-full">
                      {{
                        job.company_name ? job.company_name : "www.company.com"
                      }}
                    </p></a
                  >
                </div>

                <div class="py-2">
                  <button
                    class="px-3 py-2 bg-red-400 rounded-lg text-white w-full"
                  >
                    Apply Now
                  </button>
                </div>

                <div class="py-2 text-center">
                  <div class="text-lg py-2 font-light">
                    <span> 👀 </span>
                    <span
                      >{{
                        Intl.NumberFormat()?.format(calculatedViews)
                      }}
                      views</span
                    >
                  </div>

                  <div class="text-lg py-2 font-light">
                    <span> ✅ </span>
                    <span
                      >{{
                        Intl.NumberFormat()?.format(calculatedClicks)
                      }}
                      applied ({{ calculatedPercent }}%)</span
                    >
                  </div>
                </div>

                <div class="flex justify-center text-center py-2 flex-col">
                  <h5 class="text-lg font-bold pb-2">Share this job:</h5>
                  <input
                    disabled
                    type="text"
                    placeholder="https://getbackendjobs.com/jobs/remote-software-development-team-leader-venture-personnel-624164?ref=sh"
                    class="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div
              class="border rounded-lg border-solid border-gray-400 p-5 container mx-auto my-5 md:w-3/4 w-full"
            >
              <h3 class="font-bold text-xl text-center py-5">
                How do you apply?
              </h3>
              <article
                v-if="job.how_to_apply"
                class="text-center"
                v-html="job.how_to_apply"
              ></article>
              <article class="text-center" v-else>
                <p class="py-5">
                  Here the instructions go on how to apply for this job. Write
                  them in the "How to Apply?" box
                </p>
              </article>

              <div class="flex justify-center py-5">
                <button
                  disabled
                  class="border-dashed text-gray-400 border border-gray-400 px-5 rounded-lg py-1"
                >
                  Apply for this job
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Advert -->
        <div class="rounded border border-solid border-gray-300 p-3 my-5">
          <div class="pb-5">
            <div
              class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 gap-5 flex flex-col lg:flex-row justify-between items-center p-4 rounded-t-lg"
            >
              <div
                class="flex flex-col lg:flex-row justify-between text-center items-center lg:gap-20 gap-5"
              >
                <div>
                  <Avatar></Avatar>
                </div>
                <div class="text-white">
                  <p class="text-md font-bold">
                    Exclusive Backend Engineering training for your team
                  </p>
                  <p class="font-light text-sm">
                    Enroll your team to advance their software engineering
                    career with the latest backend strategies, tips, and tactics
                    working today.
                  </p>
                </div>
              </div>

              <div class="flex justify-center md:w-60 w-full">
                <a
                  href="https://masteringbackend.com?ref=getbackendjobs"
                  class="border-solid flex border text-black bg-white border-white px-6 rounded-lg py-1"
                >
                  Sign up now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Left Sidebar -->
      <div class="md:w-2/6 w-full pb-40 text-center">
        <div class="p-10">
          <p class="p-1">
            Get Backend Jobs is the most popular backend engineering job board
            in the world trusted by thousands of backend engineers and leading
            tech companies like
          </p>

          <div
            class="flex gap-2 py-5 w-ful items-center justify-center grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 flex-col"
          >
            <div class="w-">
              <img
                src="~/assets/masteringlogo.png"
                class="w-full cover"
                alt=""
              />
            </div>
            <div class="w-">
              <Pressone />
            </div>
            <div class="w-">
              <Contentre />
            </div>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10">
            <p class="flex flex-col justify-center">
              <span class="">Starting from</span>
              <span class="font-bold text-xl">$0 - $118</span>
              <span>for 30 days</span>
            </p>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10">
            <p class="flex flex-col justify-center">
              <span class="">Reach</span>
              <span class="font-bold text-xl">50,000+</span>
              <span>backend engineers/mo</span>
            </p>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10">
            <p class="flex flex-col justify-center">
              <span class="">Distributed on the</span>
              <span class="font-bold text-xl">Google for Jobs</span>
              <span>recruitment network</span>
            </p>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10">
            <span class="flex flex-col justify-center items-center">
              <span class="">Rated</span>
              <div class="flex items-center my-1 space-x-1">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
              <span>Customer rating 4.9 | 5+ reviews</span>
            </span>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10">
            <p class="flex flex-col justify-center">
              <span class="">Emailed to</span>
              <span class="font-bold text-xl">10,000</span>
              <span>backend engineering job seekers</span>
            </p>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10">
            <p class="flex flex-col justify-center">
              <span class="">Crossposted to</span>
              <span class="font-bold text-xl">10 job boards + communities</span>
              <span>That currently use our API</span>
            </p>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10">
            <p class="flex flex-col justify-center">
              <span class="">Guaranteed</span>
              <span class="font-bold text-xl">100+ [Apply] clicks</span>
              <span>or we auto bump it for free</span>
            </p>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10">
            <div class="flex flex-col justify-center">
              <span class="">Pay with</span>
              <div>
                <img
                  src="https://remoteok.com/assets/payment-methods.png?1708185060"
                  alt=""
                />
              </div>
              <span>Secure payment with Stripe or Paddle</span>
            </div>
          </div>
        </div>

        <div class="border-t border-solid border-gray-300">
          <div class="p-10 flex flex-col gap-5 items-center">
            <div class="w-60">
              <Avatar
                size="large"
                src="https://media.licdn.com/dms/image/D4D03AQH_aOkYilHvQg/profile-displayphoto-shrink_800_800/0/1669993235313?e=1716422400&v=beta&t=TaThiLh54TN9ijbAJ97eJkpcXWAahax3zETgQgxvqZI"
              />
            </div>
            <p>
              "Very effective and
              <span class="bg-yellow-200 py-1 px-1 font-bold"
                >reliable way to reach competent candidates</span
              >. Thank you for your great work!"
            </p>
            <span>
              <a
                href="https://www.linkedin.com/in/chibueze-nwosu-730a7743/"
                class="pr-3"
                >Chibueze Nwosu</a
              >-CTO at OpenRetail</span
            >
          </div>
        </div>
        <div class="border-t border-solid border-gray-300">
          <div class="p-10 flex flex-col gap-5 items-center">
            <div class="w-60">
              <Avatar
                size="large"
                src="https://media.licdn.com/dms/image/D4D03AQEiHuoQ9-79qQ/profile-displayphoto-shrink_800_800/0/1672227614408?e=1716422400&v=beta&t=J6KR2X-MTIHs7iy-_lB7oJbVoto9yI7qq6RJiAQcTUM"
              />
            </div>
            <p class="text-md leading-relaxed">
              Hi I'm the maker of Get Backend Jobs and other sites related to
              backend engineering such as
              <a href="https://masteringbackend.com?ref=getbackendjobs"
                >Mastering Backend</a
              >,
              <a
                href="https://playground.masteringbackend.com?ref=getbackendjobs"
                >Backend Code Playground</a
              >, <a href="#">Backend Interview Prep</a>,
              <a href="#">Backend Joy</a>.
            </p>

            <p>
              Get Backend Jobs isn't a big team, it's actually just a one-person
              operation which is me on my laptop in my home office somewhere in
              the world. I built Get Backend Jobs to help backend engineers find
              jobs and companies access backend talents easily (and pay my rent
              and snooker board).
            </p>
            <p class="text-md leading-relaxed">
              Need help posting your job? Here's
              <a href="https://twitter.com/kaperskyguru">my Twitter</a>. Tweet
              to me and I'll help you personally and can also help you if you'd
              like to buy muiple job posts packages or get a discount.
            </p>
            <p>Unlock your Backend Career!</p>
            <p class="text-md leading-relaxed">
              -- <a href="#">Solomon Eseme</a>, Founder of
              <span class="font-bold">Get Backend Jobs</span>
            </p>
          </div>
        </div>
      </div>
      <!-- Bottom Sidebar -->
      <section
        class="fixed bottom-0 bg-white h- w-full border border-solid border-gray-200"
      >
        <div class="flex">
          <div
            :class="{
              'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white':
                job.highlight_post_yellow,
              'text-black': color.includes('#fff') || !color,
              'text-white': color && !color.includes('#fff'),
              'text-white': job.show_color && color,
            }"
            :style="{
              'background-color':
                job.show_color && color.includes('#fff') ? '#ff4742' : color,
            }"
            class="w-full hidden md:flex border-r border-solid border-gray-200 gap-3 justify-between items-center px-10 py-4"
          >
            <div class="flex justify-between items-center gap-20">
              <div v-if="job.show_company_logo">
                <Avatar
                  :src="job.company_logo"
                  :name="job.company_name"
                ></Avatar>
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-inherit">
                  {{ job.company_name ? job.company_name : "Company" }}
                </p>
                <p class="font-bold text-lg">
                  {{ job.position ? job.position : "Remote Backend" }}
                </p>

                <div
                  class="flex gap-1 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 flex-col"
                >
                  <span
                    v-if="!job?.locations.length"
                    :class="{
                      'text-black border border-solid border-black':
                        color.includes('#fff') || !color,
                      'text-black': color && !color.includes('#fff'),
                    }"
                    class="bg-white px-2 py-1 rounded-lg text-xs"
                    >🌏 Worldwide</span
                  >
                  <span
                    v-for="(location, i) in job?.locations?.length &&
                    job.locations?.slice(0, 2)"
                    :key="i"
                    :class="{
                      'text-black border border-solid border-black':
                        color.includes('#fff') || !color,
                      'text-black': color && !color.includes('#fff'),
                    }"
                    class="bg-white px-2 py-1 rounded-lg text-xs"
                  >
                    {{ location }}</span
                  >

                  <span
                    :class="{
                      'text-black border border-solid border-black':
                        color.includes('#fff') || !color,
                      'text-black': color && !color.includes('#fff'),
                    }"
                    class="bg-white px-2 py-1 rounded-lg text-xs"
                    >💰 ${{
                      Intl.NumberFormat("en", { notation: "compact" }).format(
                        job?.min_salary ?? 0.0
                      )
                    }}
                    - ${{
                      Intl.NumberFormat("en", { notation: "compact" }).format(
                        job?.max_salary ?? 0.0
                      )
                    }}</span
                  >
                </div>
              </div>
            </div>

            <div
              class="flex gap-2 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-1 flex-col"
            >
              <span
                v-for="(keyword, i) in job.keywords?.slice(0, 3)"
                :key="i"
                :class="{
                  'text-black border border-solid border-black':
                    color.includes('#fff') || !color,
                  'text-black': color && !color.includes('#fff'),
                }"
                class="bg-white px-2 border border-solid py-1 rounded-lg text-xs"
                >{{ keyword }}</span
              >
            </div>

            <div
              :class="{
                'text-white border-white': job.highlight_post_yellow,
                'text-white border-white': !color,
                'text-white': job.show_color && color,
              }"
            >
              <p v-if="job.stick_for_1_month">📌sticky for 30 days</p>
              <p v-if="job.stick_for_1_week">📌sticky for 7 days</p>
              <p v-if="job.stick_for_24_hours">📌sticky for 1 day</p>
            </div>

            <div>
              <button
                disabled
                :class="{
                  'text-white border-white': job.highlight_post_yellow,
                  'text-white border-white': !color,
                  'text-white': job.show_color && color,
                }"
                class="border-dashed border px-5 rounded-lg py-1"
              >
                Apply
              </button>
            </div>
          </div>

          <div
            class="lg:w-2/4 w-full px-5 py-4 lg:py-1 flex justify-center items-center"
          >
            <button
              @click="startHiring"
              class="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-full py-6 text-white font-bold text-xl rounded-lg"
              :class="{ 'opacity-1': loading }"
              :disabled="loading"
            >
              <span v-if="loading">Loading...</span>
              <span v-else>
                Start hiring -- $<span
                  class="pr-2"
                  :class="{ 'line-through decoration-red-500': discount }"
                  >{{ calculatedPrice }}</span
                >
                <span v-if="discount">
                  ${{ calculatedPrice - calculatedPrice * 0.1 }}</span
                ></span
              >
            </button>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import {
  lemonSqueezySetup,
  createCheckout,
} from "@lemonsqueezy/lemonsqueezy.js";
import Editor from "@tinymce/tinymce-vue";
import Pressone from "~/assets/pressone-fulltext-logo.svg";
import Contentre from "~/assets/contentre.svg";
import useVuelidate from "@vuelidate/core";
import slugify from "slugify";
import {
  email,
  helpers,
  minLength,
  required,
  requiredIf,
  url,
} from "@vuelidate/validators";
import { Timestamp } from "firebase/firestore";
import { locations, benefits } from "~/helpers";
const should_pay_later = ref(false);
const discount = ref(false);
const config = useRuntimeConfig();
const loading = ref(false);
const color = ref("#fff");
const job = shallowReactive({
  show_color: false,
  show_company_logo: false,
  blast_to_newsletter: false,
  send_to_directory: true,
  enable_qr_code: false,
  primium_support: true,
  highlight_post_yellow: false,
  stick_for_24_hours: false,
  stick_for_1_week: false,
  stick_for_1_month: false,
  primary_level: "Senior",
  type: "Full-time",
  benefits: [],
  locations: [],
  description: ``,
  how_to_apply: ``,
  brand_color: color.value,

  external: false,
  posted_at: null,
  isLive: false,
  sticky_expired_date: null,
  total_views: 0,
  total_click: 0,
  slug: "",
  total_amount: 0.0,
  apply_email: "",
  apply_url: "",
  company_email: "",
  company_logo: "",
  company_name: "",
  company_twitter: "",
  company_website: "",
  invoice_address: "",
  invoice_email: "",
  invoice_notes: "",
  keywords: "",
  max_salary: 0.0,
  min_salary: 0.0,
  pay_later_email: "",
  position: "",
});

const calculatedViews = computed(() => {
  let defaultViews = 122;

  if (job.show_company_logo) defaultViews *= 2;
  if (job.enable_qr_code) defaultViews *= 2;
  if (job.highlight_post_yellow) defaultViews *= 2;
  if (job.blast_to_newsletter) defaultViews *= 2;
  if (job.show_color) defaultViews *= 2;
  if (job.stick_for_24_hours) defaultViews *= 2;
  if (job.stick_for_1_week) defaultViews *= 6;
  if (job.stick_for_1_month) defaultViews *= 9;

  job.average_views = defaultViews;
  return defaultViews;
});

const calculatedClicks = computed(() => {
  let clicks = 14;

  if (job.show_company_logo) clicks *= 2;
  if (job.enable_qr_code) clicks *= 2;
  if (job.highlight_post_yellow) clicks *= 2;
  if (job.blast_to_newsletter) clicks *= 2;
  if (job.show_color) clicks *= 2;
  if (job.stick_for_24_hours) clicks *= 2;
  if (job.stick_for_1_week) clicks *= 6;
  if (job.stick_for_1_month) clicks *= 9;

  job.average_clicks = clicks;

  return clicks;
});

const calculatedPrice = computed(() => {
  let price = 0;

  if (job.show_company_logo) price += 5;
  if (job.primium_support) price += 0;
  if (job.enable_qr_code) price += 24;
  if (job.highlight_post_yellow) price += 15;
  if (job.blast_to_newsletter) price += 10;
  if (job.show_color) price += 29;
  if (job.stick_for_24_hours) price += 19;
  if (job.stick_for_1_week) price += 25;
  if (job.stick_for_1_month) price += 50;
  job.total_amount = price;
  return price;
});

const calculatedPercent = computed(() =>
  Math.round(calculatedViews.value / calculatedClicks.value)
);

watch(
  () => job.stick_for_24_hours,
  (value) => {
    if (value) {
      job.stick_for_1_week = false;
      job.stick_for_1_month = false;
    }
  }
);

watch(
  () => job.show_color,
  (value) => {
    if (value) {
      job.highlight_post_yellow = false;
    }

    if (!value) color.value = "#fff";
  }
);

watch(
  () => job.highlight_post_yellow,
  (value) => {
    if (value) {
      job.show_color = false;
    }
  }
);

watch(
  () => job.stick_for_1_week,
  (value) => {
    if (value) {
      job.stick_for_24_hours = false;
      job.stick_for_1_month = false;
    }
  }
);

watch(
  () => job.stick_for_1_month,
  (value) => {
    if (value) {
      job.stick_for_1_week = false;
      job.stick_for_24_hours = false;
    }
  }
);

function selectedbenefits(items) {
  job.benefits = items;
}

function selectedKeywords(items) {
  job.keywords = items;
}

function selectedLocation(items) {
  job.locations = items;
}

function calculateStickyDate(job) {
  let date = null;
  if (job.stick_for_24_hours) {
    date = new Date().setDate(a.getDate() + 1);
  }

  if (job.stick_for_1_week) {
    date = new Date().setDate(now.getDate() + 1 * 7);
  }

  if (job.stick_for_1_month) {
    date = new Date(date.setMonth(date.getMonth() + 1));
  }

  return date;
}

const mustBeUsername = (value) => !value.includes("@");

const rules = computed(() => {
  return {
    company_name: {
      required: helpers.withMessage(
        "The company name field is required",
        required
      ),
    },

    position: {
      required: helpers.withMessage("The position field is required", required),
      minLength: minLength(6),
    },

    type: {
      required: helpers.withMessage("The job type field is required", required),
    },

    primary_level: {
      required: helpers.withMessage(
        "The Job seniority field is required",
        required
      ),
    },

    keywords: {
      required: helpers.withMessage(
        "The tags,keywords or stacks field is required",
        required
      ),
    },

    locations: {
      required: helpers.withMessage(
        "The locations field is required",
        required
      ),
    },

    min_salary: {
      required: helpers.withMessage(
        "The min salary field is required",
        required
      ),
    },

    max_salary: {
      required: helpers.withMessage(
        "The max salary field is required",
        required
      ),
    },

    description: {
      required: helpers.withMessage(
        "The Job Description field is required",
        required
      ),
    },

    benefits: {
      required: helpers.withMessage(
        "The Job Benefits field is required",
        required
      ),
    },

    how_to_apply: {
      required: helpers.withMessage(
        'The "How To Apply" field is required',
        required
      ),
    },

    apply_url: {
      required: helpers.withMessage(
        "The Apply URL field is required",
        required
      ),
    },

    apply_email: {
      email: helpers.withMessage("Invalid email format", email),
    },

    company_twitter: {
      mustBeUsername: helpers.withMessage(
        "The Company Twitter field must not contain @",
        mustBeUsername
      ),
    },

    company_email: {
      required: helpers.withMessage(
        "The Company Email field is required",
        required
      ),
      email: helpers.withMessage("Invalid email format", email),
    },

    company_website: {
      url: helpers.withMessage("The Company Website field must be a URL", url),
    },

    invoice_email: {
      email: helpers.withMessage("Invalid email format", email),
    },

    invoice_address: {
      minLength: minLength(6),
    },

    pay_later_email: {
      requiredIf: helpers.withMessage(
        "The Pay Later Email field is required",
        requiredIf(job?.should_pay_later)
      ),
      email: helpers.withMessage("Invalid email format", email),
    },

    brand_color: {
      requiredIf: helpers.withMessage(
        "The Brand Color field is required",
        requiredIf(job?.show_color)
      ),
    },
  };
});

const v$ = useVuelidate(rules, job);

async function uploadImage(data) {
  const result = data.value;
  if (result.event !== "success") return;
  job.company_logo = result?.info?.secure_url;
}
async function startHiring() {
  loading.value = true;
  v$.value.$validate();
  if (v$.value.$error) return;

  const slug = `${slugify(job.position, {
    trim: true,
    lower: true,
    strict: true,
  })}-${generateString(6)}`;

  job.posted_at = Timestamp.now();
  job.slug = slug;

  // Calculate sticky_expired_date
  job.sticky_expired_date = calculateStickyDate(job);

  if (job.should_pay_later && job.pay_later_email) {
    const res = await $fetch("/api/jobs", {
      method: "POST",
      body: job,
    });

    // Email Draft link
    // Email Sequence
    loading.value = false;
    return;
  }

  // Make Payment

  // Create job

  await payment();
  job.isLive = true;
  const res = await $fetch("/api/jobs", {
    method: "POST",
    body: job,
  });

  // Email link
  // Email Sequence
  loading.value = false;
}

async function payment() {
  lemonSqueezySetup({
    apiKey: config.public?.lemon_API_key,
  });

  const storeId = config.public?.lemon_store ?? 82309;
  const variantId = config.public?.lemon_variant ?? 342075;
  const newCheckout = {
    productOptions: {
      name: "Post Backend Job",
      description: generateDesc(job),
      redirect_url: `${config.public?.baseURL}?redirect=payment-success`,
    },
    checkoutOptions: {},
    checkoutData: {
      email: job?.company_email,
    },
    expiresAt: null,
    preview: true,
    testMode: config.public?.appEnv == "development",
    customPrice: calculatedPrice.value * 100,
  };
  const { statusCode, error, data } = await createCheckout(
    storeId,
    variantId,
    newCheckout
  );

  if (statusCode == 201) {
    const checkoutUrl = data["data"]["attributes"]["url"];
    window.location = checkoutUrl;
    return;
  }
}

function generateString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function generateDesc(job) {
  let desc = "You customized your job post with premium listing features. \n\n";
  if (job.show_color) desc += " Highlight with your company's 🌈 brand color +";
  if (job.show_company_logo) desc += " Show my ⭐️ company logo +";
  if (job.blast_to_newsletter) desc += " Email blast to 📮15,000 engineers +";
  if (job.enable_qr_code) desc += " QR-code short link for your post +";
  if (job.primium_support) desc += " Get 💁‍♀️ premium support and help +";
  if (job.highlight_post_yellow) desc += " Highlight your post in gradient +";
  if (job.stick_for_24_hours) desc += " Sticky on 📌 top for ⏰ 24 hours +";
  if (job.stick_for_1_week) desc += " Sticky 📌 top for ⏰ 1 week +";
  if (job.stick_for_1_month) desc += " Sticky 📌 top for ⏰ 1 month";
  return desc;
}

useHead({
  title: "Hire Backend Engineers Remotely",
  meta: [
    {
      hid: "keywords",
      name: "keywords",
      content: `hire remote backend engineers, hire C# Backend engineers, hire PHP Backend engineers, hire Java Backend engineers, hire JavaScript Backend engineers, hire Rust Backend engineers, hire Golang Backend engineers, hire backend developers`,
    },
    {
      hid: "description",
      name: "description",
      content: `Hire the best remote backend talent in the world on Get Backend Jobs and reach millions of applicants, just like Amazon, Microsoft, Stripe, EasyJet, Shopify, ESPN, Intercom, GoDaddy, Namecheap, Invision, Toptal and thousands more remote companies.`,
    },

    {
      hid: "og:title",
      property: "og:title",
      content: "Hire Backend Engineers Remotely",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Hire the best remote backend talent in the world on Get Backend Jobs and reach millions of applicants, just like Vonage, Amazon, Microsoft, Stripe, Leetcode, Shopify, ESPN, Intercom, GoDaddy, Namecheap, Invision, Toptal and thousands more remote companies.",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://res.cloudinary.com/kaperskydisk/image/upload/v1710945111/Get%20Backend%20Jobs/hero.png`,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `/hire-backend`,
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

<style scoped>
label {
  text-transform: uppercase;
}

a {
  color: brown;
}
</style>