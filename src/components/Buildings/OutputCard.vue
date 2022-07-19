<template>
  <section class="output-card__container">
    <h3 class="output-card__title">
      {{ props.cardTitle }}
    </h3>
    <img src="/public/images/TownStar/Products/icon_jam.png" :alt="`icon-${props.name}`" class="output-card__product">
    <div class="output-card__time">
      <img src="/public/images/TownStar/Icons/icon_clock.png" alt="icon-clock">
      <span>{{ props.cookTime }}s</span>
    </div>
    <section class="output-card__requirements">
      <article class="output-card__requirement" v-for="(requirement, index) in props.requirements" :key="index">
        <img :src="`/public/images/TownStar/Products/${requirement.icon}.png`" alt="req-img">
        <p>0/{{ `${requirement.qty} ${requirement.item}` }}</p>
      </article>
    </section>
    <section class="output-card__prizes">
      <article class="output-card__prize">
        <img src="/public/images/TownStar/Icons/icon_cash.png" alt="icon-cash">
        <p>{{ props.prizes.cash }}</p>
      </article>
      <article class="output-card__prize">
        <img src="/public/images/TownStar/Icons/icon_star.png" alt="icon-star">
        <p>{{ props.prizes.star }}</p>
      </article>
    </section>
  </section>
</template>


<script setup>
// const props = defineProps(['craftTitle','cookTime',''])
const props = defineProps({
  cardTitle: {
    type: String,
    default: "Undefined",
  },
  cookTime: {
    type: Number,
    default: 0,
  },
  requirements: {
    type: Array,
    default: ['none']
  },
  prizes: {
    type: Object,
    default: {
      cash: 0,
      star: 0
    }
  }
})

</script>