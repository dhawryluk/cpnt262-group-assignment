<template>
  <main class="absolute h-full top-0">
    <div class="relative h-5/6 w-full bg-gamesHero bg-cover bg-center"></div>
    <div class="dark:bg-darkColor px-16 md:px-32 py-16">
      <h1 class="text-3xl font-bold">New Arrivals</h1>
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
      <h1 class="dark:bg-darkColor px-16 md:px-40 py-6 text-3xl">
        Summer Spotlight
      </h1>
      <NarrowCard />
    </div>
  </main>
</template>

<script setup>
// const games = ref([]);

// const fetchGames = async () => {
//   try {
//     const response = await fetch("/server/games.json");
//     const data = await response.json();
//     games.value = data;
//   } catch (error) {
//     console.error("Error fetching games:", error);
//   }
// };

// onMounted(fetchGames);
//
</script>

<style scoped></style>
