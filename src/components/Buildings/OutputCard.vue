<template>
  <section class="output-card__container">
    <h3 class="output-card__title">
      {{ props.cardTitle }}
    </h3>
    <img
      :src="`/public/images/TownStar/Products/${props.icon}.png`"
      :alt="`icon-${props.name}`"
      class="output-card__product"
    />
    <div class="output-card__time">
      <img
        src="/public/images/TownStar/Icons/icon_clock.png"
        alt="icon-clock"
      />
      <span v-for="(time, index) in props.cookTime" :key="index"
        >{{ time }}s</span
      >
    </div>
    <section class="output-card__ingredients" v-if="props.ingredients">
      <article
        class="output-card__ingredient"
        v-for="(requirement, index) in props.ingredients"
        :key="index"
      >
        <img
          :src="`/public/images/TownStar/Products/${requirement.icon}.png`"
          alt="req-img"
        />
        <p>0/{{ `${requirement.qty} ${requirement.item}` }}</p>
      </article>
    </section>
    <section
      class="output-card__prizes"
      v-if="props.prizes.cash !== 'None' && props.prizes.star !== 'None'"
    >
      <article class="output-card__prize">
        <img
          src="/public/images/TownStar/Icons/icon_cash.png"
          alt="icon-cash"
        />
        <p>{{ props.prizes.cash.toLocaleString("en-US") }}</p>
      </article>
      <article class="output-card__prize">
        <img
          src="/public/images/TownStar/Icons/icon_star.png"
          alt="icon-star"
        />
        <p>{{ props.prizes.star.toLocaleString("en-US") }}</p>
      </article>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  cardTitle: {
    type: String,
    default: "Undefined",
  },
  cookTime: {
    type: Array,
    default: 0,
  },
  ingredients: {
    type: Array,
    default: undefined,
  },
  prizes: {
    type: Object,
    default: {
      cash: 0,
      star: 0,
    },
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>
