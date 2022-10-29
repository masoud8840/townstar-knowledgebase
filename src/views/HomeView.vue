<template>
  <div class="home-view__container">
    <nav>
      <router-link to="/">
        <img src="/public/images/Navbar/TownStarLogo.svg" alt="townstar-logo" />
      </router-link>
      <menu-btn
        class="mainNavMobileToggleBtn"
        v-if="isMobile"
        @click="toggleIsNavOpen"
      />

      <ul :class="{ mainNavigationMobileVersion: isMobile }" v-if="isNavOpen">
        <close-btn class="close-btn" @click="toggleIsNavOpen" v-if="isMobile" />
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li>
          <router-link to="/contact">contact</router-link>
        </li>
        <li>
          <router-link to="/blog">blog</router-link>
        </li>
        <li>
          <router-link to="/tutorials">tutorials</router-link>
        </li>
        <li>
          <router-link to="/build" class="navbar-start-link"
            >start<img src="/public/images/Navbar/Arrow.svg" alt="arrow" />
          </router-link>
        </li>
      </ul>
    </nav>
    <div
      class="home-view__overlay"
      @click="isMobile ? (isNavOpen = false) : ''"
    >
      <section>
        <h2>Welcome to town star helper</h2>
        <p>
          here you can find a bunch of information that will help you to arrange
          your buildings efficiently, alos you will be aware of in-game prizes
          and any news that gala games has realeased but in simpler boxes.
        </p>
      </section>
    </div>
  </div>

  <dialog open v-if="isUpdateDialogOpen">
    <div class="modal-inner">
      <h3>New Update!</h3>
      <p>What did updated is listed below:</p>
      <ul>
        <li>New Contact Us Page Added.</li>
        <li>Updated Informations (Oct 29, 2022).</li>
        <li>Buildings List's Order.</li>
        <li>Update Popup.</li>
      </ul>
      <p class="hint-text">
        if you see any missmatch or have any idea about making this app better,
        from the contact page please contact us!
      </p>
      <close-btn class="close-btn" @click="toggleIsUpdateDialogOpen" />
    </div>
  </dialog>
</template>

<script setup>
import { ref, onMounted } from "vue";
import menuBtn from "../assets/images/Menu.vue";
import closeBtn from "../assets/images/Close.vue";
const isMobile = ref(null);
const isNavOpen = ref(false);

function checkDevice() {
  if (window.innerWidth < 640) {
    isMobile.value = true;
    isNavOpen.value = false;
  } else {
    isMobile.value = false;
    isNavOpen.value = true;
  }
}

onMounted(() => {
  window.addEventListener("resize", checkDevice);
});
checkDevice();

function toggleIsNavOpen() {
  isNavOpen.value = !isNavOpen.value;
}
const updateNitificationStatus = localStorage.getItem(
  "updateNitificationStatus"
);
const isUpdateDialogOpen = ref(!updateNitificationStatus);
function toggleIsUpdateDialogOpen() {
  isUpdateDialogOpen.value = false;
  localStorage.setItem("updateNitificationStatus", false);
}
</script>
