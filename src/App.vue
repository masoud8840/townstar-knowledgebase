<template>
  <router-view></router-view>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { provide } from "vue";

const navbarIsOpen = ref(false);
const toggleNavbar = (isOpenState) => {
  navbarIsOpen.value = isOpenState;
};
const toggleOffNavbar = () => {
  navbarIsOpen.value = false;
};
const crafts = ref([]);
provide("crafts", crafts);
import craftsList from "./assets/crafts";
crafts.value = craftsList;
// axios
//   .get(
//     "https://townstar-knowledgebase-acb8d-default-rtdb.europe-west1.firebasedatabase.app/crafts.json"
//   )
//   .then((res) => {
//     for (let i in res.data) {
//       crafts.value = JSON.parse(res.data[i].crafts);
//     }
//   });
</script>
