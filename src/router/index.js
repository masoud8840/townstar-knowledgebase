import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildingInfo from "../views/BuildingInfo.vue";
import SomethingView from "../views/SomethingView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/build',
      component: SomethingView,
      name: "BuildingInfo",
      redirect: '/build/bakery',
      children: [
        {
          path: ':craftID',
          component: BuildingInfo,
          name: "buildInfo",
          props: true,
        }
      ]
    },

  ],
  scrollBehavior() {
    window.scrollTo({ top: 0 })
  },
});

export default router
