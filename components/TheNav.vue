<template>
  <nav
    class="flex flex-wrap backdrop-blue-sm bg-white/30 items-center justify-between p-4 bg-background w-full"
  >
    <NuxtLink to="/" class="text-white text-3xl"
      ><i class="text-3xl text-white hover:drop-shadow-lg"></i
      >MultiPlay</NuxtLink
    >
    <ul class="flex text-white font-bold">
      <li class="px-12 hover:text-[#00e9f9]">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="px-12 hover:text-[#00e9f9]">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li class="px-12 hover:text-[#00e9f9]">
        <NuxtLink to="/news">News</NuxtLink>
      </li>
      <li class="px-12 hover:text-[#00e9f9]">
        <NuxtLink to="/products">Products</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped></style>
