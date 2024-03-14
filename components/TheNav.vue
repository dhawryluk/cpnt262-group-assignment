<template>
  <nav
    class="flex flex-wrap backdrop-blur-sm text-darkColor dark:text-lightColor bg-lightColor/20 dark:bg-darkColor/20 items-center justify-between p-4 w-screen"
  >
    <NuxtLink to="/" class="text-3xl"
      ><i class="text-3xl hover:drop-shadow-lg"></i>MultiPlay</NuxtLink
    >
    <ul class="flex justify- gap-x-24 font-bold">
      <li class="hover:text-accent2 hover:dark:text-accent1">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="hover:text-accent2 hover:dark:text-accent1">
        <NuxtLink to="/products">Products</NuxtLink>
      </li>
      <li class="hover:text-accent2 hover:dark:text-accent1">
        <NuxtLink to="/news">News</NuxtLink>
      </li>
      <li class="hover:text-accent2 hover:dark:text-accent1">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
    <button
      class="inline-block text-sm p-2 leading-none rounded bg-lightColor/60 dark:bg-darkColor/50 mt-4 lg:mt-0"
      @click="changeColor"
    >
      <ColorScheme placeholder="...">
        <Icon
          v-if="colorMode.value === 'dark'"
          name="heroicons-outline:moon"
          class="text-xl dark:text-accent1"
        />
        <Icon
          v-else
          name="heroicons-outline:sun"
          class="text-xl text-accent2"
        />
      </ColorScheme>
    </button>
  </nav>
</template>

<script setup>
const colorMode = useColorMode();
const changeColor = () =>
  (colorMode.preference = colorMode.value === "light" ? "dark" : "light");
</script>

<style scoped></style>
