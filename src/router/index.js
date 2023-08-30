import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/inicio',
    name: 'Inicio',
    
    component: () => import('../views/Inicio.vue'),
    children:[
      {
        path:'/categorias',
        name:'Categoria',
        component:() =>import('../views/Categorias.vue'),
        meta:{
          requiresAuth: true
        }
      }
    ]
  }
]



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  
});


export default router
