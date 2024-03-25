<template>
  <Swiper
    class="w-[350px] md:w-[500px] rounded-[15px]"
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
          src="/assets/images/witcher4k.jpg"
        />
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <a href="https://pubg.com/en-na">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="assets/images/battlegrounds1080.jpg"
      /></a>
    </SwiperSlide>
    <SwiperSlide>
      <a href="https://www.dota2.com/home">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="assets/images/dota2.jpg"
        />
      </a>
    </SwiperSlide>
    <SwiperSlide>
      <a href="https://www.fortnite.com/">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="/assets/images/fortnite4k.jpg"
        />
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script></script>

<style></style>
