<template>
  <span class="w-full">
    <button
      @click="showMenu = !showMenu"
      id="dropdownSearchButton"
      data-dropdown-toggle="dropdownSearch"
      data-dropdown-placement="bottom"
      :class="{ 'rounded-full': isRoundedFull, 'rounded-lg': !isRoundedFull }"
      class="text-gray-600 border-gray-200 border border-solid hover:bg-greay-800 focus:ring-0 focus:outline-none w-full focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <span v-if="searchable">
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
        </span>
        <div class="flex gap-1 py-2" v-if="editable">
          <input
            type="text"
            v-model="newItem"
            class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :placeholder="`Add ${title}`"
          />
          <button
            @click="addItem"
            :disabled="!newItem"
            class="py-1 px-2 bg-blue-500 rounded text-white"
          >
            Add
          </button>
        </div>
      </div>
      <ul
        class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownSearchButton"
      >
        <li v-for="(item, i) in newItems" :key="i">
          <div
            v-if="multiple"
            class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              id="checkbox-item-11"
              type="checkbox"
              v-model="selected"
              :value="item"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-11"
              class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >{{ item }}</label
            >
          </div>

          <div
            @click="onSelected(item)"
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
      </ul>
    </div>
  </span>
</template>

<script setup>
const emit = defineEmits(["selected"]);
const showMenu = ref(false);
const selected = ref([]);
const newItem = ref("");
const newItems = ref([]);
const props = defineProps({
  title: {
    default: "",
    type: String,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  editable: {
    default: false,
    type: Boolean,
  },
  searchable: {
    default: false,
    type: Boolean,
  },
  isRoundedFull: { type: Boolean, default: true },
  items: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => (newItems.value = props.items));

function onSelected(item) {
  selected.value.push(item);
}

function addItem() {
  if (!newItem.value) return;
  newItems.value.push(newItem.value);
  selected.value.push(newItem.value);
}

watch(
  () => selected.value,
  () => {
    emit("selected", selected.value);
  },
  { deep: true }
);
</script>

<style>
</style>
