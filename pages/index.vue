<template>
  <div class="relative">
    <section class="top z-0">
      <div
        class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-full text-white overflow-hidden video px-5"
      >
        <!-- mimi-thian-unsplash.jpg
        style="transform: scaleX(-1)" -->
        <div class="absolute inset-0">
          <img
            src="~/assets/christin-hume-unsplash.jpg"
            alt="Background Image"
            class="object-cover object-center w-full h-full"
          />
          <div
            class="absolute inset-0 bg-black opacity-40 bg-gradient-to-r from-purple-900 to-blue-900"
          ></div>
        </div>

        <div
          class="relative z-10 flex flex-col justify-center items-center h-full text-center"
        >
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Unlock Your <span class="text-6xl font-black">Backend</span> Future
          </h1>
          <p class="text-lg font-black text-white mb-8">
            Find the Tailored
            <span class="text-2xl font-black">Backend Job</span> or the Perfect
            <span class="text-2xl font-black">Backend Talent</span>.
          </p>

          <form class="max-w-md w-full mx-auto">
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="backend engineers, remote backend roles"
              />
            </div>
          </form>
        </div>
      </div>

      <div class="">
        <svg
          viewBox="0 0 1440 120"
          fill="#fbfaf8"
          class="wave absolute bottom-0"
        >
          <path
            d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
          ></path>
        </svg>
      </div>
    </section>

    <div class="page md:bg-[#000] bg-[#f9f9f9] md:mx-auto md:container">
      <section class="md:my-0 mt-10 px-2">
        <div
          class="rounded-xl bg-white px-5 md:w-3/4 w-full md:py-4 p-1 md:px-10 container border border-gray-300 border-solid mx-auto"
          style="bottom: -5.1em"
        >
          <div
            class="w-full md:flex-row flex-col justify-between items-center flex gap-2 z-50"
          >
            <div class="md:w-3/4 w-full px-2 md:px-0">
              <p class="text-sm font-bold">
                Hiring backend engineers? Reach 50,000+ backend engineers on the
                #1 Backend Engineering Job Board
              </p>
            </div>
            <div class="w-ful justify-end gap-4 flex">
              <button
                class="bg-red-600 w-ful px-2 py-3 rounded-xl text-sm text-white"
              >
                <p class="w-full">Post a Backend Job</p>
              </button>
              <button
                class="border-red-600 w-ful border borser-solid px-2 py-1 rounded-xl text-sm text-red-600"
              >
                Hide this
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto md:w-3/4 w-full px-2 my-6">
        <div
          class="flex flex-col md:flex-row gap-2 text-black bg-white"
          style="opacity: 0.5; filter: saturate(0)"
        >
          <p class="text-gray-500 text-sm">trusted by</p>
          <div class="flex flex-col md:flex-row items-center gap-5">
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
        <div class="flex flex-col md:flex-row gap-2 my-5">
          <div class="flex flex-col md:flex-row w-full gap-5">
            <div>
              <Dropdown title="Filter" />
            </div>

            <div>
              <Dropdown title="Location" />
            </div>

            <div>
              <Dropdown title="Salary" />
            </div>

            <div>
              <Dropdown title="Benefits" />
            </div>
          </div>
          <div class="md:w-60 w-full md:text-right">
            <Dropdown title="Sort By" />
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-2">
          <div class="flex flex-col md:flex-row w-full gap-5">
            <div>
              <Suggested title="Location" />
            </div>

            <div>
              <Suggested title="Salary" />
            </div>

            <div>
              <Suggested title="Benefits" />
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
            <button
              class="px-10 flex text-black left-1 py-2 bg-red-600 rounded-full bg-white"
            >
              Sign up toady
            </button>
          </div>
        </div>
      </section>

      <section>
        <Job bg-color="blue" />

        <Job bg-color="red" />

        <Job />

        <Job />

        <Job bg-color="red" />

        <Job bg-color="blue" />

        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </section>
    </div>
  </div>
</template>

<script setup>
import Pressone from "~/assets/pressone-fulltext-logo.svg";
import Contentre from "~/assets/contentre.svg";
import WorldIcon from "~/assets/world.svg";
</script>


<style>
.video {
  background-color: var(--global-text-color);
  background-size: cover;
  min-width: 100%;
  top: 0;
  min-height: 100%;
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-color: #ddd;
  position: absolute;
  background-position: center center;
  background-size: cover;
}

.top {
  min-height: 400px;
  height: 60vh;
  margin-bottom: -60px;
  max-width: 100%;
  position: relative;
  /* height: 35vh; */
  overflow: hidden;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0) 50%
  ) !important;
  /* } */
}

.wave {
  position: absolute;
  bottom: -50px;
  bottom: -75px;
  bottom: -5vw;
  left: 0;
  z-index: -1;
  width: 100vw;
}

.page {
  z-index: 0;
  position: relative;
  padding: 0;
  margin: 0;
  padding-bottom: 10em;
  background: 0 0;
  height: auto !important;
  height: 100%;
  margin: 0 auto;
}
</style>