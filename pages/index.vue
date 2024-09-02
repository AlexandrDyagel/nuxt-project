<script setup lang="ts">
import { helpers } from "@typed-router";
definePageMeta({
  redirect(route) {
    return helpers.path("/feed");
  },
});

const { MainButton, useWebApp, useWebAppPopup } = await import("vue-tg");

const { showAlert } = useWebAppPopup();

const { initDataUnsafe } = useWebApp();
</script>
<template>
  <section>
    <h1>Hello Telegram Mini App</h1>
    <MainButton
      text="Жми на меня"
      @click="() => showAlert('Нажал на кнопку')"
    />
    <p>First name: {{ initDataUnsafe?.user?.first_name }}</p>
    <p>Last name: {{ initDataUnsafe?.user?.last_name }}</p>
    <p>ID: {{ initDataUnsafe?.user?.id }}</p>
    <p>Username: {{ initDataUnsafe?.user?.username }}</p>
    <p>Is Premium: {{ initDataUnsafe?.user?.is_premium }}</p>
    <p>Photo url: {{ initDataUnsafe?.user?.photo_url }}</p>
    <p>Is bot: {{ initDataUnsafe?.user?.is_bot }}</p>
  </section>
</template>
<style></style>
