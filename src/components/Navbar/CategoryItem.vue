<template>
  <router-link :to="`/${props.name}`" class="cat-item__container">
    <img :src="`/public/images/TownStar/${props.imgSrc}`" alt="cat-item__icon" class="building__icon">
    <div class="cat-item__description">
      <h3>{{ props.name }}</h3>
      <p>{{ props.cost.toLocaleString('en-us') }}$</p>
    </div>
    <button><img src="/public/images/Navbar/Plus.svg" alt="plus"></button>
  </router-link>
</template>


<script setup>
const props = defineProps(['name', 'cost', 'imgSrc'])
</script>
