import { createRouter, createWebHistory } from 'vue-router'

function lazyload(view, folder){
  if(folder) {
    return import(`../views/${folder}/${view}.vue`)
  } else {
    return import(`../views/${view}.vue`)
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyload('HomeView')
    },
    {
      path: '/categories',
      name: 'categories',
      component: lazyload('CategoriesView')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: lazyload('PerfilView')
    },
    {
      path: '/help',
      name: 'help',
      component: lazyload('HelpView')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: lazyload('MovieView')
    },
    {
      path: '/login',
      name: 'login',
      component: lazyload('LoginSession', 'login')
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: lazyload('CreateLogin', 'login')
    }
  ]
})

export default router
