import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildingInfo from "../views/BuildingInfo.vue";
import SomethingView from "../views/SomethingView.vue";
import Contacts from "../views/Contacts.vue";
import ComingSoon from "../views/ComingSoon.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: "Town Star Helper - Home" }
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
      component: ComingSoon,
      meta: { title: "About - Coming Soon..." }
    },
    {
      path: "/contact",
      component: Contacts,
      meta: { title: "Town Star Helper - Contact Us" }
    },
    {
      path: "/blog",
      component: ComingSoon,
      meta: { title: "Blog - Coming Soon..." }
    },
    {
      path: "/tutorials",
      component: ComingSoon,
      meta: { title: "Tutorials - Coming Soon..." }
    },
  ],
  scrollBehavior() {
    window.scrollTo({ top: 0 })
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.title !== undefined) {
    document.title = to.meta.title
  }
  next();
});;
export default router
