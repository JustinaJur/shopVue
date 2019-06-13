<template>
  <div id="app">
    {{search}} hye
    <Header/>
    <SearchBar @handle-search="handleChangeValue"/>
    <Navigation :content="selected"/>
    <Products :search="search"/>
    <!-- <Cart :selected="selected"/> -->
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import Navigation from "./components/Navigation.vue";

import Products from "./views/Products.vue";
import Cart from "./views/Cart.vue";
export default {
  name: "app",
  components: { Header, SearchBar, Navigation, Products, Cart },
  data() {
    return {
      search: "",
      selected2: [{ item: "zuvis" }, { item: "moliugas" }, { item: "batonas" }],
      selected: ["zuvis", "bulve", "suris"]
    };
  },
  methods: {
    handleChangeValue(e) {
      //reik is data paimt search ir i ji ideti gauta reiksme ir tada ja siusti i products komponent
      console.log(e.target.value);

      this.search = e.target.value;
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
