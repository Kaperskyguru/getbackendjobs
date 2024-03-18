<template>
  <span class="w-full relative">
    <button
      @click="showMenu = !showMenu"
      id="dropdownSearchButton"
      data-dropdown-toggle="dropdownSearch"
      data-dropdown-placement="bottom"
      class="text-gray-600 border-gray-200 rounded-full border border-solid hover:bg-greay-800 focus:ring-0 focus:outline-none w-full focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      {{ title }}
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
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
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="showMenu"
      id="dropdownSearch"
      class="z-50 bg-white absolute rounded-lg shadow w-60 dark:bg-gray-700"
    >
      <div class="p-3">
        <label for="input-group-search" class="sr-only">Search</label>
        <div class="relative">
          <div
            class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            id="input-group-search"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :placeholder="`Search ${title}`"
          />
        </div>
      </div>
      <ul
        class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownSearchButton"
      >
        <li v-for="(item, i) in items" :key="i">
          <div
            v-if="multiple"
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              id="checkbox-item-11"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-11"
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >{{ item }}</label
            >
          </div>

          <div
            v-else
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <p
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >
              {{ item }}
            </p>
          </div>
        </li>
        <li>
          <div
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              checked
              id="checkbox-item-12"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-12"
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >Jese Leos</label
            >
          </div>
        </li>
        <li>
          <div
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              id="checkbox-item-13"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-13"
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >Michael Gough</label
            >
          </div>
        </li>
        <li>
          <div
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              id="checkbox-item-14"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-14"
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >Robert Wall</label
            >
          </div>
        </li>
        <li>
          <div
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              id="checkbox-item-15"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-15"
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >Joseph Mcfall</label
            >
          </div>
        </li>
        <li>
          <div
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              id="checkbox-item-16"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-16"
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >Leslie Livingston</label
            >
          </div>
        </li>
        <li>
          <div
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              id="checkbox-item-17"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-17"
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >Roberta Casas</label
            >
          </div>
        </li>
      </ul>
    </div>
  </span>
</template>

<script setup>
const showMenu = ref(false);
const props = defineProps({
  title: {
    default: "Search",
    type: String,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style>
</style>