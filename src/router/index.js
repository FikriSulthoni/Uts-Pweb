import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Quran from "../views/ALQuran.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/alquran",
    name: "alquran",
    component: Quran,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
