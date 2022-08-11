<template>
  <router-view></router-view>
</template>
<script setup>
import { ref } from "vue";
import { provide } from "vue";

const navbarIsOpen = ref(false);
const toggleNavbar = (isOpenState) => {
  navbarIsOpen.value = isOpenState;
};
const toggleOffNavbar = () => {
  navbarIsOpen.value = false;
};
const crafts = ref([
  {
    title: "farm",
    items: [
      {
        name: "bakery",
        cost: 400000,
        imgSrc: "Farm/icon_bakery.png",
        produces: [
          {
            item: "Butter",
            icon: "icon_butter",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_milk",
                item: "Milk",
                qty: 2,
              },
              {
                icon: "icon_salt",
                item: "Salt",
                qty: 2,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 1,
              },
            ],
            prizes: {
              cash: 20000,
              star: 153,
            },
          },
          {
            item: "Dough",
            icon: "icon_dough",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_flour",
                item: "Flour",
                qty: 5,
              },
              {
                icon: "icon_eggs",
                item: "Eggs",
                qty: 1,
              },
              {
                icon: "icon_butter",
                item: "Butter",
                qty: 1,
              },
            ],
            prizes: {
              cash: 29150,
              star: 270,
            },
          },
          {
            item: "Baguette",
            icon: "icon_baguette",
            cookTime: [60],
            ingredients: [
              {
                icon: "icon_dough",
                item: "Dough",
                qty: 2,
              },
              {
                icon: "icon_butter",
                item: "Butter",
                qty: 2,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 2,
              },
            ],
            prizes: {
              cash: 110000,
              star: 900,
            },
          },
          {
            item: "Jam",
            icon: "icon_jam",
            cookTime: [60],
            ingredients: [
              {
                icon: "icon_strawberries",
                item: "Strawberries",
                qty: 10,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 3,
              },
              {
                icon: "icon_waterDrum",
                item: "Water Drum",
                qty: 1,
              },
            ],
            prizes: {
              cash: 25000,
              star: 275,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Bakery",
          },
          {
            title: "build cost",
            value: "$400,000",
          },
          {
            title: "destroy cost",
            value: "$100,000",
          },
          {
            title: "lobor cost",
            value: "$750/Min",
          },
          {
            title: "build Materials",
            value: "10x Lumber, 10x Wood, 10x Energy ",
          },
          {
            title: "Build Duration",
            value: "90s",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "Stores in",
            value: "Store House, Pantry",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["bakery", "butter", "dough", "baguette", "jam"],
      },
      {
        name: "cabernet vines",
        cost: 3500,
        imgSrc: "Farm/icon_cabernetVines.png",
        produces: [
          {
            item: "cabernet grapes",
            icon: "icon_cabernetGrapes",
            cookTime: [420],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 2,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 1,
              },
            ],
            prizes: {
              cash: 1820,
              star: 6,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Cabernet Grapes",
          },
          {
            title: "Build Cost",
            value: "$3,500",
          },
          {
            title: "Destroy Cost",
            value: "$875",
          },
          {
            title: "Build Materials",
            value: "1x Lumber",
          },
          {
            title: "Build duration",
            value: "7s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["cabernet", "cabernet grapes", "cabernet vines"],
      },
      {
        name: "cakery",
        cost: 1000000,
        imgSrc: "Farm/icon_cakery.png",
        produces: [
          {
            item: "batter",
            icon: "icon_batter",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_flour",
                item: "Flour",
                qty: 5,
              },
              {
                icon: "icon_eggs",
                item: "Eggs",
                qty: 3,
              },
              {
                icon: "icon_butter",
                item: "Butter",
                qty: 2,
              },
            ],
            prizes: {
              cash: 60700,
              star: 450,
            },
          },
          {
            item: "cake",
            icon: "icon_cake",
            cookTime: [60],
            ingredients: [
              {
                icon: "icon_batter",
                item: "Batter",
                qty: 3,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 10,
              },
              {
                icon: "icon_energy",
                item: "Energy",
                qty: 3,
              },
            ],
            prizes: {
              cash: 214050,
              star: 5500,
            },
          },
          {
            item: "pumpkin pie",
            icon: "icon_pumpkinPie",
            cookTime: [180],
            ingredients: [
              {
                icon: "icon_pumpkin",
                item: "pumpkin",
                qty: 6,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 10,
              },
              {
                icon: "icon_eggs",
                item: "Eggs",
                qty: 5,
              },
            ],
            prizes: {
              cash: 49750,
              star: 816,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Cakery",
          },
          {
            title: "build cost",
            value: "$1,000,000",
          },
          {
            title: "destroy cost",
            value: "$250,000",
          },
          {
            title: "lobor cost",
            value: "$1,500/Min",
          },
          {
            title: "build Materials",
            value: "10x Lumber, 10x Wood, 10x Energy ",
          },
          {
            title: "Build Duration",
            value: "90s",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "Stores in",
            value: "Store House",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["cakery", "batter", "cake", "pumpkin pie"],
      },
      {
        name: "candy shop",
        cost: 150000,
        imgSrc: "Farm/icon_candyShop.png",
        produces: [
          {
            item: "candy canes",
            icon: "icon_candyCanes",
            cookTime: [120],
            ingredients: [
              {
                icon: "icon_peppermint",
                item: "peppermint",
                qty: 5,
              },
              {
                icon: "icon_sugar",
                item: "sugar",
                qty: 3,
              },
              {
                icon: "icon_energy",
                item: "energy",
                qty: 5,
              },
            ],
            prizes: {
              cash: 22000,
              star: 220,
            },
          },
          {
            item: "Chocolate Covered Strawberries",
            icon: "icon_chocolateCoveredStrawberries",
            cookTime: [45],
            ingredients: [
              {
                icon: "icon_strawberries",
                item: "strawberries",
                qty: 6,
              },
              {
                icon: "icon_chocolateBar",
                item: "chocolate bar",
                qty: 2,
              },
              {
                icon: "icon_energy",
                item: "energy",
                qty: 2,
              },
            ],
            prizes: {
              cash: 22000,
              star: 500,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Candy Shop",
          },
          {
            title: "build cost",
            value: "$150,000",
          },
          {
            title: "destroy cost",
            value: "$37,500",
          },
          {
            title: "lobor cost",
            value: "$150/Min",
          },
          {
            title: "build Materials",
            value: "10x Wood",
          },
          {
            title: "Build Duration",
            value: "20s",
          },
          {
            title: "Shade",
            value: "1x1",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "Stores in",
            value: "Store House",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: [
          "candy canes",
          "candy shop",
          "chocolate covered strawberries",
        ],
      },
      {
        name: "chardonnay vines",
        cost: 1500,
        imgSrc: "Farm/icon_chardonnayVines.png",
        produces: [
          {
            item: "chardonnay grapes",
            icon: "icon_chardonnayGrapes",
            cookTime: [360],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 2,
              },
              {
                icon: "icon_wood",
                item: "wood",
                qty: 1,
              },
            ],
            prizes: {
              cash: 810,
              star: 2,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Chardonnay Grapes",
          },
          {
            title: "Build Cost",
            value: "$1,500",
          },
          {
            title: "Destroy Cost",
            value: "$375",
          },
          {
            title: "Build Materials",
            value: "1x Lumber",
          },
          {
            title: "Build duration",
            value: "8s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["chardonnay grapes"],
      },
      {
        name: "chocolate shop",
        cost: 300000,
        imgSrc: "Farm/icon_chocolateShop.png",
        produces: [
          {
            item: "Chocolate bar",
            icon: "icon_chocolateBar",
            cookTime: [90],
            ingredients: [
              {
                icon: "icon_cocoa",
                item: "cocoa",
                qty: 3,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 2,
              },
              {
                icon: "icon_milk",
                item: "milk",
                qty: 1,
              },
            ],
            prizes: {
              cash: 6650,
              star: 250,
            },
          },
          {
            item: "fancy cake",
            icon: "icon_fancyCake",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_cake",
                item: "cocoa",
                qty: 1,
              },
              {
                icon: "icon_chocolateBar",
                item: "chocolate bar",
                qty: 3,
              },
              {
                icon: "icon_strawberries",
                item: "strawberries",
                qty: 2,
              },
            ],
            prizes: {
              cash: 274500,
              star: 7800,
            },
          },
          {
            item: "Decorated Cake",
            icon: "icon_decoratedCake",
            cookTime: [60],
            ingredients: [
              {
                icon: "icon_cake",
                item: "cake",
                qty: 1,
              },
              {
                icon: "icon_chocolateBar",
                item: "chocolate bar",
                qty: 1,
              },
              {
                icon: "icon_candyCanes",
                item: "Candy canes",
                qty: 2,
              },
            ],
            prizes: {
              cash: 371050,
              star: 13757,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Chocolate Shop",
          },
          {
            title: "Build Cost",
            value: "$300,000",
          },
          {
            title: "Destroy Cost",
            value: "$75,000",
          },
          {
            title: "lobor cost",
            value: "$300/Min",
          },
          {
            title: "build Materials",
            value: "20x Wood",
          },
          {
            title: "Build Duration",
            value: "24s",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "Stores in",
            value: "Store House",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: [
          "chocolate shop",
          "chocolate bar",
          "fancy cake",
          "decorated cake",
        ],
      },
      {
        name: "cocoa tree",
        cost: 2500,
        imgSrc: "Farm/icon_cocoaTree.png",
        produces: [
          {
            item: "cocoa",
            icon: "icon_cocoa",
            cookTime: [60],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 5,
              },
              {
                icon: "icon_wood",
                item: "wood",
                qty: 1,
              },
            ],
            prizes: {
              cash: 810,
              star: 2,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Cocoa Tree",
          },
          {
            title: "Build Cost",
            value: "$2,500",
          },
          {
            title: "Destroy Cost",
            value: "$625",
          },
          {
            title: "Build Materials",
            value: "1x Lumber",
          },
          {
            title: "Build duration",
            value: "8s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["cocoa", "cocoa tree"],
      },
      {
        name: "farm house",
        cost: 1250,
        imgSrc: "Farm/icon_farmHouse.png",
        otherInfo: [
          {
            title: "name",
            value: "Farm House",
          },
          {
            title: "build cost",
            value: "$1,250",
          },
          {
            title: "destroy cost",
            value: "$313",
          },
          {
            title: "lobor cost",
            value: "$10/Min",
          },
          {
            title: "build Materials",
            value: "1x Wood",
          },
          {
            title: "Build Duration",
            value: "8s",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["farm house", "farm"],
      },
      {
        name: "farm tractor",
        cost: 75000,
        imgSrc: "Farm/icon_farmTractor.png",
        otherInfo: [
          {
            title: "name",
            value: "Farm Tractor",
          },
          {
            title: "build cost",
            value: "$75,000",
          },
          {
            title: "destroy cost",
            value: "$18,750",
          },
          {
            title: "lobor cost",
            value: "$150/Min",
          },
          {
            title: "build Materials",
            value: "5x Lumber, 5x Wood, 5x Energy",
          },
          {
            title: "Build Duration",
            value: "60s",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["farm tractor", "farm"],
      },
      {
        name: "lumber yard",
        cost: 20000,
        imgSrc: "Farm/icon_lumberYard.png",
        otherInfo: [
          {
            title: "name",
            value: "Lumber Yard",
          },
          {
            title: "build cost",
            value: "$20,000",
          },
          {
            title: "destroy cost",
            value: "$5,000",
          },
          {
            title: "build Materials",
            value: "5x Wood",
          },
          {
            title: "Build Duration",
            value: "16s",
          },
          {
            title: "Supply",
            value: "x20",
          },
          {
            title: "Shade",
            value: "1x1",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["lumber yard"],
      },
      {
        name: "lumberjack house",
        cost: 2500,
        imgSrc: "Farm/icon_lumberjackHouse.png",
        otherInfo: [
          {
            title: "name",
            value: "Lumberjack House",
          },
          {
            title: "build cost",
            value: "$2,500",
          },
          {
            title: "destroy cost",
            value: "$625",
          },
          {
            title: "lobor cost",
            value: "$30/Min",
          },
          {
            title: "build Materials",
            value: "None",
          },
          {
            title: "Build Duration",
            value: "4s",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["lumberjack", "lumberjack house"],
      },
      {
        name: "oak tree farm",
        cost: 1000,
        imgSrc: "Farm/icon_oakTreeFarm.png",
        produces: [
          {
            item: "oak tree",
            icon: "icon_oakTree",
            cookTime: [120],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 5,
              },
            ],
            prizes: {
              cash: 300,
              star: 1,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Oak Tree Farm",
          },
          {
            title: "build cost",
            value: "$1,000",
          },
          {
            title: "destroy cost",
            value: "$250",
          },
          {
            title: "Build Duration",
            value: "4s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Wood Shed, Lumber Yard",
          },
        ],
        keywords: ["oak wood", "oak tree", "oak tree farm"],
      },
      {
        name: "pantry",
        cost: 20000,
        imgSrc: "Farm/icon_pantry.png",
        otherInfo: [
          {
            title: "name",
            value: "Pantry",
          },
          {
            title: "build cost",
            value: "$20,000",
          },
          {
            title: "destroy cost",
            value: "$5,000",
          },
          {
            title: "Build Duration",
            value: "16s",
          },
          {
            title: "Supply",
            value: "x20",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["pantry"],
      },
      {
        name: "peppermint field",
        cost: 2500,
        imgSrc: "Farm/icon_peppermintField.png",
        produces: [
          {
            item: "peppermint",
            icon: "icon_peppermint",
            cookTime: [180],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 3,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 1,
              },
            ],
            prizes: {
              cash: 400,
              star: 8,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Peppermint Field",
          },
          {
            title: "Build Cost",
            value: "$2,500",
          },
          {
            title: "Destroy Cost",
            value: "$625",
          },
          {
            title: "Build Materials",
            value: "3x Wood",
          },
          {
            title: "Build duration",
            value: "12s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["peppermint field", "peppermint"],
      },
      {
        name: "pinot noir vines",
        cost: 5000,
        imgSrc: "Farm/icon_pinotNoirVines.png",
        produces: [
          {
            item: "Pinot Noir Grapes",
            icon: "icon_pinotNoirGrapes",
            cookTime: [450],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 2,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 1,
              },
            ],
            prizes: {
              cash: 2670,
              star: 10,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Pinot Noir Field",
          },
          {
            title: "Build Cost",
            value: "$5,000",
          },
          {
            title: "Destroy Cost",
            value: "$1,250",
          },
          {
            title: "Build Materials",
            value: "1x Lumber",
          },
          {
            title: "Build duration",
            value: "8s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["pinot noir", "pinot noir filed", "pinot noir grapes"],
      },
      {
        name: "pumpkin patch",
        cost: 250,
        imgSrc: "Farm/icon_pumpkinPatch.png",
        produces: [
          {
            item: "Pumpkin",
            icon: "icon_pumpkin",
            cookTime: [150],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 10,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 1,
              },
            ],
            prizes: {
              cash: 400,
              star: 8,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Pumpkin Patch",
          },
          {
            title: "Build Cost",
            value: "$250",
          },
          {
            title: "Destroy Cost",
            value: "$63",
          },
          {
            title: "Build Materials",
            value: "1x Lumber",
          },
          {
            title: "Build duration",
            value: "12s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
          {
            title: "Requires road",
            value: "Yes",
          },
        ],
        keywords: ["pumpkin", "pumpkin patch"],
      },
      {
        name: "salt field",
        cost: 1250,
        imgSrc: "Farm/icon_saltField.png",
        produces: [
          {
            item: "brine",
            icon: "icon_brine",
            cookTime: [475],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 3,
              },
            ],
            prizes: {
              cash: 300,
              star: 1,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Salt Field",
          },
          {
            title: "Build Cost",
            value: "$1,250",
          },
          {
            title: "Destroy Cost",
            value: "$313",
          },
          {
            title: "Build Materials",
            value: "None",
          },
          {
            title: "Build duration",
            value: "4s",
          },
          {
            title: "affected by",
            value: "Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["salt field", "brine"],
      },
      {
        name: "silo",
        cost: 10000,
        imgSrc: "Farm/icon_silo.png",
        otherInfo: [
          {
            title: "name",
            value: "Silo",
          },
          {
            title: "build cost",
            value: "$10,000",
          },
          {
            title: "destroy cost",
            value: "$2,500",
          },
          {
            title: "build Materials",
            value: "5x Wood",
          },
          {
            title: "Build Duration",
            value: "16s",
          },
          {
            title: "Supply",
            value: "x20",
          },
          {
            title: "Shade",
            value: "3x3",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["silo"],
      },
      {
        name: "store house",
        cost: 15000,
        imgSrc: "Farm/icon_storeHouse.png",
        otherInfo: [
          {
            title: "name",
            value: "Store House",
          },
          {
            title: "build cost",
            value: "$15,000",
          },
          {
            title: "destroy cost",
            value: "$3,750",
          },
          {
            title: "build Materials",
            value: "5x Wood",
          },
          {
            title: "Build Duration",
            value: "16s",
          },
          {
            title: "Supply",
            value: "x20",
          },
          {
            title: "Shade",
            value: "1x1",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["store house"],
      },
      {
        name: "strawberry field",
        cost: 1000,
        imgSrc: "Farm/icon_strawberryField.png",
        produces: [
          {
            item: "strawberries",
            icon: "icon_strawberries",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 2,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 1,
              },
            ],
            prizes: {
              cash: 250,
              star: 2,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Strawberry Field",
          },
          {
            title: "Build Cost",
            value: "$1,000",
          },
          {
            title: "Destroy Cost",
            value: "$250",
          },
          {
            title: "Build Materials",
            value: "3x Wood",
          },
          {
            title: "Build duration",
            value: "12s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["strawberry filed", "strawberry", "strawberries"],
      },
      {
        name: "sugarcane field",
        cost: 250,
        imgSrc: "Farm/icon_sugarcaneField.png",
        produces: [
          {
            item: "sugarcane",
            icon: "icon_sugarcane",
            cookTime: [20],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 8,
              },
            ],
            prizes: {
              cash: 400,
              star: 1,
            },
          },
        ],
        otherInfo: [
          {
            title: "Name",
            value: "Sugarcane Field",
          },
          {
            title: "Build Cost",
            value: "$250",
          },
          {
            title: "Destroy Cost",
            value: "$63",
          },
          {
            title: "Build Materials",
            value: "None",
          },
          {
            title: "Build duration",
            value: "4s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["sugarcane field", "sugarcane"],
      },
      {
        name: "The Logger House",
        cost: 75000,
        imgSrc: "Farm/icon_theLoggerHouse.png",
        otherInfo: [
          {
            title: "name",
            value: "The Logger House",
          },
          {
            title: "build cost",
            value: "$75,000",
          },
          {
            title: "destroy cost",
            value: "$18,750",
          },
          {
            title: "lobor cost",
            value: "$150/Min",
          },
          {
            title: "build Materials",
            value: "5x Lumber, 5x Wood, 5x Energy",
          },
          {
            title: "Build Duration",
            value: "60s",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["the logger house"],
      },
      {
        name: "tree farm",
        cost: 500,
        imgSrc: "Farm/icon_treeFarm.png",
        produces: [
          {
            item: "wood",
            icon: "icon_wood",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 5,
              },
            ],
            prizes: {
              cash: 250,
              star: 1,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Tree Farm",
          },
          {
            title: "build cost",
            value: "$500",
          },
          {
            title: "destroy cost",
            value: "$125",
          },
          {
            title: "Build Duration",
            value: "4s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Wood Shed, Lumber Yard",
          },
        ],
        keywords: ["wood", "wood field"],
      },
      {
        name: "well",
        cost: 1250,
        imgSrc: "Farm/icon_well.png",
        produces: [
          {
            item: "water",
            icon: "icon_water",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 5,
              },
            ],
            prizes: {
              cash: "none",
              star: "none",
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Well",
          },
          {
            title: "build cost",
            value: "$1,250",
          },
          {
            title: "destroy cost",
            value: "$313",
          },
          {
            title: "Build materials",
            value: "1x Wood",
          },
          {
            title: "Build Duration",
            value: "8s",
          },
          {
            title: "affected by",
            value: "Pollution",
          },
          {
            title: "stores in",
            value: "Ware House",
          },
        ],
        keywords: ["well", "water"],
      },
      {
        name: "wheat field",
        cost: 250,
        imgSrc: "Farm/icon_wheatField.png",
        produces: [
          {
            item: "Wheat",
            icon: "icon_wheat",
            cookTime: [20],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 3,
              },
            ],
            prizes: {
              cash: 300,
              star: 1,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Wheat Field",
          },
          {
            title: "build cost",
            value: "$250",
          },
          {
            title: "destroy cost",
            value: "$63",
          },
          {
            title: "Build Duration",
            value: "4s",
          },
          {
            title: "affected by",
            value: "Shade, Pollution, Salty",
          },
          {
            title: "stores in",
            value: "Silo",
          },
        ],
        keywords: ["wheat field", "wheat"],
      },
      {
        name: "wind pump",
        cost: 12500,
        imgSrc: "Farm/icon_windPump.png",
        produces: [
          {
            item: "water",
            icon: "icon_water",
            cookTime: [15],
            prizes: {
              cash: "None",
              star: "None",
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Wind Pump",
          },
          {
            title: "build cost",
            value: "$12,500",
          },
          {
            title: "destroy cost",
            value: "$3,125",
          },
          {
            title: "build Materials",
            value: "3x Wood",
          },
          {
            title: "Build Duration",
            value: "12s",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "affected by",
            value: "Pollution",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["wind pump", "water"],
      },
      {
        name: "wind mill",
        cost: 7500,
        imgSrc: "Farm/icon_windMill.png",
        produces: [
          {
            item: "Flour",
            icon: "icon_flour",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_wheat",
                item: "Wheat",
                qty: 2,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 1,
              },
            ],
            prizes: {
              cash: 2000,
              star: 12,
            },
          },
          {
            item: "sugar",
            icon: "icon_sugar",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_sugarcane",
                item: "sugarcane",
                qty: 6,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 2,
              },
            ],
            prizes: {
              cash: 2950,
              star: 21,
            },
          },
          {
            item: "salt",
            icon: "icon_salt",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_brine",
                item: "brine",
                qty: 4,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 2,
              },
            ],
            prizes: {
              cash: 2250,
              star: 16,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Wind Mill",
          },
          {
            title: "build cost",
            value: "$7,500",
          },
          {
            title: "destroy cost",
            value: "$1,875",
          },
          {
            title: "lobor cost",
            value: "$50/Min",
          },
          {
            title: "build Materials",
            value: "5x Wood",
          },
          {
            title: "Build Duration",
            value: "16s",
          },
          {
            title: "Shade",
            value: "3x3",
          },
          {
            title: "affected by",
            value: "Shade",
          },
          {
            title: "Stores in",
            value: "Store House",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["wind mill", "sugar", "salt", "flour"],
      },
      {
        name: "winery",
        cost: 1000000,
        imgSrc: "Farm/icon_winery.png",
        produces: [
          {
            item: "Pinot noir",
            icon: "icon_pinotNoir",
            cookTime: [300],
            ingredients: [
              {
                icon: "icon_pinotNoirGrapes",
                item: "Pinot noir grapes",
                qty: 6,
              },
              {
                icon: "icon_wineBottle",
                item: "Wine Bottle",
                qty: 1,
              },
              {
                icon: "icon_oakBarrel",
                item: "oak barrel",
                qty: 1,
              },
            ],
            prizes: {
              cash: 57200,
              star: 808,
            },
          },
          {
            item: "cabernet sauvignon",
            icon: "icon_cabernetSauvignon",
            cookTime: [270],
            ingredients: [
              {
                icon: "icon_cabernetGrapes",
                item: "cabernet grapes",
                qty: 5,
              },
              {
                icon: "icon_wineBottle",
                item: "Wine Bottle",
                qty: 1,
              },
              {
                icon: "icon_oakBarrel",
                item: "oak barrel",
                qty: 1,
              },
            ],
            prizes: {
              cash: 42000,
              star: 536,
            },
          },
          {
            item: "Chardonnay",
            icon: "icon_chardonnay",
            cookTime: [240],
            ingredients: [
              {
                icon: "icon_chardonnayGrapes",
                item: "chardonnay grapes",
                qty: 3,
              },
              {
                icon: "icon_wineBottle",
                item: "Wine Bottle",
                qty: 1,
              },
              {
                icon: "icon_oakBarrel",
                item: "oak barrel",
                qty: 1,
              },
            ],
            prizes: {
              cash: 27650,
              star: 350,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Winery",
          },
          {
            title: "build cost",
            value: "$1,000,000",
          },
          {
            title: "destroy cost",
            value: "$250,000",
          },
          {
            title: "lobor cost",
            value: "$2,000/Min",
          },
          {
            title: "build Materials",
            value: "5x Lumber, 5x Wood, 5x Energy",
          },
          {
            title: "Build Duration",
            value: "60s",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "Stores in",
            value: "Store House",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["winery", "chardonnay", "pinot noir", "cabernet sauvignon"],
      },
      {
        name: "wood shed",
        cost: 5000,
        imgSrc: "Farm/icon_woodShed.png",
        otherInfo: [
          {
            title: "name",
            value: "Wood Shed",
          },
          {
            title: "build cost",
            value: "$5,000",
          },
          {
            title: "destroy cost",
            value: "$1,250",
          },
          {
            title: "build Materials",
            value: "None",
          },
          {
            title: "Build Duration",
            value: "4s",
          },
          {
            title: "Supply",
            value: "x10",
          },
          {
            title: "Shade",
            value: "1x1",
          },
          {
            title: "requires Road",
            value: "Yes",
          },
        ],
        keywords: ["wood shed"],
      },
    ],
    // {
    //   name: "cakery",
    //   cost: 1000000,
    //   imgSrc: "Farm/icon_cakery.png",
    //   produces: [
    //     {
    //       item: "Butter",
    //       icon: "icon_butter",
    //       cookTime: [30],
    //       ingredients: [
    //         {
    //           icon: "icon_milk",
    //           item: "Milk",
    //           qty: 2,
    //         },
    //         {
    //           icon: "icon_salt",
    //           item: "Salt",
    //           qty: 2,
    //         },
    //         {
    //           icon: "icon_sugar",
    //           item: "Sugar",
    //           qty: 1,
    //         },
    //       ],
    //       prizes: {
    //         cash: 31700,
    //         star: 1800,
    //       },
    //     },
    //   ],
    //   keywords: ["cakery", "jam", "butter", "baguette"],
    // },
  },
  {
    title: "trade",
    items: [
      {
        name: "freight pier",
        cost: 250000,
        imgSrc: "Trade/icon_freightPier.png",
        otherInfo: [
          {
            title: "name",
            value: "Freight Pier",
          },
          {
            title: "build cost",
            value: "$250,000",
          },
          {
            title: "destroy cost",
            value: "$62,500",
          },
          {
            title: "lobor cost",
            value: "$300/Min",
          },
          {
            title: "build Materials",
            value: "5x Lumber, 5x Wood, 5x Energy",
          },
          {
            title: "Build Duration",
            value: "60s",
          },
          {
            title: "Pollution",
            value: "3x3",
          },
          {
            title: "Supply",
            value: "x100",
          },
          {
            title: "requires waterway or bridge",
            value: "Yes",
          },
        ],
        keywords: ["freight pier", "trade"],
      },
      {
        name: "trade depot",
        cost: 5000,
        imgSrc: "Trade/icon_tradeDepot.png",
        otherInfo: [
          {
            title: "name",
            value: "Trade Depot",
          },
          {
            title: "build cost",
            value: "$5,000",
          },
          {
            title: "destroy cost",
            value: "$1,250",
          },
          {
            title: "lobor cost",
            value: "$20/Min",
          },
          {
            title: "build Materials",
            value: "5x Wood",
          },
          {
            title: "Build Duration",
            value: "16s",
          },
          {
            title: "Pollution",
            value: "1x1",
          },
          {
            title: "Supply",
            value: "x10",
          },
          {
            title: "requires open world or bridge",
            value: "Yes",
          },
        ],
        keywords: ["trade depot", "trade"],
      },
      {
        name: "trade pier",
        cost: 7500,
        imgSrc: "Trade/icon_tradePier.png",
        otherInfo: [
          {
            title: "name",
            value: "Trade Pier",
          },
          {
            title: "build cost",
            value: "$7,500",
          },
          {
            title: "destroy cost",
            value: "$1,875",
          },
          {
            title: "lobor cost",
            value: "$30/Min",
          },
          {
            title: "build Materials",
            value: "5x Wood",
          },
          {
            title: "Build Duration",
            value: "16s",
          },
          {
            title: "Pollution",
            value: "2x2",
          },
          {
            title: "Supply",
            value: "x10",
          },
          {
            title: "requires waterway or bridge",
            value: "Yes",
          },
        ],
        keywords: ["trade pier", "trade"],
      },
    ],
  },
]);

// produces: [
//           {
//             item: "Peppermint",
//             icon: "icon_peppermint",
//             cookTime: [180, 360, 720, 1440],
//             ingredients: [
//               {
//                 icon: "icon_chardonnayGrapes",
//                 item: "Peppermint",
//                 qty: 5,
//               },
//               {
//                 icon: "icon_sugar",
//                 item: "Sugar",
//                 qty: 3,
//               },
//               {
//                 icon: "icon_energy",
//                 item: "Energy",
//                 qty: 5,
//               },
//             ],
//             prizes: {
//               cash: 31700,
//               star: 1800,
//             },
//           },
//         ],

provide("crafts", crafts);
</script>
