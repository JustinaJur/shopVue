<template>
  <div id="app">
    {{search}} hye
    <!-- {{showProducts}} -->
    <Header/>
    <SearchBar @handle-search="handleChangeValue"/>

    <!-- <Navigation :content="selected"/> -->
    <Products
      @add-item="addItem"
      :search="search"
      :products="products"
      :showProducts="showProducts"
    />
    <Cart :selected="selected"/>
    <!-- {{showProducts}} -->
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import Navigation from "./components/Navigation.vue";

import Products from "./views/Products.vue";
import Cart from "./views/Cart.vue";
import products from "./products.json";
export default {
  name: "app",
  components: { Header, SearchBar, Products, Cart, Navigation },
  data() {
    return {
      search: "pradinis",
      selected2: [{ item: "zuvis" }, { item: "moliugas" }, { item: "batonas" }],
      selected: [],
      products
    };
  },
  computed: {
    showProducts() {
      console.log(
        this.products.products.map(item => item.name === "I am Groot")
      );
      // console.log(this.products.products.filter(item => item.price > 13);
      //return this.products.products.map(item => item.price + 1);
      return this.products.products.filter(
        item =>
          item.name.toLowerCase().indexOf(this.search) !== -1 ||
          item.description.toLowerCase().indexOf(this.search) !== -1
      );
    }
    // addItem(product) {
    //  this.selected.push(product);
    ///this.search = product.name;
    // console.log(this.selected);
    // return this.selected.filter(item => item.price > 0);
    // console.log(this.selected);
    // }
  },
  methods: {
    handleChangeValue(e) {
      //reik is data paimt search ir i ji ideti gauta reiksme ir tada ja siusti i products komponent
      //console.log(e.target.value);
      console.log(e);
      this.search = e;
      // this.search = e.target.value;
      this.products = showProducts;
    },
    addItem(product) {
      this.selected.push(product);
    }
  }
};
</script>


<style>
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
