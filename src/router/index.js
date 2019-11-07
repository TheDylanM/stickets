import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';
import CreateTicket from '../views/CreateTicket';
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      { path: '', component: Dashboard },
      { path: '/create-ticket', component: CreateTicket },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/create-account',
    name: 'createAccount',
    component: CreateAccount,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
