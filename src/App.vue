<template>
  <navbar-base></navbar-base>
  <router-view></router-view>
</template>
<script setup>
import NavbarBase from "./components/Navbar/NavbarBase.vue";
import {ref} from "vue";
import {provide} from "vue";


const crafts = ref([
  {
    title: "farm",
    items: [
      {
        name: 'bakery',
        cost: 800000,
        imgSrc: 'Farm/icon_bakery.png',
        pricePerMin: '150$',
        produces: [
          {
            item: "Jam",
            icon: "icon_strawberries",
            cookTime: [60, 120, 240, 480],
            ingredients: [
              {
                icon: 'icon_strawberries',
                item: "Strawberries",
                qty: 10,
              },
              {
                icon: 'icon_sugar',
                item: 'Sugar',
                qty: 3
              },
              {
                icon: 'icon_waterDrum',
                item: "Water Drum",
                qty: 1
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            }
          },
          {
            item: "Butter",
            icon: "30",
            cookTime: [30, 60, 120, 240],
            ingredients: [
              {
                icon: '',
                item: "Milk",
                qty: 2
              },
              {
                icon: '',
                item: "salt",
                qty: 2
              },
              {
                icon: 'icon_sugar',
                item: 'Sugar',
                qty: 1
              }
            ]
          },
          {
            item: "Baguette",
            icon: "30",
            cookTime: [60, 120, 240, 480],
            ingredients: [
              {
                icon: 'icon_dough',
                item: "Dough",
                qty: 2
              },
              {
                icon: 'icon_butter',
                item: "butter",
                qty: 2
              },
              {
                icon: 'icon_wood',
                item: 'wood',
                qty: 2
              }
            ]
          },
        ],
        otherInfo: [
          {
            title: 'name',
            value: 'Bakery',
          },
          {
            title: 'building cost',
            value: '400,000$'
          },
          {
            title: 'destroy cost',
            value: '100,000$'
          },
          {
            title: "Labor cost",
            value: '750$/min'
          },
          {
            title: "build requirements",
            value: 'Lumber x10, Wood x10, Energy x10'
          },
          {
            title: "Shade",
            value: "4x4"
          },
          {
            title: "stores in",
            value: "Store House"
          },
          {
            title: "affected by",
            value: "None"
          },
          {
            title: "requires road",
            value: "Yes"
          },
        ],
        keywords: ['bakery','jam','butter','baguette']
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
      },
    ]
  }
])

provide('crafts', crafts);

</script>