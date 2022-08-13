<template>
  <div class="home-view__container">
    <nav>
      <router-link to="/">
        <img src="/public/images/Navbar/TownStarLogo.svg" alt="townstar-logo" />
      </router-link>
      <ul>
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
    <div class="home-view__overlay">
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
</template>
