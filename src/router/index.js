import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Life from "../views/Life.vue";
import Food from "../views/Food.vue";
import Animal from "../views/Animal.vue";
import Nature from "../views/Nature.vue";
import Sports from "../views/Sports.vue";
import Book from "../views/Book.vue";
import Fashion from "../views/Fashion.vue";
import World from "../views/World.vue";
import Signin from "@/components/Signin.vue";
import Signup from "@/components/Signup.vue";
import firebase from "firebase";

Vue.use(Router);
Vue.use(Buefy);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/life",
      name: "life",
      component: Life,
      meta: { requiresAuth: true }
    },

    {
      path: "/food",
      name: "food",
      component: Food,
      meta: { requiresAuth: true }
    },
    {
      path: "/sports",
      name: "sports",
      component: Sports,
      meta: { requiresAuth: true }
    },

    {
      path: "/animal",
      name: "animal",
      component: Animal,
      meta: { requiresAuth: true }
    },
    {
      path: "/nature",
      name: "nature",
      component: Nature,
      meta: { requiresAuth: true }
    },
    {
      path: "/book",
      name: "book",
      component: Book,
      meta: { requiresAuth: true }
    },
    {
      path: "/fashion",
      name: "fashion",
      component: Fashion,
      meta: { requiresAuth: true }
    },
    {
      path: "/world",
      name: "world",
      component: World,
      meta: { requiresAuth: true }
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    }
  ]
});
router.beforeEach((to, from, next) => {
  // ルート認証があるかどうかのチェック
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // ユーザログインのチェック
    // if (requiresAuth) {
    //   firebase.onAuthStateChanged(function(user) {
    const user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({
        path: "/signin",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    //  ルート認証していない場合はこっち
    next();
  }
});

// vue.router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export default router;
