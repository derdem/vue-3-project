import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import generateRoutes from "@/router/routes";

const routes: Array<RouteRecordRaw> = generateRoutes();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
