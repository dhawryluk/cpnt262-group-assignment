<template>
  <body class="font-serif">
    <header class="mb-[30px]">
      <HeroCarousel />
    </header>
    <p class="text-center text-[12px] m-[20px] dark:text-white lg:text-[18px]">
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
    <h1 class="text-[20px] md:text-[30px] p-[50px] dark:text-white">
      TOP SELLERS
    </h1>
    <main
      class="grid grid-cols-1 md:grid md:grid-cols-3 gap-[40px] mt-[50px] m-[20px]"
    >
      <div>
        <a href="https://www.cyberpunk.net/ca/en/"
          ><img
            class="hover:scale-95 rounded-[15px] w-[400px] md:w-[500px]"
            src="../assets/images/img-10.jpeg"
          />
        </a>
        <a href="/pages/games.vue">
          <AppButtonSecondary class="mt-[20px]">BUY</AppButtonSecondary></a
        >
      </div>
      <div>
        <a href="https://nba.2k.com/2k24/">
          <img
            class="hover:scale-95 rounded-[15px] w-[400px] md:w-[500px]"
            src="/assets/images/img-4.jpg"
          />
        </a>
        <a href="/pages/games.vue">
          <AppButtonSecondary class="mt-[20px]">BUY</AppButtonSecondary></a
        >
      </div>
      <div>
        <a
          href="https://playvalorant.com/en-us/?gad_source=1&gclid=CjwKCAjw48-vBhBbEiwAzqrZVMaEzuCLmCeodjBMCEz2GMZkB1yqFpWbhNoRPoz-v6yocRb43VLfxRoCR6YQAvD_BwE&gclsrc=aw.ds"
        >
          <img
            class="hover:scale-95 rounded-[15px] w-[400px] md:w-[500px]"
            src="/assets/images/img-8.jpg"
          />
        </a>
        <a href="/pages/games.vue">
          <AppButtonSecondary class="mt-[20px]">BUY</AppButtonSecondary></a
        >
      </div>
    </main>
    <h1 class="text-[20px] md:text-[30px] p-[50px] dark:text-white">
      GAME NEWS
    </h1>
    <div>
      <BottomCarousel />
    </div>
  </body>
</template>

<script></script>

<style scoped></style>
