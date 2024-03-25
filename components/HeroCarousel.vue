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
    class="h-[40vh] relative md:h-[90vh]"
  >
    <SwiperSlide>
      <a href="/pages/games.vue">
        <AppButton
          class="absolute bottom-0 ml-[20px] mb-[30px] text-[12px] md:text-[20px] w-[100px] md:w-[200px]"
          >AVAILABLE NOW
        </AppButton></a
      >
      <img src="/assets/images/img-7.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <a href="/pages/games.vue">
        <AppButton
          class="absolute bottom-0 ml-[20px] mb-[30px] text-[12px] md:text-[20px] w-[100px] md:w-[200px]"
          >AVAILABLE NOW
        </AppButton></a
      ><img src="/assets/images/img-2.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <a href="/pages/games.vue">
        <AppButton
          class="absolute bottom-0 ml-[20px] mb-[30px] text-[12px] md:text-[20px] w-[100px] md:w-[200px]"
          >AVAILABLE NOW
        </AppButton></a
      ><img src="/assets/images/img-3.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <a href="/pages/games.vue">
        <AppButton
          class="absolute bottom-0 ml-[20px] mb-[30px] text-[12px] md:text-[20px] w-[100px] md:w-[200px]"
          >AVAILABLE NOW</AppButton
        ></a
      ><img src="/assets/images/img-6.jpg" />
    </SwiperSlide>
  </Swiper>
</template>
<script></script>

<style scoped></style>
