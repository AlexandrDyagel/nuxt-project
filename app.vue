<script setup lang="ts">
import { ExpandedViewport } from "vue-tg";
// ЧТОБЫ НЕ ПОКАЗЫВАТЬ КОНТЕКСТНОЕ МЕНЮ
/*document.oncontextmenu = cmenu;
function cmenu() {
  return false;
}*/

await useTgWebAppStore().init();
</script>

<template>
  <ExpandedViewport :force="true" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
