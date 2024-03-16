<template>
  <div class="md:hidden flex justify-between p-4">
    <NuxtLink to="/" class="text-3xl">
      <i class="text-3xl hover:drop-shadow-lg"></i>MultiPlay
    </NuxtLink>
    <div class="md:hidden">
      <button @click="toggleMenu">
        <Icon
          v-if="isMenuHidden"
          name="heroicons-outline:bars-3"
          class="w-8 h-8 text-darkColor dark:text-lightColor"
        />
        <Icon
          v-else
          name="heroicons-outline:x-mark"
          class="w-8 h-8 text-darkColor dark:text-lightColor absolute top-4 right-4"
        />
      </button>
    </div>
  </div>
  <div
    :class="!isMenuHidden ? 'block' : 'hidden'"
    class="flex-col text-center h-screen"
  >
    <ul class="font-bold cursor-pointer mt-16 text-xl">
      <li
        class="hover:text-lightColor hover:bg-accent2 dark:hover:text-secondary hover:dark:bg-accent1 py-4"
      >
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li
        class="hover:text-lightColor hover:bg-accent2 dark:hover:text-secondary hover:dark:bg-accent1 py-4"
      >
        <NuxtLink to="/games">Games</NuxtLink>
      </li>
      <li
        class="hover:text-lightColor hover:bg-accent2 dark:hover:text-secondary hover:dark:bg-accent1 py-4"
      >
        <NuxtLink to="/news">News</NuxtLink>
      </li>
      <li
        class="hover:text-lightColor hover:bg-accent2 dark:hover:text-secondary hover:dark:bg-accent1 py-4"
      >
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
    <DarkToggle class="text-center"></DarkToggle>
  </div>
</template>

<script setup>
const isMenuHidden = useState("menuToggle", () => true);

function toggleMenu() {
  isMenuHidden.value = !isMenuHidden.value;
}
</script>
