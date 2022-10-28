<template>
  <section class="contacts-container">
    <div class="contacts-inner">
      <router-link to="/" class="back-btn">Back to Home</router-link>
      <h3>Get in Touch</h3>
      <p>We’d love hear from you</p>
      <ul class="socials">
        <li>
          <a href="mailto:gharedaghi.zip@gmail.com">
            <img
              src="/src/assets/images/Email.svg"
              alt="email"
              title="gharedaghi.zip@gmail.com"
            />
          </a>
        </li>
        <li>
          <a href="tel:8882192787">
            <img
              src="/src/assets/images/Tel.svg"
              alt="tel"
              title="+989370700162"
            />
          </a>
        </li>
        <li>
          <a href="https:instagram.com/gharedaghi.ce" target="_blank">
            <img
              src="/src/assets/images/Instagram.svg"
              alt="instagram"
              title="gharedaghi.ce"
            />
          </a>
        </li>
      </ul>
      <span class="or-line">OR</span>
      <form
        class="contacts-form"
        autocomplete="off"
        @submit.prevent="onSubmitForm"
      >
        <div class="input-group">
          <label for="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            v-model="name"
            :class="name ? 'is-filled' : ''"
          />
        </div>
        <div class="input-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            required
            v-model="email"
            :class="email ? 'is-filled' : ''"
          />
        </div>
        <div class="input-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            required
            v-model="message"
            :class="message ? 'is-filled' : ''"
          ></textarea>
        </div>
        <span class="response" :class="{ ok: resResult.status === 200 }">{{
          resResult.text
        }}</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const name = ref("");
const email = ref("");
const message = ref("");
const resResult = ref({
  text: "",
  status: 0,
});

const onSubmitForm = function () {
  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  )
    return;
  // reset response result
  resResult.value = { text: "", status: 0 };
  axios
    .post(
      "https://townstar-knowledgebase-acb8d-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
      {
        name: name.value,
        email: email.value,
        message: message.value,
      }
    )
    .then((res) => {
      resResult.value = { text: "Your Message Successfuly Sent!", status: 200 };
    })
    .catch((er) => {
      resResult.value = { text: er.message, status: 400 };
    });
  // base url: https://townstar-knowledgebase-acb8d-default-rtdb.europe-west1.firebasedatabase.app/
};
</script>
