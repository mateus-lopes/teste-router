import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/genres",
      name: "genres",
      component: () => import("../views/GenresView.vue"),
    },
    {
      path: "/genre/:id",
      name: "genre",
      component: () => import("../views/GenreView.vue"),
    },
    {
      path: "/perfil",
      name: "perfil",
      component: () => import("../views/PerfilView.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/HelpView.vue"),
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: () => import("../views/MovieView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/LoginSession.vue"),
    },
    {
      path: "/create-user",
      name: "create-user",
      component: () => import("../views/login/CreateLogin.vue"),
    },
  ],
});

export default router;
