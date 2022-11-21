import { createRouter, createWebHistory } from "vue-router";
<<<<<<< HEAD
=======

// function lazyload(view, folder){
//   if(folder) {
//     return import(`../views/${folder}/${view}.vue`)
//   } else {
//     return import(`../views/${view}.vue`)
//   }
// }

// meu deus irmão que baianagem
>>>>>>> 806c9af6c78f352411ca007bb52065afa2640705

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
<<<<<<< HEAD
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
=======
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
>>>>>>> 806c9af6c78f352411ca007bb52065afa2640705
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
