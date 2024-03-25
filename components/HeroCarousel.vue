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
    <SwiperSlide
      ><AppButton>AVAILABLE</AppButton>
      <img src="/assets/images/witcher4k.jpg" />
    </SwiperSlide>
    <SwiperSlide
      ><AppButton>AVAILABLE</AppButton
      ><img src="/assets/images/fortnite4k.jpg" />
    </SwiperSlide>
    <SwiperSlide
      ><AppButton>AVAILABLE</AppButton><img src="/assets/images/nba4k.jpeg" />
    </SwiperSlide>
    <SwiperSlide
      ><AppButton>AVAILABLE</AppButton
      ><img src="/assets/images/hellDivers4k.jpg" />
    </SwiperSlide>
    <SwiperSlide
      ><AppButton>AVAILABLE</AppButton
      ><img src="/assets/images/valorant4k.jpg" />
    </SwiperSlide>
    <SwiperSlide
      ><AppButton>AVAILABLE</AppButton
      ><img src="/assets/images/witcher4k.jpg" />
    </SwiperSlide>
  </Swiper>
</template>
<script></script>

<style scoped></style>
