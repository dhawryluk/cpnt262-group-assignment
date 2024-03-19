<template>
  <Swiper
    class="w-[500px]"
    :width="500"
    :modules="[SwiperAutoplay, SwiperEffectCards]"
    :slides-per-view="1"
    :loop="true"
    :effect="'cards'"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide>
      <img class="rounded-[15px]" src="/assets/images/img-7.jpg" />
    </SwiperSlide>
    <SwiperSlide
      ><img class="rounded-[15px]" src="/assets/images/img-1.webp" />
    </SwiperSlide>
    <SwiperSlide
      ><img class="rounded-[15px]" src="/assets/images/img-2.webp" />
    </SwiperSlide>
    <SwiperSlide
      ><img class="rounded-[15px]" src="/assets/images/img-6.jpg" />
    </SwiperSlide>
  </Swiper>
</template>

<script></script>

<style></style>
