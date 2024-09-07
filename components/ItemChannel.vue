<script setup lang="ts">
import type { Channel } from "~/models/Channel";

const { openTelegramLink } = useWebAppNavigation();

defineProps<{
  channel: Channel;
}>();

const emit = defineEmits(["confirmSubscription"]);

const isClickedLink = ref(false);
const isWaiting = ref(false);

const count = ref();

function openLink(link: string | undefined) {
  if (link != undefined) {
    isClickedLink.value = true;
    isWaiting.value = true;

    openTelegramLink(link);
    countdown(10);
  }
}

function countdown(time: number): void {
  count.value = time;
  const intervalId = setInterval(() => {
    count.value--;
    if (count.value < 1) {
      clearInterval(intervalId);
      isWaiting.value = false;
    }
  }, 1000);
}
</script>

<template>
  <div class="flex w-full items-center border-b bg-gray-800 border-gray-700">
    <div
      class="flex w-9/12 items-center px-4 py-4 whitespace-nowrap text-white"
    >
      <img
        class="w-10 h-10 rounded-full"
        :src="channel.image"
        alt="Jese image"
      />
      <div class="ps-3 w-10/12">
        <div class="text-base truncate font-semibold">
          {{ channel.title }}
        </div>
        <div class="font-normal truncate text-gray-500">
          {{ channel.description }}
        </div>
      </div>
    </div>
    <div v-if="!isClickedLink" class="px-1 py-4 w-3/12">
      <div
        @click="openLink(channel.inviteLink)"
        class="text-[10px] cursor-pointer px-2 py-1 hover:text-white border focus:ring-4 focus:outline-none font-medium rounded-lg text-center me-2 mb-2 border-green-500 text-green-500 hover:bg-green-600 focus:ring-green-800"
      >
        Перейти
      </div>
    </div>
    <div v-else-if="isWaiting" class="px-1 py-4 w-3/12">
      <div
        class="text-[10px] cursor-pointer px-2 py-1 hover:text-white border focus:ring-4 focus:outline-none font-medium rounded-lg text-center me-2 mb-2 border-red-800 text-red-500"
      >
        <div class="flex items-center justify-center gap-0.5">
          <span><IconsClockIcon /></span>
          <p>{{ count }} сек</p>
        </div>
      </div>
    </div>
    <div
      v-else
      @click="emit('confirmSubscription', channel)"
      class="px-1 py-4 w-3/12"
    >
      <div
        class="text-[10px] cursor-pointer px-2 py-1 hover:text-white border focus:ring-4 focus:outline-none font-medium rounded-lg text-center me-2 mb-2 border-amber-500 text-amber-500"
      >
        Подтвердить
      </div>
    </div>
  </div>
</template>

<style scoped></style>
