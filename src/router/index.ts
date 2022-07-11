import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});


router.beforeEach(async(to)=>{
  
})