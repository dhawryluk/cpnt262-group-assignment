<template>
  <div :class="mobileNav">
    <div class="">
      <ul
        class="gap-24 font-bold w-full md:flex text-bold md:border-none cursor-pointer"
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
  </div>
</template>

<script setup>
const isMenuHidden = useState("menuToggle");
</script>

<style scoped></style>
