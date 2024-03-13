<template>
  <nav
    class="flex flex-wrap backdrop-blur-sm bg-white/30 items-center justify-between p-4 w-full"
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
    <div class="flex items-center">
      <h2 class="text-white px-4">Dark Mode</h2>
      <label class="inline-block h-[34px] relative w-[60px]" for="checkbox">
        <input class="appearance-none" type="checkbox" id="checkbox" />
        <div
          class="before:translate-x-[26px] before:checked:translate-x-[26px] before:checked:bg-[00e9f9] before:rounded-[34px] before:bg-[#fffffa] before:bottom-1 before:h-[26px] before:w-[26px] before:left-1 before:absolute before:ease-in-out rounded-full bg-[#172026] bottom-0 cursor-pointer left-0 absolute right-0 top-0 transition-[0.4s]"
        ></div>
      </label>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped></style>
