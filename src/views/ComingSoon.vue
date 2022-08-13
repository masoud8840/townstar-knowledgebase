<template>
  <section class="coming-soon__container">
    <div class="coming-soon__overlay">
      <h1>coming soon...</h1>
      <p>Get notified when page released</p>
      <form class="input-group" @submit.prevent="submitNotifications">
        <div>
          <input type="email" id="email" />
        </div>
        <div>
          <router-link to="/" class="secondary">Go Home</router-link>
          <button type="submit" class="primary">Register</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const submitNotifications = () => {};
</script>
