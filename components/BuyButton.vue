<template>
  <button
    class="buyButton lazy text-md w-24 h-10 text-lightColor dark:text-darkColor bg-accent2 dark:bg-accent1 border-none cursor-pointer rounded-tl-lg rounded-br-lg py-2 hover:scale-105 hover:bg-accent2/90"
  >
    <a href="https://buy.stripe.com/4gw8zbddL7El9va3cD">
      <slot>Buy Now</slot>
    </a>
  </button>
</template>

<script setup></script>

<style scoped></style>
