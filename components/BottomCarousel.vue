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
      <NuxtLink to="https://www.thewitcher.com/ca/en/news">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="/assets/images/witcher4k.jpg"
        />
      </NuxtLink>
    </SwiperSlide>
    <SwiperSlide>
      <Nuxtlink to="https://pubg.com/en-na/news">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="assets/images/battlegrounds1080.jpg"
      /></Nuxtlink>
    </SwiperSlide>
    <SwiperSlide>
      <NuxtLink to="https://www.dota2.com/news">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="assets/images/dota2.jpg"
        />
      </NuxtLink>
    </SwiperSlide>
    <SwiperSlide>
      <NuxtLink to="https://www.fortnite.com/news?lang=en-US">
        <img
          class="rounded-[15px] w-[350px] md:w-[500px]"
          src="/assets/images/fortnite4k.jpg"
        />
      </NuxtLink>
    </SwiperSlide>
  </Swiper>
</template>

<script></script>

<style></style>
