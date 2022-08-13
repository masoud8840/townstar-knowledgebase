import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildingInfo from "../views/BuildingInfo.vue";
import SomethingView from "../views/SomethingView.vue";
import ComingSoon from "../views/ComingSoon.vue"

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
    {
      path: "/about",
      component: ComingSoon
    },
    {
      path: "/contact",
      component: ComingSoon
    },
    {
      path: "/blog",
      component: ComingSoon
    },
    {
      path: "/tutorials",
      component: ComingSoon
    },
    // {
    //   path: "/:notFound(.*)*",
    //   component: NotFound
    // }
  ],
  scrollBehavior() {
    window.scrollTo({ top: 0 })
  },
});

export default router
