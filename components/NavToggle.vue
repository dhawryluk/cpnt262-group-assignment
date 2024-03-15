<template>
  <div class="md:hidden">
    <button @click="toggleMenu">
      <Icon
        v-if="isMenuHidden"
        name="heroicons-outline:bars-3"
        class="w-8 h-8 text-darkColor dark:text-lightColor"
      >
      </Icon>
      <Icon
        v-else
        name="heroicons-outline:x-mark"
        class="text-xl text-darkColor dark:text-lightColor"
      >
      </Icon>
    </button>
  </div>
</template>

<script setup>
const isMenuHidden = useState("menuToggle", () => true);

function toggleMenu() {
  isMenuHidden.value = !isMenuHidden.value;
}
</script>

<style lang="scss" scoped></style>
