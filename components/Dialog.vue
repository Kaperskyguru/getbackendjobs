<template>
  <transition
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-300"
    enter-class="opacity-1"
    leave-to-class="opacity-1"
  >
    <div
      v-if="visible"
      role="presentation"
      class="grid overflow-y-auto fixed top-0 left-0 z-40 place-items-center p-3 w-full h-full bg-white/30 backdrop-blur-none"
      @click.prevent="closeByBackdrop"
    >
      <transition
        appear
        enter-active-class="transition-transform duration-500 transform-gpu"
        enter-class="translate-y-full"
      >
        <div
          v-if="visible"
          ref="dialog"
          role="dialog"
          class="items-center pt-1 w-full bg-btn-green rounded-lg outline-none shadow-lg md:pt-2"
          :class="{
            'flex flex-col': $slots.icon,
            ' max-w-5xl my-10': isLarge,
            ' max-w-md': !isLarge,
          }"
          tabindex="0"
          @click.stop
        >
          <div class="flex justify-between pb-2 bg-btn-green border-b">
            <div v-if="title" class="px-6 text-white md:px-8 lg:px-8">
              <h2 class="mb-1 font-bold">{{ title }}</h2>
              <p v-if="description" class="text-gray-100">
                {{ description }}
              </p>
            </div>
            <button
              @click.prevent="close"
              class="mr-6 text-red-500 focus:outline-none"
            >
              Close(X)
              <!-- <CloseIcon /> -->
            </button>
          </div>
          <div class="px-6 pt-4 bg-white md:px-8 lg:px-8">
            <div
              :class="{ 'text-sm md:text-base text-center': $slots.icon }"
              class="pb-8"
            >
              <slot />
            </div>

            <div
              v-if="primaryText || secondaryText"
              class="mt-8 space-x-3 text-center"
            >
              <button
                v-if="secondaryText"
                appearance="secondary"
                class="min-w-30"
                @click="answer(false)"
              >
                {{ secondaryText }}
              </button>

              <button v-if="primaryText" class="min-w-30" @click="answer(true)">
                {{ primaryText }}
              </button>
            </div>
          </div>
        </div>

        <div
          v-else
          ref="dialog"
          role="dialog"
          class="items-center py-8 px-6 w-full bg-white rounded-lg border outline-none shadow-lg md:py-10 md:px-8 lg:px-8"
          :class="{
            'flex flex-col': $slots.icon,
            ' max-w-5xl my-10': isLarge,
            ' max-w-md': !isLarge,
          }"
          tabindex="0"
          @click.stop
        >
          <div v-if="$slots.icon" class="mb-8">
            <slot name="icon" />
          </div>

          <div
            :class="{ 'text-sm md:text-base text-center': $slots.icon }"
            class="pb-8"
          >
            <slot />
          </div>

          <div
            v-if="primaryText || secondaryText"
            class="mt-8 space-x-3 text-center"
          >
            <button
              v-if="secondaryText"
              appearance="secondary"
              class="min-w-30"
              @click="answer(false)"
            >
              {{ secondaryText }}
            </button>

            <button v-if="primaryText" class="min-w-30" @click="answer(true)">
              {{ primaryText }}
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
// import CloseIcon from "~/assets/icons/close.svg";

const emits = defineEmits(["update:visible", "answer"]);

const route = useRoute();
const dialog = ref(null);

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  description: { type: String, default: "" },
  isLarge: {
    type: Boolean,
    default: false,
  },
  secondaryText: {
    type: String,
    default: "",
  },

  primaryText: {
    type: String,
    default: "",
  },
});

watch(
  () => props.visible,
  async (value) => {
    await nextTick();

    if (value) {
      if (dialog.value && dialog.value.focus) dialog.value.focus();
      else if (dialog.value && dialog.value.$el && dialog.value.$el.focus)
        dialog.value.$el.focus();
    } else {
    }
  }
);

watch(route, async () => {
  closeByChangeRoute();
});

function close(event) {
  if (!event.keyCode || event.keyCode === 27) {
    c(false);
  }
}

function closeByBackdrop() {
  c(false);
}

function c(value) {
  emits("answer", value);
  emits("update:visible", false);
}

function closeByKey(event) {
  if (event.keyCode === 13) {
    c(true);
  } else if (event.keyCode === 27) {
    c(false);
  }
}

function closeByChangeRoute() {
  emits["update:visible"](false);
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  #border {
    border-bottom: 1px solid #dee2e6 !important;
    border-right: 0px solid #dee2e6 !important;
  }
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  display: block;
}

.modal-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(5 4 27/0.6);
  backdrop-filter: blur(8px);
  display: flex;
}
</style>