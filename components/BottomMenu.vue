<script setup lang="ts">
import Svg from "@/components/Svg.vue";
import { bottomNavItems } from "~/models/Menu";
import { Routes } from "~/models/Routes";

const route = useRoute();
const profileItem = bottomNavItems.value.find(
  (item) => item.route === Routes.Profile,
)!;

watchEffect(() => {
  bottomNavItems.value.forEach((item) => {
    item.isActive = item.route === route.path;
  });

  if (route.fullPath === Routes.Promo || route.fullPath === Routes.RefProgram) {
    profileItem.isActive = true;
  }
});
</script>

<template>
  <div class="fixed start-0 bottom-0 w-full z-50 bg-[#17212B]">
    <ul
      class="text-[10px] leading-[12px] font-medium text-center shadow flex divide-gray-700 text-gray-400 border-t border-gray-700"
    >
      <nuxt-link
        :key="navItem.route"
        v-for="navItem in bottomNavItems"
        class="w-full transition mx-2 duration-500 my-2 rounded-lg active:text-white active:bg-gray-700"
        :class="navItem.isActive ? `text-white bg-gray-700` : `bg-[#17212B]`"
        :to="navItem.route"
      >
        <li
          class="w-full py-2 focus-within:z-10 flex flex-col items-center justify-center"
        >
          <Svg>
            <component ref="comp" :is="navItem.icon"></component>
          </Svg>
          <p>{{ navItem.name }}</p>
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>
