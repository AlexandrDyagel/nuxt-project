<script setup lang="ts">
import type { Channel } from "~/models/Channel";
import type { Ref } from "vue";

const { initData } = useWebApp();

console.log("initData => ", initData);

try {
  await useFetch("http://localhost:8080/api/v1/verify", {
    method: "POST",
    headers: {
      Authorization: `tma ${initData}`,
    },
  });
} catch (e) {
  console.log("Error => ", e);
}

const channels: Ref<Channel[]> = ref([]);

try {
  const { data } = await useFetch("http://localhost:8080/api/v1/channels");
  channels.value = data.value as Channel[];
} catch (e) {
  console.log("Error => ", e);
}

const confirmSubscription = async (ch: Channel) => {
  // Логика удаления канала с сервера у подписчика с ленты
  try {
    const { data: deleteChannel, status } = await useFetch(
      `/api/crt/${ch.id}`,
      {
        method: "DELETE",
      },
    );

    if (
      status.value === "success" &&
      (deleteChannel.value as Channel) !== null
    ) {
      const index =
        channels.value?.findIndex((channel) => channel.id === ch.id) || 0;
      console.log("index => ", index);
      if (index !== -1) {
        channels.value?.splice(index, 1);
      }
      console.log("Удален");
    } else {
      console.log("Не удален");
    }
  } catch (e) {
    console.log("Error => ", e);
  }
};
</script>

<template>
  <TopAppBar title="Биржа каналов" />
  <div class="relative overflow-y-auto shadow-md">
    <div v-auto-animate class="text-sm text-left text-gray-400">
      <ItemChannel
        v-for="channel in channels"
        :key="channel.id"
        :channel="channel"
        @confirmSubscription="confirmSubscription"
      />
    </div>
  </div>
</template>
