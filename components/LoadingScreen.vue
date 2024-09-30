<script setup lang="ts">
defineProps({
  loading: Boolean,
});
</script>
<template>
  <div
    v-if="loading"
    class="fixed top-0 start-0 wave w-full h-full text-center content-center z-50"
  >
    <span style="--i: 1">З</span>
    <span style="--i: 2">а</span>
    <span style="--i: 3">г</span>
    <span style="--i: 4">р</span>
    <span style="--i: 5">у</span>
    <span style="--i: 6">з</span>
    <span style="--i: 7">к</span>
    <span style="--i: 8">а</span>
    <span style="--i: 9">.</span>
    <span style="--i: 10">.</span>
    <span style="--i: 11">.</span>
  </div>
</template>
<style scoped>
body {
  font-family: "Rubik Mono One", monospace;
  font-weight: bold;
  color: #fff;
  background-color: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.wave {
  -webkit-box-reflect: below 0
    linear-gradient(transparent, rgba(255, 255, 255, 0.2));
}

.wave span {
  display: inline-block;
  font-size: 5vw;
  animation: wave 1s infinite calc(0.1s * var(--i));
}

@keyframes wave {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-20px);
  }
}
</style>
