<template>
  <div class="building-info__container">
    <img :src="`/public/images/TownStar/${currentCraft.imgSrc}`" alt="building-img" class="building__img">
    <table v-if="!!currentCraft.otherInfo">
      <tr v-for="(item,index) in currentCraft.otherInfo" :key="index">
        <td>{{ item.title }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
    <div class="outputs">
      <output-card v-for="(product,index) in currentCraft.produces"
                   :key="index"
                   :card-title="product.item"
                   :icon="product.icon"
                   :cook-time="product.cookTime"
                   :ingredients="product.ingredients"
                   :prizes="product.prizes"
      ></output-card>
    </div>
  </div>

</template>

<script setup>
import {computed, inject} from "vue";
import OutputCard from "../components/Buildings/OutputCard.vue";

const props = defineProps(['craftID'])
const crafts = inject('crafts');

const currentCraft = computed(() => {
  let foundItem = {};
  crafts.value.map((craft) => craft.items.map(item => {
    if (item.name === props.craftID) foundItem = item
  }));
  return foundItem
})
</script>