<template>
  <nav>
    <img src="/images/Navbar/TownStarLogo.svg" alt="townstar-logo" class="town-logo">
    <input type="text" id="search" :placeholder="`What${currentTag ? ' ' + currentTag : '' } you are looking for?`">
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
import {computed, ref} from "vue";

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



const filteredCrafts = computed(() => {
  if (currentTag.value !== '') return crafts.value.filter(a => a.title === currentTag.value)
  else return crafts.value
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
const crafts = ref([
  {
    title: "farm",
    items: [
      {
        name: 'bakery',
        cost: 400000,
        imgSrc: 'Farm/icon_bakery.png',
        requirements: [
          {
            name: 'lumber',
            icon: '',
            qty: 10
          },
          {
            name: "wood",
            icon: '',
            qty: 10,
          },
          {
            name: "energy",
            icon: '',
            qty: 10,
          }
        ],
        pricePerMin: 750
      },
      {
        name: "cakery",
        cost: 1000000,
        imgSrc: 'Farm/icon_cakery.png',
        requirements: [
          {
            name: 'lumber',
            icon: '',
            qty: 10
          },
          {
            name: "wood",
            icon: '',
            qty: 10,
          },
          {
            name: "energy",
            icon: '',
            qty: 10,
          }
        ],
        pricePerMin: 1500
      },
      {
        name: "candy shop",
        cost: 150000,
        imgSrc: 'Farm/icon_candyShop.png',
        requirements: [
          {
            name: "wood",
            icon: '',
            qty: 10,
          },
        ],
        pricePerMin: 150
      }
    ]
  },
  {
    title: "ranch",
    items: [
      {
        name: "ATV",
        cost: 75000,
        imgSrc: "Ranch/icon_ATV.png",
        requirements: [
          {
            name: 'lumber',
            icon: '',
            qty: 5
          },
          {
            name: "wood",
            icon: '',
            qty: 5,
          },
          {
            name: "energy",
            icon: '',
            qty: 5,
          }
        ],
        pricePerMin: 150
      },
      {
        name: "chicken coop",
        cost: 15000,
        imgSrc: "Ranch/icon_chickenCoop.png",
        requirements: [
          {
            name: 'wood',
            icon: '',
            qty: 3
          },
        ]
      },
      {
        name: "feed mill",
        cost: 5000,
        imgSrc: "Ranch/icon_feedMill.png",
        requirements: [
          {
            name: 'wood',
            icon: '',
            qty: 3
          },
        ]
      },
      {
        name: "milk barn",
        cost: 30000,
        imgSrc: "Ranch/icon_milkBarn.png",
        requirements: [
          {
            name: 'wood',
            icon: '',
            qty: 10
          },
        ]
      },
      {
        name: "ranch house",
        cost: 1250,
        imgSrc: "Ranch/icon_ranchHouse.png",
        requirements: [
          {
            name: 'wood',
            icon: '',
            qty: 1
          },
        ],
        pricePerMin: 10
      },
      {
        name: "sheep pen",
        cost: 20000,
        imgSrc: "Ranch/icon_sheepPen.png",
        requirements: [
          {
            name: 'wood',
            icon: '',
            qty: 3
          },
        ]
      },
      {
        name: "trough",
        cost: 5000,
        imgSrc: "Ranch/icon_trough.png",
        requirements: [
          {
            name: 'wood',
            icon: '',
            qty: 1
          },
        ]
      }
    ]
  }
])
</script>