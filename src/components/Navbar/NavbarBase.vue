<template>
  <nav>
    <img
      src="/images/Navbar/TownStarLogo.svg"
      alt="townstar-logo"
      class="town-logo"
    />
    <input
      type="text"
      id="search"
      :placeholder="`What${
        currentTag ? ' ' + currentTag : ''
      } you are looking for?`"
      v-model="searchedText"
      @input="onSearchCrafts"
    />
    <slot></slot>
    <div class="category-tags__container">
      <category-tag
        v-for="(tag, index) in categories"
        :key="index"
        :name="tag.name"
        :img-src="tag.imgSrc"
        @click="onTagChange(tag.name)"
        :class="{ active: currentTag === tag.name }"
      ></category-tag>
    </div>
    <div
      class="items-category__container"
      v-for="(cat, index) in filteredCrafts"
      :key="index"
    >
      <h2>{{ cat.title }}:</h2>
      <category-item
        v-for="(item, index) in cat.items"
        :key="index"
        :name="item.name"
        :cost="item.cost"
        :img-src="item.imgSrc"
        @click="onToggleOffNavbar"
      ></category-item>
    </div>
  </nav>
</template>
<script setup>
import CategoryTag from "./CategoryTag.vue";
import CategoryItem from "./CategoryItem.vue";
import { computed, ref, inject } from "vue";

const emits = defineEmits(["onToggleOffNavbar"]);
const onToggleOffNavbar = () => {
  emits("onToggleOffNavbar", false);
};
// Tags category
const currentTag = ref("");
const onTagChange = (name) => {
  if (currentTag.value === name) {
    currentTag.value = "";
  } else {
    currentTag.value = name;
  }
};
const crafts = inject("crafts");

// Search functionality
const searchedText = ref("");

const filteredCrafts = computed(() => {
  const craftsList = ref([...crafts.value]);
  if (currentTag.value !== "") {
    craftsList.value = crafts.value.filter((a) => a.title === currentTag.value);
  }
  if (searchedText.value !== "") {
    craftsList.value = [];
    crafts.value.map((craft) => {
      craft.items.map((item) => {
        item.keywords.map((keyword) => {
          if (keyword === searchedText.value) {
            craftsList.value.push({
              title: craft.title,
              items: [item],
            });
          }
        });
      });
    });
  }
  return craftsList.value;
});

const categories = ref([
  {
    name: "farm",
    imgSrc: "Terrain/icon_pond.png",
  },
  {
    name: "ranch",
    imgSrc: "Terrain/icon_meadow.png",
  },
  {
    name: "terrain",
    imgSrc: "Terrain/icon_dirtRoad.png",
  },
  {
    name: "industrial",
    imgSrc: "Terrain/icon_pavedRoad.png",
  },
  {
    name: "trade",
    imgSrc: "Trade/icon_tradeDepot.png",
  },
]);
</script>
