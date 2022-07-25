import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildingInfo from "../views/BuildingInfo.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:craftID',
      props: true,
      component: BuildingInfo
    }
  ],
  scrollBehavior() {
    window.scrollTo({ top: 0 })
  }
})

export default router
