<template>
  <!-- <navbar-base
    :class="{ open: navbarIsOpen }"
    @on-toggle-off-navbar="toggleOffNavbar"
  ></navbar-base>
  <router-view
    @on-navbar-toggle="toggleNavbar"
    :navbar-state="navbarIsOpen"
  ></router-view> -->

  <router-view></router-view>
</template>
<script setup>
import NavbarBase from "./components/Navbar/NavbarBase.vue";
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
        name: "cakery",
        cost: 1000000,
        imgSrc: "Farm/icon_cakery.png",
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
              cash: 31700,
              star: 1800,
            },
          },
        ],
        keywords: ["cakery", "jam", "butter", "baguette"],
      },
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
              cash: 31700,
              star: 1800,
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
              cash: 31700,
              star: 1800,
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
              cash: 31700,
              star: 1800,
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
              cash: 31700,
              star: 1800,
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
            value: "400,000$",
          },
          {
            title: "destroy cost",
            value: "100,000$",
          },
          {
            title: "Labor cost",
            value: "750$/min",
          },
          {
            title: "build requirements",
            value: "Lumber x10, Wood x10, Energy x10",
          },
          {
            title: "Shade",
            value: "4x4",
          },
          {
            title: "stores in",
            value: "Store House",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: ["bakery", "jam", "butter", "baguette"],
      },
      {
        name: "Candy Shop",
        cost: 150000,
        imgSrc: "Farm/icon_candyShop.png",
        produces: [
          {
            item: "Candy Canes",
            icon: "icon_candyCanes",
            cookTime: [120],
            ingredients: [
              {
                icon: "icon_peppermint",
                item: "Peppermint",
                qty: 5,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 3,
              },
              {
                icon: "icon_energy",
                item: "Energy",
                qty: 5,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
          {
            item: "Chocolate Covered Strawberries",
            icon: "icon_chocolateCoveredStrawberries",
            cookTime: [45],
            ingredients: [
              {
                icon: "icon_strawberries",
                item: "Strawberries",
                qty: 6,
              },
              {
                icon: "icon_chocolateBar",
                item: "Chocolate Bar",
                qty: 2,
              },
              {
                icon: "icon_energy",
                item: "Energy",
                qty: 2,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
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
            value: "150,000$",
          },
          {
            title: "destroy cost",
            value: "37,500$",
          },
          {
            title: "Labor cost",
            value: "150$/Min",
          },
          {
            title: "build requirements",
            value: "Wood x10",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "stores in",
            value: "Store House",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: [
          "candy shop",
          "candy canes",
          "chocolate covered strawberries",
          "strawberries",
        ],
      },
      {
        name: "chocolate shop",
        cost: 300000,
        imgSrc: "Farm/icon_chocolateShop.png",
        produces: [
          {
            item: "Chocolate Bar",
            icon: "icon_chocolateBar",
            cookTime: [90],
            ingredients: [
              {
                icon: "icon_cocoa",
                item: "Cocoa",
                qty: 3,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 2,
              },
              {
                icon: "icon_milk",
                item: "Milk",
                qty: 1,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
          {
            item: "Fancy Cake",
            icon: "icon_fancyCake",
            cookTime: [30],
            ingredients: [
              {
                icon: "icon_cake",
                item: "Cake",
                qty: 1,
              },
              {
                icon: "icon_chocolateBar",
                item: "Chocolate Bar",
                qty: 3,
              },
              {
                icon: "icon_strawberries",
                item: "Strawberries",
                qty: 2,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
          {
            item: "Decorated Cake",
            icon: "icon_decoratedCake",
            cookTime: [60],
            ingredients: [
              {
                icon: "icon_cake",
                item: "Cake",
                qty: 1,
              },
              {
                icon: "icon_chocolateBar",
                item: "Chocolate Bar",
                qty: 1,
              },
              {
                icon: "icon_candyCanes",
                item: "Candy Canes",
                qty: 2,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Chocolate Shop",
          },
          {
            title: "build cost",
            value: "300,000$",
          },
          {
            title: "destroy cost",
            value: "37,500$",
          },
          {
            title: "Labor cost",
            value: "300$/Min",
          },
          {
            title: "build requirements",
            value: "Wood x10",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "stores in",
            value: "Store House",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
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
        name: "cabernet vines",
        cost: 3500,
        imgSrc: "Farm/icon_cabernetVines.png",
        produces: [
          {
            item: "Cabernet Grapes",
            icon: "icon_cabernetGrapes",
            cookTime: [420, 840, 1680, 3360],
            ingredients: [
              {
                icon: "icon_cabernetGrapes",
                item: "Peppermint",
                qty: 5,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 3,
              },
              {
                icon: "icon_energy",
                item: "Energy",
                qty: 5,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Canernet Vines",
          },
          {
            title: "build cost",
            value: "3,500$",
          },
          {
            title: "destroy cost",
            value: "875$",
          },
          {
            title: "build requirements",
            value: "Lumber x1",
          },
          {
            title: "lobor cost",
            value: "None",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Silo",
          },
          {
            title: "affected by",
            value: "Shade",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["vine", "vines", "cabernet vines"],
      },
      {
        name: "chardonnay vines",
        cost: 1500,
        imgSrc: "Farm/icon_chardonnayVines.png",
        produces: [
          {
            item: "chardonnay Grapes",
            icon: "icon_chardonnayGrapes",
            cookTime: [360, 720, 1440, 2880],
            ingredients: [
              {
                icon: "icon_chardonnayGrapes",
                item: "Peppermint",
                qty: 5,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 3,
              },
              {
                icon: "icon_energy",
                item: "Energy",
                qty: 5,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Chardonnay Vines",
          },
          {
            title: "build cost",
            value: "1,500$",
          },
          {
            title: "destroy cost",
            value: "375$",
          },
          {
            title: "build requirements",
            value: "Lumber x1",
          },
          {
            title: "lobor cost",
            value: "None",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Silo",
          },
          {
            title: "affected by",
            value: "Shade",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["vine", "vines", "chardonnay vines"],
      },
      {
        name: "cocoa tree",
        cost: 2500,
        imgSrc: "Farm/icon_cocoaTree.png",
        produces: [
          {
            item: "Cocoa",
            icon: "icon_cocoa",
            cookTime: [60, 120, 240, 480],
            ingredients: [
              {
                icon: "icon_cocoa",
                item: "Peppermint",
                qty: 5,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 3,
              },
              {
                icon: "icon_energy",
                item: "Energy",
                qty: 5,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Cocoa Tree",
          },
          {
            title: "build cost",
            value: "2,500$",
          },
          {
            title: "destroy cost",
            value: "625$",
          },
          {
            title: "build requirements",
            value: "Lumber x1",
          },
          {
            title: "Lobor cost",
            value: "None",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Silo",
          },
          {
            title: "affected by",
            value: "Shade",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["cocoa", "tree", "cocoa tree"],
      },
      {
        name: "cotton field",
        cost: 250,
        imgSrc: "Farm/icon_cottonField.png",
        produces: [
          {
            item: "Cotton",
            icon: "icon_cotton",
            cookTime: [20, 40, 80, 160],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 4,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Cotton Field",
          },
          {
            title: "build cost",
            value: "250$",
          },
          {
            title: "destroy cost",
            value: "63$",
          },
          {
            title: "build requirements",
            value: "None",
          },
          {
            title: "lobor cost",
            value: "None",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Silo",
          },
          {
            title: "affected by",
            value: "Shade",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["cotton", "cotton field"],
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
            value: "1,250$",
          },
          {
            title: "destroy cost",
            value: "313$",
          },
          {
            title: "build requirements",
            value: "Wood x1",
          },
          {
            title: "Lobor Cost",
            value: "10$/Min",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "stores in",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: ["farm", "farm house"],
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
            value: "75,000$",
          },
          {
            title: "destroy cost",
            value: "313$",
          },
          {
            title: "build requirements",
            value: "Lumber x5, Wood x5, Energy x5",
          },
          {
            title: "Lobor Cost",
            value: "150$/Min",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "stores in",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: ["farm", "farm house", "farm tractor"],
      },
      {
        name: "Lumber Yard",
        cost: 20000,
        imgSrc: "Farm/icon_lumberYard.png",
        otherInfo: [
          {
            title: "name",
            value: "Lumber Yard",
          },
          {
            title: "build cost",
            value: "20,000$",
          },
          {
            title: "destroy cost",
            value: "5,000$",
          },
          {
            title: "build requirements",
            value: "Wood x5",
          },
          {
            title: "Lobor Cost",
            value: "None",
          },
          {
            title: "Shade",
            value: "1x1",
          },
          {
            title: "stores in",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: ["lumber", "lumber yard"],
      },
      {
        name: " Lumberjack House",
        cost: 2500,
        imgSrc: "Farm/icon_lumberjackHouse.png",
        otherInfo: [
          {
            title: "name",
            value: "Lumberjack House",
          },
          {
            title: "build cost",
            value: "2,500$",
          },
          {
            title: "destroy cost",
            value: "625$",
          },
          {
            title: "build requirements",
            value: "None",
          },
          {
            title: "Lobor Cost",
            value: "30$/Min",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "stores in",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: ["wood", "lumberjack", "lumberjack house"],
      },
      {
        name: "Peppermint Field",
        cost: 2500,
        imgSrc: "Farm/icon_peppermintField.png",
        produces: [
          {
            item: "Peppermint",
            icon: "icon_peppermint",
            cookTime: [180, 360, 720, 1440],
            ingredients: [
              {
                icon: "icon_chardonnayGrapes",
                item: "Peppermint",
                qty: 5,
              },
              {
                icon: "icon_sugar",
                item: "Sugar",
                qty: 3,
              },
              {
                icon: "icon_energy",
                item: "Energy",
                qty: 5,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Peppermint Field",
          },
          {
            title: "build cost",
            value: "2,500$",
          },
          {
            title: "destroy cost",
            value: "625$",
          },
          {
            title: "Lobor Cost",
            value: "None",
          },
          {
            title: "build requirements",
            value: "Wood x3",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Silo",
          },
          {
            title: "affected by",
            value: "Shade",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["peppermint", "peppermint field"],
      },
      {
        name: "Oak Tree Farm",
        cost: 2500,
        imgSrc: "Farm/icon_oakTreeFarm.png",
        produces: [
          {
            item: "Oak Wood",
            icon: "icon_oakWood",
            cookTime: [120, 240, 480, 960],
            ingredients: [
              {
                icon: "icon_water",
                item: "Water",
                qty: 5,
              },
            ],
            prizes: {
              cash: 31700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Peppermint Field",
          },
          {
            title: "build cost",
            value: "2,500$",
          },
          {
            title: "destroy cost",
            value: "625$",
          },
          {
            title: "build requirements",
            value: "Wood x3",
          },
          {
            title: "Lobor Cost",
            value: "None",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Silo",
          },
          {
            title: "affected by",
            value: "Shade",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["peppermint", "peppermint field"],
      },
    ],
  },
  {
    title: "ranch",
    items: [
      {
        name: "ATV",
        cost: 75000,
        imgSrc: "Ranch/icon_ATV.png",
        otherInfo: [
          {
            title: "name",
            value: "ATV",
          },
          {
            title: "build cost",
            value: "75,000$",
          },
          {
            title: "destroy cost",
            value: "18,750$",
          },
          {
            title: "Labor cost",
            value: "150$/min",
          },
          {
            title: "build requirements",
            value: "Lumber x5, Wood x5, Energy x5",
          },
          {
            title: "Shade",
            value: "1x1",
          },
          {
            title: "stores in",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: ["atv", "ranch house"],
      },
      {
        name: "chicken coop",
        cost: 15000,
        imgSrc: "Ranch/icon_chickenCoop.png",
        produces: [
          {
            item: "Eggs",
            icon: "icon_eggs",
            cookTime: [30, 60, 120, 240],
            ingredients: [
              {
                icon: "icon_feed",
                item: "Feed",
                qty: 3,
              },
              {
                icon: "icon_water",
                item: "Water",
                qty: 1,
              },
            ],
            prizes: {
              cash: 16700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Chicken Coop",
          },
          {
            title: "build cost",
            value: "15,000$",
          },
          {
            title: "destroy cost",
            value: "3,750$",
          },
          {
            title: "Labor cost",
            value: "None",
          },
          {
            title: "build requirements",
            value: "Wood x3",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Store House",
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
        keywords: ["chicken", "chicken coop", "eggs"],
      },
      {
        name: "feed mill",
        cost: 5000,
        imgSrc: "Ranch/icon_feedMill.png",
        produces: [
          {
            item: "Feed",
            icon: "icon_feed",
            cookTime: [10, 20, 30, 40],
            ingredients: [
              {
                icon: "icon_wheat",
                item: "Wheat",
                qty: 2,
              },
            ],
            prizes: {
              cash: 16700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Feed Mill",
          },
          {
            title: "build cost",
            value: "5,000$",
          },
          {
            title: "destroy cost",
            value: "1,250$",
          },
          {
            title: "Labor cost",
            value: "None",
          },
          {
            title: "build requirements",
            value: "Wood x3",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Trough",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["feed"],
      },
      {
        name: "Milk Barn",
        cost: 30000,
        imgSrc: "Ranch/icon_milkBarn.png",
        produces: [
          {
            item: "Milk",
            icon: "icon_milk",
            cookTime: [30, 60, 120, 240],
            ingredients: [
              {
                icon: "icon_feed",
                item: "Feed",
                qty: 8,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 1,
              },
              {
                icon: "icon_water",
                item: "Water",
                qty: 3,
              },
            ],
            prizes: {
              cash: 40000,
              star: 220,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Milk Barn",
          },
          {
            title: "build cost",
            value: "30,000$",
          },
          {
            title: "destroy cost",
            value: "7,500$",
          },
          {
            title: "Lobor cost",
            value: "None",
          },
          {
            title: "build requirements",
            value: "Wood x10",
          },
          {
            title: "Shade",
            value: "2x2",
          },
          {
            title: "stores in",
            value: "Store House",
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
        keywords: ["milk", "milk barn"],
      },
      {
        name: "ranch house",
        cost: 1250,
        imgSrc: "Ranch/icon_ranchHouse.png",
        produces: [
          {
            item: "Eggs",
            icon: "icon_eggs",
            cookTime: [30, 60, 120, 240],
            ingredients: [
              {
                icon: "icon_feed",
                item: "Feed",
                qty: 3,
              },
              {
                icon: "icon_water",
                item: "Water",
                qty: 1,
              },
            ],
            prizes: {
              cash: 16700,
              star: 1800,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Ranch House",
          },
          {
            title: "build cost",
            value: "1,250$",
          },
          {
            title: "destroy cost",
            value: "313$",
          },
          {
            title: "Labor cost",
            value: "10$/Min",
          },
          {
            title: "build requirements",
            value: "Wood x1",
          },
          {
            title: "Shade",
            value: "1x1",
          },
          {
            title: "stores in",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: ["ranch house"],
      },
      {
        name: "Seep Pen",
        cost: 20000,
        imgSrc: "Ranch/icon_sheepPen.png",
        produces: [
          {
            item: "Wool",
            icon: "icon_wool",
            cookTime: [60],
            ingredients: [
              {
                icon: "icon_feed",
                item: "Feed",
                qty: 8,
              },
              {
                icon: "icon_wood",
                item: "Wood",
                qty: 1,
              },
              {
                icon: "icon_water",
                item: "Water",
                qty: 5,
              },
            ],
            prizes: {
              cash: 37500,
              star: 220,
            },
          },
        ],
        otherInfo: [
          {
            title: "name",
            value: "Sheep Pen",
          },
          {
            title: "build cost",
            value: "20,000$",
          },
          {
            title: "destroy cost",
            value: "5,000$",
          },
          {
            title: "Lobor cost",
            value: "None",
          },
          {
            title: "build requirements",
            value: "Wood x3",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "Store House",
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
        keywords: ["sheep", "sheep pen", "wool"],
      },
      {
        name: "trough",
        cost: 5000,
        imgSrc: "Ranch/icon_trough.png",
        otherInfo: [
          {
            title: "name",
            value: "Feed Mill",
          },
          {
            title: "build cost",
            value: "5,000",
          },
          {
            title: "destroy cost",
            value: "1,250$",
          },
          {
            title: "Labor cost",
            value: "None",
          },
          {
            title: "build requirements",
            value: "Wood x1",
          },
          {
            title: "Shade",
            value: "None",
          },
          {
            title: "stores in",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["trough"],
      },
    ],
  },
  {
    title: "terrain",
    items: [
      {
        name: "Dirt Road",
        cost: 1000,
        imgSrc: "Terrain/icon_dirtRoad.png",
        otherInfo: [
          {
            title: "name",
            value: "Dirt Road",
          },
          {
            title: "build cost",
            value: "1,000$",
          },
          {
            title: "destroy cost",
            value: "250$",
          },
          {
            title: "upgrade cost",
            value: "29,750$",
          },
          {
            title: "shade",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["road", "dirt road"],
      },
      {
        name: "Meadow",
        cost: 500,
        imgSrc: "Terrain/icon_meadow.png",
        otherInfo: [
          {
            title: "name",
            value: "Meadow",
          },
          {
            title: "build cost",
            value: "500$",
          },
          {
            title: "destroy cost",
            value: "125$",
          },
          {
            title: "shade",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        produces: [
          {
            item: "Feed",
            icon: "icon_feed",
            cookTime: [45],
            prizes: {
              cash: 37500,
              star: 220,
            },
          },
        ],
        keywords: ["grass", "meadow"],
      },
      {
        name: "Paved Road",
        cost: 30000,
        imgSrc: "Terrain/icon_pavedRoad.png",
        otherInfo: [
          {
            title: "name",
            value: "Paved Road",
          },
          {
            title: "build cost",
            value: "30,000$",
          },
          {
            title: "destroy cost",
            value: "7,500$",
          },
          {
            title: "shade",
            value: "None",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "Yes",
          },
        ],
        keywords: ["road", "paved road"],
      },
      {
        name: "Pond",
        cost: 10000,
        imgSrc: "Terrain/icon_pond.png",
        otherInfo: [
          {
            title: "name",
            value: "Pond",
          },
          {
            title: "build cost",
            value: "10,000$",
          },
          {
            title: "destroy cost",
            value: "2,500$",
          },
          {
            title: "build requirements",
            value: "Water x10",
          },
          {
            title: "water",
            value: "2x2",
          },
          {
            title: "affected by",
            value: "None",
          },
          {
            title: "requires road",
            value: "No",
          },
        ],
        keywords: ["pond", "water"],
      },
    ],
  },
]);

crafts.value.map((craft) => craft.items.sort((a, b) => b.cost - a.cost));

provide("crafts", crafts);
</script>
