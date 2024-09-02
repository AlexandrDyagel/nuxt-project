<script setup lang="ts">
import BottomMenu from "~/components/BottomMenu.vue";
</script>

<template>
  <main class="mb-20">
    <ClientOnly>
      <slot />
    </ClientOnly>
  </main>
  <nav>
    <BottomMenu />
  </nav>
</template>
