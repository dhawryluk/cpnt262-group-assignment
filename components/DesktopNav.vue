<template>
  <div class="hidden md:flex p-4 items-center">
    <NuxtLink to="/" class="text-3xl hover:drop-shadow-lg">MultiPlay</NuxtLink>
    <ul
      class="flex justify-center gap-24 font-bold w-full text-bold md:border-none cursor-pointer"
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
    <DarkToggle />
  </div>
</template>

<script setup></script>

<style scoped></style>
