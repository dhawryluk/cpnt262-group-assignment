<template>
  <button
    class="readMoreButton lazy text-md w-24 h-10 text-darkColor bg-lightColor dark:ring-accent1 ring-2 ring-accent2 ring-inset cursor-pointer rounded-tl-lg rounded-br-lg py-2 hover:scale-105 hover:ring-accent2/90"
  >
    <NuxtLink href="/news"> </NuxtLink>
    <slot>Read More</slot>
  </button>
</template>

<script setup></script>

<style scoped></style>
