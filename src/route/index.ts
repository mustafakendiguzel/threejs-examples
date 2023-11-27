import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HelloWorld.vue";
import Threejs from "../components/RotatingKarahan.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/rotatingKarahan", component: Threejs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
