<template>
  <nav>
    <img src="/images/Navbar/TownStarLogo.svg" alt="townstar-logo" class="town-logo">
    <input type="text" id="search" :placeholder="`What${currentTag ? ' ' + currentTag : '' } you are looking for?`"
           v-model="searchedText"
           @input="onSearchCrafts">
    <div class="category-tags__container">
      <category-tag v-for="(tag,index) in categories" :key="index" :name="tag.name" :img-src="tag.imgSrc"
                    @click="onTagChange(tag.name)" :class="{active: currentTag === tag.name}"></category-tag>
    </div>
    <div class="items-category__container"
         v-for="(cat,index) in filteredCrafts" :key="index">
      <h2>{{ cat.title }}:</h2>
      <category-item v-for="(item,index) in cat.items" :key="index" :name="item.name" :cost="item.cost"
                     :img-src="item.imgSrc"></category-item>
    </div>
  </nav>
</template>
<script setup>
import CategoryTag from "./CategoryTag.vue";
import CategoryItem from "./CategoryItem.vue"
import {computed, ref, inject} from "vue";

// Tags category
const currentTag = ref('');
const onTagChange = (name) => {
  if (currentTag.value === name) {
    currentTag.value = '';
  } else {
    currentTag.value = name;
  }
}
// Search functionality
const searchedText = ref("");
const onSearchCrafts = () => {
}

const crafts = inject('crafts');

const filteredCrafts = computed(() => {
  let craftsList = [...crafts.value];
  if (currentTag.value !== '') craftsList = crafts.value.filter(a => a.title === currentTag.value)
  // if(searchedText.value !== '') craftsList.map(craft => )
  return craftsList
})

const categories = ref([
  {
    name: "farm",
    imgSrc: 'Terrain/icon_pond.png',
  },
  {
    name: "ranch",
    imgSrc: 'Terrain/icon_meadow.png',
  },
  {
    name: "terrain",
    imgSrc: 'Terrain/icon_dirtRoad.png',
  },
  {
    name: "industrial",
    imgSrc: 'Terrain/icon_pavedRoad.png',
  },
  {
    name: "trade",
    imgSrc: 'Trade/icon_tradeDepot.png',
  }
])
</script>