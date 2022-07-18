<template>
  <nav>
    <img src="/images/Navbar/TownStarLogo.svg" alt="townstar-logo" class="town-logo">
    <input type="text" id="search" :placeholder="`What${currentTag ? ' ' + currentTag : '' } you are looking for?`">
    <div class="category-tags__container">
      <category-tag name="Farm" img-src="Terrain/icon_pond.png" @click="onTagChange('farm')"></category-tag>
      <category-tag name="Ranch" img-src="Ranch/icon_meadow.png" @click="onTagChange('ranch')"></category-tag>
      <category-tag name="Terrain" img-src="Terrain/icon_dirtRoad.png" @click="onTagChange('terrain')"></category-tag>
      <category-tag name="Industrial" img-src="Terrain/icon_pavedRoad.png"
                    @click="onTagChange('industrial')"></category-tag>
      <category-tag name="Trade" img-src="Trade/icon_tradeDepot.png" @click="onTagChange('trade')"></category-tag>
    </div>

    <div class="items-category__container"
         v-for="(cat,index) in crafts" :key="index">
      <h2>{{ cat.title }}:</h2>
      <category-item v-for="(item,index) in cat.items" :key="index" :name="item.name" :cost="item.cost"></category-item>
    </div>
  </nav>
</template>
<script setup>
import CategoryTag from "./CategoryTag.vue";
import CategoryItem from "./CategoryItem.vue"
import {ref} from "vue";

const currentTag = ref('');
const onTagChange = (name) => {
  currentTag.value = name
}


const crafts = ref([
  {
    title: "farm",
    items: [
      {
        name: 'bakery',
        cost: 400000
      },
      {
        name: "cakery",
        cost: 1000000
      }
    ]
  }
])
</script>