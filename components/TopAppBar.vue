<script setup lang="ts">
import Svg from "~/components/Svg.vue";
import ArrowBackIcon from "~/components/icons/ArrowBackIcon.vue";
import { Routes } from "~/models/Routes";

const props = defineProps({
  title: String,
  isBackButton: Boolean,
});

const { checkSupportVersionBackButton } = useUtils();

const router = useRouter();
const route = useRoute();

const backButton = useWebAppBackButton();
backButton.isBackButtonVisible.value =
  props.isBackButton && checkSupportVersionBackButton.value;

backButton.onBackButtonClicked(() => {
  switch (route.path) {
    case Routes.Promo:
      router.back();
      break;
    case Routes.RefProgram:
      router.back();
      break;
    default:
      router.replace(Routes.Feed);
  }
});
</script>

<template>
  <div
    v-if="isBackButton && checkSupportVersionBackButton"
    class="sticky start-0 top-0 w-full z-50 shadow-md text-xs uppercase font-bold bg-gray-700/90 text-gray-400 px-6 py-3 text-center"
  >
    {{ title }}
  </div>

  <div
    v-else-if="!isBackButton"
    class="sticky start-0 top-0 w-full z-50 shadow-md text-xs uppercase font-bold bg-gray-700/90 text-gray-400 px-6 py-3 text-center"
  >
    {{ title }}
  </div>

  <div
    v-else-if="isBackButton"
    class="flex items-center sticky start-0 top-0 w-full z-50 shadow-md text-xs uppercase font-bold bg-gray-700/90 text-gray-400 px-6 py-3 text-center"
  >
    <Svg class="cursor-pointer anim-svg" @click="$router.back()">
      <component ref="comp" :is="ArrowBackIcon"></component>
    </Svg>
    <div class="w-full">{{ title }}</div>
  </div>
</template>
<style scoped>
.anim-svg {
  animation: spin 0.3s linear 1;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
