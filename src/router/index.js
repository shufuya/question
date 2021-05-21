import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const Project = () => import('../views/Project.vue')
const Find = () => import('../views/Find.vue')
const Mine = () => import('../views/Mine.vue')

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
  {
    path: '/home',
		name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
	{
		path: '/find',
		name: 'Find',
		component: Find
	},
	{
		path:'/mine',
		name: 'Mine',
		component: Mine
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
