<script setup lang="ts">
import type { Ref, UnwrapRef } from "vue";

const { showAlert } = useWebAppPopup();

const text = ref("");

const inputText: Ref<UnwrapRef<string | null>> = ref(null);

const validate = () => {
  if (inputText.value !== null && inputText.value.trim() !== "") {
    inputText.value = null;
    showAlert("Промокод применен!");
  }
};

function pasteFromClipboard() {
  console.log("inputText =>", text.value);
}
</script>
<template>
  <TopAppBar title="Промокоды" is-back-button />

  <div class="fixed start-0 top-0 w-full h-full content-center">
    <div class="mx-10">
      <div class="flex items-center mb-5">
        <div class="relative w-full">
          <input
            v-model="inputText"
            type="text"
            class="bg-gray-700 border border-gray-600 text-white text-sm rounded-s-lg block w-full p-2.5 placeholder-gray-400"
            placeholder="Вставьте промокод"
            required
          />
        </div>
        <button
          @click="pasteFromClipboard"
          data-tooltip-target="tooltip-url-shortener"
          data-copy-to-clipboard-target="url-shortener"
          class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600"
          type="button"
        >
          <span id="default-icon">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
              />
            </svg>
          </span>
          <span id="success-icon" class="hidden inline-flex items-center">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </button>
      </div>
      <button
        @click="validate"
        class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Применить
      </button>
    </div>
  </div>
</template>
