<template>
  <nav>
    <img src="/images/Navbar/TownStarLogo.svg" alt="townstar-logo" class="town-logo">
    <input type="text" id="search" placeholder="What you are looking for?">
    <div class="category-tags__container">
      <category-tag name="Farm"></category-tag>
      <category-tag name="Ranch"></category-tag>
      <category-tag name="Terrain"></category-tag>
      <category-tag name="Industrial"></category-tag>
      <category-tag name="Trade"></category-tag>
    </div>

    <div class="items-category__container">
      <h2>Farm:</h2>
      <category-item></category-item>
    </div>
  </nav>
</template>
<script setup>
import CategoryTag from "./CategoryTag.vue";
import CategoryItem from "./CategoryItem.vue"
</script>