<template>
  <div class="something-view__container">
    <navbar-base
      :class="{ open: navbarIsOpen }"
      @on-toggle-off-navbar="toggleOffNavbar"
    ></navbar-base>
    <router-view
      @on-navbar-toggle="toggleNavbar"
      :navbar-state="navbarIsOpen"
      @click="toggleNavbarByClickOnView"
    ></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavbarBase from "../components/Navbar/NavbarBase.vue";

const navbarIsOpen = ref(false);
const toggleNavbar = (isOpenState) => {
  navbarIsOpen.value = isOpenState;
};

const toggleOffNavbar = () => {
  navbarIsOpen.value = false;
};

const toggleNavbarByClickOnView = (e) => {
  if (navbarIsOpen.value === true && e.target.localName !== "button") {
    navbarIsOpen.value = false;
  }
};
</script>
