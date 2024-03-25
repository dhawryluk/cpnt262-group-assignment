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
      <a href="http://localhost:3000/games">
        <ReadMoreButton
          class="absolute bottom-0 ml-[20px] mb-[30px] text-[12px] md:text-[20px] w-[100px] md:w-[200px]"
          >AVAILABLE NOW
        </ReadMoreButton></a
      >
      <img src="assets/images/witcher4k.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <a href="http://localhost:3000/games">
        <ReadMoreButton
          class="absolute bottom-0 ml-[20px] mb-[30px] text-[12px] md:text-[20px] w-[100px] md:w-[200px]"
          >AVAILABLE NOW
        </ReadMoreButton></a
      ><img src="assets/images/cyberPunk1080.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <a href="http://localhost:3000/games">
        <ReadMoreButton
          class="absolute bottom-0 ml-[20px] mb-[30px] text-[12px] md:text-[20px] w-[100px] md:w-[200px]"
          >AVAILABLE NOW
        </ReadMoreButton></a
      ><img src="assets/images/amongUs1080.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <a href="http://localhost:3000/games">
        <ReadMoreButton
          class="absolute bottom-0 ml-[20px] mb-[30px] text-[12px] md:text-[20px] w-[100px] md:w-[200px]"
          >AVAILABLE NOW</ReadMoreButton
        ></a
      ><img src="assets/images/fortnite4k.jpg" />
    </SwiperSlide>
  </Swiper>
</template>
<script></script>

<style scoped></style>
