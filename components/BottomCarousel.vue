<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="/assets/images/Amongus.webp" /></swiper-slide
    ><swiper-slide><img src="/assets/images/0x0.webp" /></swiper-slide
    ><swiper-slide><img src="/assets/images/pubg-mobile-1.webp" /></swiper-slide
    ><swiper-slide
      ><img
        src="/assets/images/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="/assets/images/the-witcher-the-witcher-3-wild-hunt-geralt-of-rivia-video-games-wallpaper.jpg"
    /></swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<style coped>
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}
</style>
