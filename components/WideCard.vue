<template>
  <div
    class="wideCard grid grid-cols-2 gap-4 bg-accent1 w-5/6 h-[300px] p-8 rounded-lg mx-auto my-6"
  >
    <WideBodyImage></WideBodyImage>
    <div class="">
      <wideBodyText></wideBodyText>
      <ReadMoreButton>Read More</ReadMoreButton>
      <BuyButton>Buy Now</BuyButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: csgo,

})


</script>

<style scoped></style>
