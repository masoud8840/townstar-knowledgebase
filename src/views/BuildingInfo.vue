<template>
  <div class="building-info__container">
    <header class="building-info__header">
      <h2>{{ currentCraft.name }}</h2>
      <button @click="onMenuBtnToggle">
        <img
          src="/public/images/Navbar/Menu.svg"
          alt="menu-btn"
          v-if="!menuIsOpen"
        />
        <img src="/public/images/Navbar/CloseBtn.svg" alt="close-btn" v-else />
      </button>
    </header>
    <img
      :src="`/public/images/TownStar/${currentCraft.imgSrc}`"
      alt="building-img"
      class="building__img"
    />
    <table v-if="!!currentCraft.otherInfo">
      <tr v-for="(item, index) in currentCraft.otherInfo" :key="index">
        <td>{{ item.title }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
    <div class="outputs">
      <output-card
        v-for="(product, index) in currentCraft.produces"
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
import { computed, inject, ref, watch } from "vue";
import OutputCard from "../components/Buildings/OutputCard.vue";

const emits = defineEmits(["onNavbarToggle"]);
const props = defineProps(["craftID", "navbar-state"]);
const crafts = inject("crafts");
const currentCraft = computed(() => {
  let foundItem = {};
  crafts.value.map((craft) =>
    craft.items.map((item) => {
      if (item.name === props.craftID) foundItem = item;
    })
  );
  if (Object.keys(foundItem).length === 0) {
    // Redirect to not found route
    console.log("Redirecting ....");
  }

  // changing document title by which building selected
  let craftName = foundItem.name;
  const nameArr = craftName.split(" ");
  for (var i = 0; i < nameArr.length; i++) {
    nameArr[i] = nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1);
  }
  craftName = nameArr.join(" ");
  document.title = `Building - ${craftName}`;
  return foundItem;
});

const menuIsOpen = ref(false);

const onMenuBtnToggle = () => {
  menuIsOpen.value = !menuIsOpen.value;
  emits("onNavbarToggle", menuIsOpen.value);
};
watch(props, (newVal) => {
  menuIsOpen.value = newVal.navbarState;
});
</script>
