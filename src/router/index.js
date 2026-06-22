import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import DetailFormationView from '../views/DetailFormationView.vue'
import FavorisView from '../views/FavorisView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: CatalogueView
  },
  {
    path: '/formation/:id',
    name: 'formation-detail',
    component: DetailFormationView,
    props: true
  },
  {
    path: '/favoris',
    name: 'favoris',
    component: FavorisView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
