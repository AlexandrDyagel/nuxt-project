<script setup lang="ts">
const { initDataUnsafe } = useWebApp();

const refUrl = computed(() => {
  return `https://t.me/wtest_bot/start?startup=${initDataUnsafe?.user?.id}`;
});

const { copy, copied, isSupported } = useClipboard({
  source: refUrl,
  legacy: true,
  read: true,
});
</script>
<template>
  <TopAppBar title="Реферальная система" is-back-button />

  <div class="w-full mt-5">
    <div class="mx-5 flex items-center">
      <span
        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600"
        >Ссылка</span
      >
      <div class="relative w-full">
        <input
          id="website-url"
          type="text"
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          :value="refUrl"
          readonly
          disabled
        />
      </div>
      <button
        v-if="isSupported"
        @click="copy(refUrl)"
        data-tooltip-target="tooltip-website-url"
        data-copy-to-clipboard-target="website-url"
        class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700"
        type="button"
      >
        <span v-if="!copied" id="default-icon">
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
        <span
          v-else
          id="success-icon"
          class="inline-flex items-center"
          :class="!copied ? 'hidden' : ''"
        >
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
  </div>
</template>
