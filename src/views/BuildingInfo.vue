<template>
  <div class="building-info__container">
    <img :src="`/public/images/TownStar/${currentCraft.imgSrc}`" alt="building-img" class="building__img">
    <table>
      <tr v-for="(item,index) in currentCraft.otherInfo" :key="index">
        <td>{{ item.title }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
    <div class="outputs">
      <output-card v-for="(product,index) in currentCraft.produces"
                   :key="index"
                   :card-title="product.item"
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
  let findedItem = {};
  for (let craft of crafts.value) {
    for (let product of craft.items) {
      if (product.name === props.craftID) {
        findedItem = product;
      }
    }
  }
  return findedItem;
})
</script>