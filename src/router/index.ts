import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path:"/",
    redirect:'home'
  },
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/apply",
    name: "apply",
    component: () =>
      import("../views/ApplyView.vue"),
  },
  {
    path: "/SL_1",
    name: "SL_1",
    component: () =>
      import("../views/SonLinkView_1.vue"),
  },
  {
    path: "/SL_2",
    name: "SL_2",
    component: () =>
      import("../views/SonLinkView_2.vue"),
  },
  {
    path: "/SL_3",
    name: "SL_3",
    component: () =>
      import("../views/SonLinkView_3.vue"),
  },
  {
    path: "/SL_4",
    name: "SL_4",
    component: () =>
      import("../views/SonLinkView_4.vue"),
  },
  {
    path: "/SL_5",
    name: "SL_5",
    component: () =>
      import("../views/SonLinkView_5.vue"),
  },
  {
    path: "/SL_6",
    name: "SL_6",
    component: () =>
      import("../views/SonLinkView_6.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
