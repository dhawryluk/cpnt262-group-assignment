<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    class="h-[85vh]"
  >
    <SwiperSlide>
      <img src="/assets/images/img-7.jpg" />
    </SwiperSlide>
    <SwiperSlide><img src="/assets/images/img-1.webp" /> </SwiperSlide>
    <SwiperSlide><img src="/assets/images/img-2.webp" /> </SwiperSlide>
    <SwiperSlide><img src="/assets/images/img-6.jpg" /> </SwiperSlide>
  </Swiper>
</template>
<script></script>

<style scoped></style>
