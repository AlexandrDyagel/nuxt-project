<script setup lang="ts">
import Channel from "~/models/Channel";
import { useWebAppTheme } from "vue-tg";

const channels = ref<Channel[]>([
  new Channel(
    1,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    2,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    3,
    "Thomas Lean",
    "thomes@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    4,
    "Leslie Livingston",
    "leslie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    5,
    "Jese Leos",
    "jese@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    6,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    7,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    8,
    "Thomas Lean",
    "thomes@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    9,
    "Leslie Livingston",
    "leslie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    10,
    "Jese Leos",
    "jese@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    11,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    12,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    13,
    "Thomas Lean",
    "thomes@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    14,
    "Leslie Livingston",
    "leslie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    15,
    "Jese Leos",
    "jese@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    16,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    17,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    18,
    "Thomas Lean",
    "thomes@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    19,
    "Leslie Livingston",
    "leslie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    20,
    "Jese Leos",
    "jese@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    21,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    22,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    23,
    "Thomas Lean",
    "thomes@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    24,
    "Leslie Livingston",
    "leslie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    25,
    "Jese Leos",
    "jese@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    26,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    27,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    28,
    "Thomas Lean",
    "thomes@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    29,
    "Leslie Livingston",
    "leslie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    30,
    "Jese Leos",
    "jese@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    31,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    32,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    33,
    "Thomas Lean",
    "thomes@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    34,
    "Leslie Livingston",
    "leslie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    35,
    "Jese Leos",
    "jese@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    36,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    37,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    38,
    "Thomas Lean",
    "thomes@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    39,
    "Leslie Livingston",
    "leslie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    40,
    "Jese Leos",
    "jese@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    41,
    "Neil Sims",
    "neil.sims@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    "https://t.me/kotok",
  ),
  new Channel(
    42,
    "Bonnie Green",
    "bonnie@flowbite.com",
    "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    "https://t.me/kotok",
  ),
]);

const confirmSubscription = async (ch: Channel) => {
  // Логика удаления канала с сервера у подписчика с ленты

  const index = channels.value.findIndex((channel) => channel.id === ch.id);
  if (index !== -1) {
    channels.value.splice(index, 1);
  }
};
</script>

<template>
  <div
    class="sticky start-0 top-0 w-full z-50 shadow-md text-xs uppercase font-bold bg-gray-700/90 text-gray-400 px-6 py-3 text-center"
  >
    Биржа каналов
  </div>
  <div class="relative overflow-y-auto shadow-md">
    <div
      v-auto-animate
      class="w-full text-sm text-left rtl:text-right text-gray-400"
    >
      <ItemChannel
        v-for="channel in channels"
        :key="channel.id"
        :channel="channel"
        @confirmSubscription="confirmSubscription"
      />
    </div>
  </div>
</template>
