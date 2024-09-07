import type { Ref, UnwrapRef } from "vue";
import type { ProfileMenuItem } from "~/models/ProfileMenuItem";
import HomeIcon from "~/components/icons/HomeIcon.vue";
import AddIcon from "~/components/icons/AddIcon.vue";
import HistoryIcon from "~/components/icons/HistoryIcon.vue";
import WalletIcon from "~/components/icons/WalletIcon.vue";
import ProfileIcon from "~/components/icons/ProfileIcon.vue";
import { Routes as Route } from "~/models/Routes";
import type { BottomNavItem } from "~/models/BottomNavItem";

const bottomNavItems: Ref<UnwrapRef<BottomNavItem[]>> = ref([
  {
    name: "Биржа",
    route: Route.Feed,
    isActive: true,
    icon: shallowRef(HomeIcon),
  },
  {
    name: "Добавить",
    route: Route.Promote,
    isActive: false,
    icon: shallowRef(AddIcon),
  },
  {
    name: "История",
    route: Route.History,
    isActive: false,
    icon: shallowRef(HistoryIcon),
  },
  {
    name: "Баланс",
    route: Route.Wallet,
    isActive: false,
    icon: shallowRef(WalletIcon),
  },
  {
    name: "Профиль",
    route: Route.Profile,
    isActive: false,
    icon: shallowRef(ProfileIcon),
  },
]);

const profileMenuItems: ProfileMenuItem[] = [
  {
    name: "Реферальная программа",
    route: Route.RefProgram,
  },
  { name: "Промокоды", route: Route.Promo },
];

export { bottomNavItems, profileMenuItems };
