<script setup lang="ts">
import { ExpandedViewport } from "vue-tg";
</script>

<template>
  <ExpandedViewport :force="true" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
