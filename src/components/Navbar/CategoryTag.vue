<template>
  <button class="tag__container">
    <img src="/public/images/Navbar/TownStarLogo.svg" alt="tag-icon" class="tag__icon">
    <span class="tag__description">{{ props.name }}</span>
  </button>
</template>

<script setup>
const props = defineProps(['name','imgSrc'])
</script>