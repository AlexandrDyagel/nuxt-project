<script setup lang="ts">
import { profileMenuItems } from "~/models/Menu";
import type { Ref } from "vue";
import type { User } from "~/models/User";

const { initDataUnsafe } = useWebApp();

const user: Ref<User> = ref({
  id: initDataUnsafe?.user?.id,
  firstName: initDataUnsafe?.user?.first_name,
  lastName: initDataUnsafe?.user?.last_name,
  username: initDataUnsafe?.user?.username,
  isBot: initDataUnsafe?.user?.is_bot,
  photoUrl: initDataUnsafe?.user?.photo_url,
  isPremium: initDataUnsafe?.user?.is_premium,
});

/*try{
  const user = new User(
      initDataUnsafe?.user?.id,
      initDataUnsafe?.user?.first_name,
      initDataUnsafe?.user?.last_name,
      initDataUnsafe?.user?.username,
      initDataUnsafe?.user?.is_bot,
      initDataUnsafe?.user?.photo_url,
      initDataUnsafe?.user?.is_premium,
  );
} catch(e){
  console.log(e);
}*/

console.log(user);

const colors: string[] = [
  "bg-amber-700",
  "bg-blue-700",
  "bg-cyan-700",
  "bg-emerald-700",
  "bg-fuchsia-700",
  "bg-green-700",
  "bg-indigo-700",
  "bg-lime-700",
  "bg-orange-700",
  "bg-pink-700",
  "bg-purple-700",
  "bg-red-700",
  "bg-rose-700",
  "bg-sky-700",
  "bg-teal-700",
  "bg-yellow-700",
];

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function generateColor(): string {
  return colors[getRandomInt(0, colors.length)];
}
</script>
<template>
  <TopAppBar title="Мой профиль" is-back-button />
  <!-- КАРТОЧКА ПРОФИЛЯ -->
  <div
    class="mx-4 mt-4 w-auto border rounded-t-2xl shadow bg-gray-800 border-gray-700 mb-2"
  >
    <div class="flex flex-col items-center py-5">
      <div
        class="w-24 h-24 mb-3 rounded-full tracking-widest shadow-lg text-3xl font-bold text-white content-center text-center"
        :class="generateColor()"
      >
        {{ user?.firstName?.charAt(0) }}{{ user?.lastName?.charAt(0) }}
      </div>
      <h5 class="mb-1 text-xl font-medium text-white">
        {{ user?.firstName }} {{ user?.lastName }}
      </h5>
      <span class="text-sm text-gray-400">ID: {{ user?.id }}</span>
      <span class="text-sm text-gray-400">{{
        user?.username ? `@${user?.username}` : ""
      }}</span>
    </div>
  </div>

  <!-- ПЛАШКИ -->
  <div class="mx-4 w-auto border shadow bg-gray-800 border-gray-700 mb-2">
    <div class="w-full text-sm text-center text-gray-400">
      <div class="text-xs uppercase bg-gray-700 text-gray-400">
        <div>
          <div class="px-6 py-3">Настройки</div>
        </div>
      </div>
      <div>
        <div
          v-for="menuItem in profileMenuItems"
          :class="
            profileMenuItems.at(-1) === menuItem
              ? 'bg-gray-800 hover:bg-gray-600 cursor-pointer'
              : 'border-b border-gray-700 bg-gray-800 hover:bg-gray-600 cursor-pointer'
          "
          @click="$router.push(menuItem.route)"
        >
          <div class="px-6 py-4 font-medium whitespace-nowrap text-white">
            {{ menuItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ПЛАШКА УДАЛИТЬ АККАУНТ -->
  <div
    class="mx-4 w-auto border rounded-b-2xl shadow bg-gray-800 border-gray-700"
  >
    <p
      class="px-6 py-4 text-xs text-center font-medium whitespace-nowrap text-red-800"
    >
      Удалить аккаунт
    </p>
  </div>
</template>
