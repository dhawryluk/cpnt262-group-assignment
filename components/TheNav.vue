<template>
  <nav
    class="flex flex-wrap backdrop-blue-sm bg-white/20 items-center justify-between p-4 bg-background w-full"
  >
    <NuxtLink to="/" class="text-lightColor text-3xl"
      ><i class="text-3xl text-lightColor hover:drop-shadow-lg"></i
      >MultiPlay</NuxtLink
    >
    <ul class="flex text-lightColor font-bold">
      <li class="px-12 hover:text-accent1">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="px-12 hover:text-accent1">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li class="px-12 hover:text-accent1">
        <NuxtLink to="/news">News</NuxtLink>
      </li>
      <li class="px-12 hover:text-accent1">
        <NuxtLink to="/products">Products</NuxtLink>
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
