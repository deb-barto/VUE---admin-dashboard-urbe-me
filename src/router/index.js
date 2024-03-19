import { createRouter, createWebHistory } from "vue-router";;
import LoggedLayoutDefault from "../layouts/LoggedLayoutDefault.vue";
const ListCLient = () => import('../views/ListClients/index.vue');
const Home = () => import("../views/Home/index.vue");
const Construction = () => import("../views/Construction/Construction.vue");

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
  {
    path: "/relatorios",
    name: "relatorios",
    component: Construction,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
  {
    path: "/relatorio-vendas",
    name: "relatorio-vendas",
    component: Construction,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
  {
    path: "/advisor",
    name: "advisor",
    component: Construction,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
  {
    path: "/lista-clientes",
    name: "lista-clientes",
    component: ListCLient,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
  {
    path: "/cobranca",
    name: "cobranca",
    component: Construction,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
  {
    path: "/estatisticas",
    name: "estatisticas",
    component: Construction,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
  {
    path: "/mensagens",
    name: "mensagens",
    component: Construction,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
  {
    path: "/ajuda",
    name: "ajuda",
    component: Construction,
    meta: {
      layout: LoggedLayoutDefault,
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
