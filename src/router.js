import Vue from "vue";
import Router from "vue-router";
import Products from "./views/Products.vue";
import Cart from "./views/Cart.vue";
import Contacts from "./views/Contacts";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "products",
      component: Products
    },
    {
      path: "/cart",
      name: "cart",
      component: function() {
        return import(/* webpackChunkName: "about" */ "./views/Cart.vue");
      }
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    }
  ]
});
