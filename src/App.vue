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
        produces: [
          {
            item: "Butter",
            icon: "icon_butter",
            cookTime: [30],
            ingredients: [
              {
                icon: 'icon_milk',
                item: "Milk",
                qty: 2,
              },
              {
                icon: 'icon_salt',
                item: 'Salt',
                qty: 2
              },
              {
                icon: 'icon_sugar',
                item: "Sugar",
                qty: 1
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            }
          },
          {
            item: "Dough",
            icon: "icon_dough",
            cookTime: [30],
            ingredients: [
              {
                icon: 'icon_flour',
                item: "Flour",
                qty: 5,
              },
              {
                icon: 'icon_eggs',
                item: 'Eggs',
                qty: 1
              },
              {
                icon: 'icon_butter',
                item: "Butter",
                qty: 1
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            }
          },
          {
            item: "Baguette",
            icon: "icon_baguette",
            cookTime: [60],
            ingredients: [
              {
                icon: 'icon_dough',
                item: "Dough",
                qty: 2,
              },
              {
                icon: 'icon_butter',
                item: 'Butter',
                qty: 2
              },
              {
                icon: 'icon_wood',
                item: "Wood",
                qty: 2
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            }
          },
          {
            item: "Jam",
            icon: "icon_jam",
            cookTime: [60],
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
        keywords: ['bakery', 'jam', 'butter', 'baguette']
      },
      {
        name: "cakery",
        cost: 1000000,
        imgSrc: 'Farm/icon_cakery.png',
        pricePerMin: 1500
      },
      {
        name: 'Candy Shop',
        cost: 150000,
        imgSrc: 'Farm/icon_candyShop.png',
        produces: [
          {
            item: "Candy Canes",
            icon: "icon_candyCanes",
            cookTime: [120],
            ingredients: [
              {
                icon: 'icon_peppermint',
                item: "Peppermint",
                qty: 5,
              },
              {
                icon: 'icon_sugar',
                item: 'Sugar',
                qty: 3
              },
              {
                icon: 'icon_energy',
                item: "Energy",
                qty: 5
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            }
          },
          {
            item: "Chocolate CoveredStrawberries",
            icon: "icon_chocolateCoveredStrawberries",
            cookTime: [45],
            ingredients: [
              {
                icon: 'icon_strawberries',
                item: "Strawberries",
                qty: 6,
              },
              {
                icon: 'icon_chocolateBar',
                item: 'Chocolate Bar',
                qty: 2
              },
              {
                icon: 'icon_energy',
                item: "Energy",
                qty: 2
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            },

          }
        ],
        otherInfo: [
          {
            title: 'name',
            value: 'Candy Shop',
          },
          {
            title: 'building cost',
            value: '150,000$'
          },
          {
            title: 'destroy cost',
            value: '37,500$'
          },
          {
            title: "Labor cost",
            value: '150$/Min'
          },
          {
            title: "build requirements",
            value: 'Wood x10'
          },
          {
            title: "Shade",
            value: "2x2"
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
      },
      {
        name: 'chocolate shop',
        cost: 300000,
        imgSrc: 'Farm/icon_chocolateShop.png',
        produces: [
          {
            item: "Chocolate Bar",
            icon: "icon_chocolateBar",
            cookTime: [90],
            ingredients: [
              {
                icon: 'icon_cocoa',
                item: "Cocoa",
                qty: 3,
              },
              {
                icon: 'icon_sugar',
                item: 'Sugar',
                qty: 2
              },
              {
                icon: 'icon_milk',
                item: "Milk",
                qty: 1
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            }
          },
          {
            item: "Fancy Cake",
            icon: "icon_fancyCake",
            cookTime: [30],
            ingredients: [
              {
                icon: 'icon_cake',
                item: "Cake",
                qty: 1,
              },
              {
                icon: 'icon_chocolateBar',
                item: 'Chocolate Bar',
                qty: 3
              },
              {
                icon: 'icon_strawberries',
                item: "Strawberries",
                qty: 2
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            },
          },
          {
            item: "Decorated Cake",
            icon: "icon_decoratedCake",
            cookTime: [60],
            ingredients: [
              {
                icon: 'icon_cake',
                item: "Cake",
                qty: 1,
              },
              {
                icon: 'icon_chocolateBar',
                item: 'Chocolate Bar',
                qty: 1
              },
              {
                icon: 'icon_candyCanes',
                item: "Candy Canes",
                qty: 2
              }
            ],
            prizes: {
              cash: 31700,
              star: 1800
            },
          }
        ],
        otherInfo: [
          {
            title: 'name',
            value: 'Chocolate Shop',
          },
          {
            title: 'building cost',
            value: '300,000$'
          },
          {
            title: 'destroy cost',
            value: '37,500$'
          },
          {
            title: "Labor cost",
            value: '300$/Min'
          },
          {
            title: "build requirements",
            value: 'Wood x10'
          },
          {
            title: "Shade",
            value: "2x2"
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
        name: 'Milk Barn',
        cost: 30000,
        imgSrc: 'Ranch/icon_milkBarn.png',
        produces: [
          {
            item: "Milk",
            icon: "icon_milk",
            cookTime: [30],
            ingredients: [
              {
                icon: 'icon_feed',
                item: "Feed",
                qty: 8,
              },
              {
                icon: 'icon_wood',
                item: 'Wood',
                qty: 1
              },
              {
                icon: 'icon_water',
                item: "Water",
                qty: 3
              }
            ],
            prizes: {
              cash: 40000,
              star: 220
            }
          },
        ],
        otherInfo: [
          {
            title: 'name',
            value: 'Milk Barn',
          },
          {
            title: 'building cost',
            value: '30,000$'
          },
          {
            title: 'destroy cost',
            value: '7,500$'
          },
          // {
          //   title: "Labor cost",
          //   value: '150$/Min'
          // },
          {
            title: "build requirements",
            value: 'Wood x10'
          },
          {
            title: "Shade",
            value: "2x2"
          },
          {
            title: "stores in",
            value: "Store House"
          },
          {
            title: "affected by",
            value: "Pollution"
          },
          {
            title: "requires road",
            value: "No"
          },
        ],
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
        name: 'Seep Pen',
        cost: 20000,
        imgSrc: 'Ranch/icon_milkBarn.png',
        produces: [
          {
            item: "Wool",
            icon: "icon_wool",
            cookTime: [60],
            ingredients: [
              {
                icon: 'icon_feed',
                item: "Feed",
                qty: 8,
              },
              {
                icon: 'icon_wood',
                item: 'Wood',
                qty: 1
              },
              {
                icon: 'icon_water',
                item: "Water",
                qty: 5
              }
            ],
            prizes: {
              cash: 37500,
              star: 220
            }
          },
        ],
        otherInfo: [
          {
            title: 'name',
            value: 'Sheep Pen',
          },
          {
            title: 'building cost',
            value: '20,000$'
          },
          {
            title: 'destroy cost',
            value: '5,000$'
          },
          // {
          //   title: "Labor cost",
          //   value: '150$/Min'
          // },
          {
            title: "build requirements",
            value: 'Wood x3'
          },
          {
            title: "Shade",
            value: "None"
          },
          {
            title: "stores in",
            value: "Store House"
          },
          {
            title: "affected by",
            value: "Pollution"
          },
          {
            title: "requires road",
            value: "No"
          },
        ],
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
  },
  {
    title: "terrain",
    items: [
      {
        name: 'Dirt Road',
        cost: 1000,
        imgSrc: 'Terrain/icon_dirtRoad.png',
        otherInfo: [
          {
            title: 'name',
            value: 'Dirt Road',
          },
          {
            title: 'build cost',
            value: '1000$'
          },
          {
            title: 'destroy cost',
            value: '500$'
          },
          {
            title: 'shade',
            value: 'None'
          },
          {
            title: 'affected by',
            value: 'None'
          },
          {
            title: 'requires road',
            value: 'No'
          }
        ],
      },
      {
        name: 'Meadow',
        cost: 500,
        imgSrc: 'Terrain/icon_meadow.png',
        otherInfo: [
          {
            title: 'name',
            value: 'Meadow',
          },
          {
            title: 'build cost',
            value: '500$'
          },
          {
            title: 'destroy cost',
            value: '125$'
          },
          {
            title: 'shade',
            value: 'None'
          },
          {
            title: 'affected by',
            value: 'None'
          },
          {
            title: 'requires road',
            value: 'No'
          }
        ],
        produces: [
          {
            item: "Feed",
            icon: "icon_feed",
            cookTime: [45],
            prizes: {
              cash: 37500,
              star: 220
            }
          },
        ],
      },
    ]
  }
])

provide('crafts', crafts);

</script>