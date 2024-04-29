import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FormTest from '../components/FormTest.vue'
import AsthemaView from '../views/AsthmaView.vue'
import CopdView from '../views/CopdView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/formtest',
    name: 'formtest',
    component: FormTest
  },
  {
    path: '/asthema',
    name: 'asthema',
    component: AsthemaView,
  },
  {
    path: '/copd',
    name: 'copd',
    component: CopdView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
