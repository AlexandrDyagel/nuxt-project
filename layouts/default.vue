<template>
  <main class="mb-[65px]">
    <ClientOnly>
      <slot />
      <!--index pages-->
    </ClientOnly>
  </main>
  <nav>
    <BottomMenu />
  </nav>
</template>
