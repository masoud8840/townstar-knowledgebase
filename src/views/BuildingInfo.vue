<template>
  <div class="building-info__container">
    <h1>Craft ID: {{ props.craftID }}</h1>
  </div>
</template>

<script setup>
const props = defineProps(['craftID'])
</script>