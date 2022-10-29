<template>
  <router-view></router-view>
</template>

<script setup>
import axios from "axios";
import { ref, provide } from "vue";
const crafts = ref([]);
provide("crafts", crafts);
axios
  .get(
    "https://townstar-knowledgebase-acb8d-default-rtdb.europe-west1.firebasedatabase.app/crafts.json"
  )
  .then((res) => {
    for (let i in res.data) {
      crafts.value = JSON.parse(res.data[i].crafts);
    }
  });
</script>
