<template>
  <div class="products-container">
    {{search}}
    {{selected}}
    <li v-for="item in selected">{{item}}</li>
    <!-- {filteredData.map(item => -->
    <div v-for="product in showProducts">
      <!-- <div v-for="product in products.products"> -->
      <h3>{{product.name}}</h3>
      <p>{{product.description}}</p>
      <!-- <img height="{100}" v-bind:src={`/products/${{products.image}}`}> 
      ///<img height="{100}" v-bind:src="/products/{{products.image}}">-->

      <h3>{{product.price}} EUR</h3>
      <div class="buttons">
        <ButtonAdd @add-item="addItem" :name="name" :product="product"/>
        <!-- <ButtonAdd
          item="{item}"
          addItem="{this.props.addItem}"
          selected="{this.props.selected}"
          name="Add Item"
        />
        <ButtonRemove item="{item}" removeItem="{this.props.removeItem}" name="Remove Item"/>-->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ButtonAdd from "../components/Listing/ButtonAdd.vue";
//import products from "../products.json";

export default {
  name: "home",
  components: {
    HelloWorld,
    ButtonAdd
  },
  props: {
    selected: ["selected"],
    search: String,
    products: Array,
    showProducts: Array
  },
  data() {
    return {
      name: "add item"
    };
  },
  methods: {
    addItem(e) {
      console.log(this.showProducts);
      console.log("is products");
      ///cia id perduot reik
      console.log(this.products.products[0]);
      console.log(this.search);
      this.$emit("add-item", e);
    }
  }
};
</script>
<style>
.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin: 15px 25px;
}
</style>
