<template>
  <div
    class="backdrop-blur-sm text-darkColor dark:text-lightColor bg-lightColor/20 dark:bg-darkColor/20 items-center w-screen"
  >
    <nav class="flex justify-between p-4">
      <NuxtLink to="/" class="text-3xl"
        ><i class="text-3xl hover:drop-shadow-lg"></i>MultiPlay</NuxtLink
      >
      <NavToggle />
      <!-- <MobileLinks /> -->
      <DesktopLinks />
      <DarkToggle />
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>
