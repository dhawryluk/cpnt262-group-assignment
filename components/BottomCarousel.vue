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
      <a href="https://www.thewitcher.com/ca/en/ ">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="/assets/images/img-7.jpg"
        />
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <a href="https://pubg.com/en-na">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="/assets/images/img-5.webp"
      /></a>
    </SwiperSlide>
    <SwiperSlide>
      <a href="https://www.dota2.com/home">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="/assets/images/img-9.jpg"
        />
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <a href="https://www.fortnite.com/">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="/assets/images/img-6.jpg"
        />
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script></script>

<style></style>
