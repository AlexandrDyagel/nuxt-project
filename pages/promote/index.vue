<script setup lang="ts">
type ChannelAdd = {
  id: number;
  name: string;
  email: string;
  img: string;
};
const channels: ChannelAdd[] = [
  {
    id: 1,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: 2,
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 3,
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 4,
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
  {
    id: 5,
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
  {
    id: 6,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: 7,
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 8,
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 9,
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
  {
    id: 10,
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
  {
    id: 11,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: 12,
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 13,
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 14,
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
  {
    id: 15,
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
  {
    id: 16,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: 17,
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 18,
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 19,
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
  {
    id: 20,
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
  {
    id: 21,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: 22,
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 23,
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 24,
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
  {
    id: 25,
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
  {
    id: 26,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: 27,
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 28,
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 29,
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
  {
    id: 30,
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
  {
    id: 31,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: 32,
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 33,
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 34,
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
  {
    id: 35,
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
  {
    id: 36,
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
  },
  {
    id: 37,
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  },
  {
    id: 38,
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 39,
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
  },
  {
    id: 40,
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
  },
];

const idCounter = ref(1);

const addedChannels = ref([] as ChannelAdd[]);

const addChannel = () => {
  let channel = channels.find((c) => c.id === idCounter.value);
  if (channel) {
    addedChannels.value.push(channel);
    idCounter.value++;
  } else {
    alert("Каналы закончились");
  }
};
</script>
<template>
  <TopAppBar title="Мои каналы" :is-back-button="true" />

  <div class="p-4 w-full">
    <div class="p-2 mb-2 border-2 border-dashed rounded-lg border-gray-700">
      <ul
        v-auto-animate
        class="w-full text-sm text-left rtl:text-right text-gray-400"
      >
        <li
          :key="channel.id"
          v-for="channel in addedChannels"
          class="border-b bg-gray-800 border-gray-700 rounded"
        >
          <div
            class="flex items-center rounded px-6 py-4 whitespace-nowrap text-white"
          >
            <img
              class="w-10 h-10 rounded-full"
              :src="channel.img"
              alt="Jese image"
            />
            <div class="ps-3">
              <div class="text-base font-semibold">{{ channel.name }}</div>
              <div class="font-normal text-gray-500">{{ channel.email }}</div>
            </div>
          </div>
        </li>
      </ul>

      <div
        @click="addChannel"
        class="flex items-center justify-center h-20 rounded bg-gray-800"
        :class="addedChannels.length > 0 ? `mt-2` : ``"
      >
        <p class="text-2xl text-gray-500">
          <svg
            class="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>
