<template>
  <div class="flex-col">
    <ul
      class="font-bold cursor-pointer"
      :class="!isMenuHidden ? 'block' : 'hidden'"
    >
      <li class="hover:text-accent2 hover:dark:text-accent1">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="hover:text-accent2 hover:dark:text-accent1">
        <NuxtLink to="/games">Games</NuxtLink>
      </li>
      <li class="hover:text-accent2 hover:dark:text-accent1">
        <NuxtLink to="/news">News</NuxtLink>
      </li>
      <li class="hover:text-accent2 hover:dark:text-accent1">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const isMenuHidden = useState("menuToggle");
</script>

<style scoped></style>
