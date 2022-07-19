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
        pricePerMin: 750,
        produces: [
          {
            item: "Jam",
            icon: "icon_strawberries",
            cookTime: 60,
            needsToProduce: [
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
              cash: 220000,
              star: 18000
            }
          },
        ],
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