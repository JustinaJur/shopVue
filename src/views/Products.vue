<template>
  <!-- //<li v-for="product in products.products">{{product.name}}</li> -->

  <div class="products-container">
    {{search}}
    {{selected}}
    <li v-for="item in selected">{{item}}</li>
    <!-- {filteredData.map(item => -->
    <div v-for="product in products.products">
      <h3>{{product.name}}</h3>
      <!-- <img height="{100}" v-bind:src={`/products/${{products.image}}`}> -->
      <!-- <img height="{100}" v-bind:src="/products/{{products.image}}"> -->
      {{product.description}}
      <h3>{{product.price}} EUR</h3>
      <div class="buttons">
        <ButtonAdd @add-item="addItem" :name="name"/>
        <!-- <ButtonAdd
          item="{item}"
          addItem="{this.props.addItem}"
          selected="{this.props.selected}"
          name="Add Item"
        />
        <ButtonRemove item="{item}" removeItem="{this.props.removeItem}" name="Remove Item"/>-->
      </div>
    </div>)
    }
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import products from "../products.json";
import ButtonAdd from "../components/Listing/ButtonAdd.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    ButtonAdd
  },
  props: {
    selected: ["selected"],
    search: String
  },
  data() {
    console.log(products.products);
    return {
      // stones: ["suo", "kate"],
      products,
      name: "add item",
      title: "title"
    };
  },
  methods: {
    addItem() {
      console.log("fff");
      this.$emit("add-item");
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
