<template>
  <header class="h-[650px]">
    <div class="absolute top-0 h-full w-full bg-gamesHero bg-cover bg-center">
      <div
        class="absolute font-titleFont bg-white p-4 md:p-8 backdrop-filter backdrop-blur-lg bg-opacity-30 top-2/3 left-2/3 text-center border-dotted border-2 text-darkColor rounded-xl"
      >
        <h1 class="text-2xl">
          Amazing 9<Icon name="heroicons-solid:star"></Icon>
        </h1>
        <p>Editors Choice</p>
      </div>
    </div>
  </header>
  <main class="relative">
    <div class="dark:bg-darkColor px-16 md:px-40 py-6">
      <h1 class="font-titleFont text-3xl pb-4">New Arrivals</h1>
      <p class="text-justify">
        Our new arrivals page is your gateway to the freshest releases, where
        innovation meets imagination, promising hours of immersive gameplay.
        Meanwhile, on our trending games page, you'll discover the pulse of the
        gaming community, featuring titles that are igniting passion and setting
        new standards in the gaming world. Whether you're a seasoned gamer
        seeking your next conquest or a newcomer eager to embark on your gaming
        journey, MultiPlay's curated selection ensures there's something
        extraordinary waiting just for you. Join us and unlock the endless
        possibilities of gaming excellence at MultiPlay!
      </p>
    </div>
    <div class="dark:bg-darkColor">
      <WideCard />
    </div>
    <div>
      <h1 class="font-titleFont dark:bg-darkColor px-16 md:px-40 py-6 text-3xl">
        Summer Spotlight
      </h1>
      <NarrowCard />
    </div>
  </main>
</template>

<script setup></script>

<style scoped></style>
