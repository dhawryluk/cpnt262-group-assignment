<template>
  <main
    class="absolute h-full dark:bg-gradient-to-bl from-darkColor to-secondary bg-cover bg-center top-0 text-darkColor dark:text-lightColor"
  >
    <div class="relative h-5/6 bg-gamesHero bg-cover bg-center"></div>
    <div class="w-5/6 m-auto mt-6">
      <h1 class="text-3xl my-3 font-bold">New Arrivals</h1>
      <p class="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex recusandae
        non perspiciatis, minima hic cum laborum eos provident nemo, odit modi
        voluptate ea vitae! Aut voluptas consectetur quasi optio quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        dolores sunt voluptates aliquam adipisci nesciunt optio veritatis hic
        aliquid cumque! Quas voluptatem cum laudantium nam dolor consequuntur
        mollitia dolorem placeat! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reprehenderit, recusandae, odit, consectetur dolorum
        repellat corrupti natus aperiam perspiciatis provident officiis ex quas
        asperiores ducimus saepe! Ea, enim. Quaerat, maiores quas. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Provident similique optio
        nihil a voluptates incidunt non cupiditate, consequuntur officia rem
        sapiente explicabo laborum, itaque nisi ut quia maxime ea. Neque!
      </p>
    </div>
    <div>
      <WideCard />
      <WideCard />
      <WideCard />
    </div>
    <!-- <div>
      <ul>
        <li v-for="game in games" :key="game.game_title">
          <h2>{{ game.game_title }}</h2>
          <p>{{ game.description }}</p>
          <p>Year Released: {{ game.year_released }}</p>
          <p>Rating: {{ game.rating }}</p>
          <img
            :src="game.image"
            :alt="game.game_title"
            style="max-width: 200px; height: auto"
          />
        </li>
      </ul>
    </div> -->
  </main>
</template>

<script setup>
// import { games } from "/games.json";
// import { ref, onMounted } from "vue";

// const games = ref([]);

// const fetchGames = async () => {
//   try {
//     const response = await fetch("/games.json");
//     const data = await response.json();
//     games.value = data;
//   } catch (error) {
//     console.error("Error fetching games:", error);
//   }
// };

// onMounted(fetchGames);
</script>

<style scoped></style>
