<script setup>
import { computed, ref, shallowRef, watch } from "vue";
import Svg from "@/components/Svg.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import AddIcon from "@/components/icons/AddIcon.vue";
import HistoryIcon from "@/components/icons/HistoryIcon.vue";
import ProfileIcon from "@/components/icons/ProfileIcon.vue";
import WalletIcon from "~/components/icons/WalletIcon.vue";

const navItems = ref([
  {
    name: "Биржа",
    routeName: "feed",
    route: "/feed",
    active: true,
    icon: shallowRef(HomeIcon),
  },
  {
    name: "Добавить",
    routeName: "add",
    route: "/add",
    active: false,
    icon: shallowRef(AddIcon),
  },
  {
    name: "История",
    routeName: "history",
    route: "/history",
    active: false,
    icon: shallowRef(HistoryIcon),
  },
  {
    name: "Баланс",
    routeName: "wallet",
    route: "/wallet",
    active: false,
    icon: shallowRef(WalletIcon),
  },
  {
    name: "Профиль",
    routeName: "profile",
    route: "/profile",
    active: false,
    icon: shallowRef(ProfileIcon),
  },
]);

const route = useRoute();
watchEffect(async () => {
  navItems.value.forEach((item) => {
    item.active = item.routeName === route.name;
  });
});
</script>

<template>
  <div class="fixed start-0 bottom-0 w-full z-50 bg-[#17212B]">
    <ul
      class="text-[10px] leading-[12px] font-medium text-center shadow flex divide-gray-700 text-gray-400 border-t border-gray-700"
    >
      <nuxt-link
        :key="navItem.route"
        v-for="navItem in navItems"
        class="w-full transition mx-2 duration-500 my-2 rounded-lg active:text-white active:bg-gray-700"
        :class="navItem.active ? `text-white bg-gray-700` : `bg-[#17212B]`"
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
