import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Life from "../views/Life.vue";
import Food from "../views/Food.vue";
import Animal from "../views/Animal.vue";
import Nature from "../views/Nature.vue";
import Sports from "../views/Sports.vue";
import Book from "../views/Book.vue";
import Fashion from "../views/Fashion.vue";
import World from "../views/World.vue";

Vue.use(VueRouter);
Vue.use(Buefy);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/life",
    name: "life",
    component: Life
  },

  {
    path: "/food",
    name: "food",
    component: Food
  },
  {
    path: "/sports",
    name: "sports",
    component: Sports
  },

  {
    path: "/animal",
    name: "animal",
    component: Animal
  },
  {
    path: "/nature",
    name: "nature",
    component: Nature
  },
  {
    path: "/book",
    name: "book",
    component: Book
  },
  {
    path: "/fashion",
    name: "fashion",
    component: Fashion
  },
  {
    path: "/world",
    name: "world",
    component: World
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
