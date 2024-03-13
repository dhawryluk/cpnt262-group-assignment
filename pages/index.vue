<template>
  <body class="font-serif">
    <TheNav />
    <header>
      <HeroCarousel />
    </header>
    <p class="text-center text-[18px] m-[20px]">
      Welcome to MultiPlay, where virtual adventures await at every click! Dive
      into a world where pixels meet passion, and gaming transcends mere
      entertainment to become an immersive experience. Whether you're a seasoned
      gamer seeking the next challenge or a newcomer eager to explore this
      digital realm, our platform has something for everyone. Embark on epic
      quests, test your skills in heart-pounding competitions, and connect with
      fellow gamers from around the globe. With a vast array of genres, from
      action-packed shooters to mind-bending puzzles, there's no shortage of
      excitement here. Stay up-to-date with the latest news, reviews, and
      insights from the gaming industry, and discover hidden gems that will keep
      you glued to your screen for hours on end. So grab your controller,
      sharpen your reflexes, and get ready to level up your gaming experience
      with us!
    </p>
    <h1 class="text-[30px] p-[50px]">TOP SELLERS</h1>
    <main class="grid grid-cols-3 gap-[40px] mt-[50px] m-[20px]">
      <img
        src="/assets/images/cyberpunk-girl-digital-art-4k-wallpaper-uhdpaper.com-785@0@i.jpg"
      />
      <img
        src="/assets/images/NBA 2K24 Kobe Bryant Edition Cover Art Vertical (1).jpg"
      />
      <img src="/assets/images/Valorant-Mobile.jpg" />
    </main>
    <h1 class="text-[30px] p-[50px]">GAME NEWS</h1>
    <div class="mt-[50px]">
      <BottomCarousel />
    </div>
  </body>
</template>

<script>
import HeroCarousel from "../components/HeroCarousel.vue";
import BottomCarousel from "../components/BottomCarousel";
</script>

<style scoped>
body {
  background-color: black;
  color: white;
}
</style>
