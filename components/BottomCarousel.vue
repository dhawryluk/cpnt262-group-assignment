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
      <img class="rounded-[15px]" src="/assets/images/amongUs1080.webp" />
    </SwiperSlide>
    <SwiperSlide
      ><img
        class="rounded-[15px]"
        src="/assets/images/deadByDaylight1080.webp"
      />
    </SwiperSlide>
    <SwiperSlide
      ><img class="rounded-[15px]" src="/assets/images/eldenRing1080.jpg" />
    </SwiperSlide>
    <SwiperSlide
      ><img class="rounded-[15px]" src="/assets/images/rocketLeague1080.webp" />
    </SwiperSlide>
  </Swiper>
</template>

<script></script>

<style></style>
