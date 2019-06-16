<template>
  <div>
    <button v-on:click="addItem">{{name}}</button>
    <!-- {{product}} -->
  </div>
</template>
<script>
export default {
  name: "ButtonAdd",
  props: {
    name: String,
    product: String
  },
  methods: {
    addItem() {
      // console.log("is mygtuko");
      // console.log(this.product);
      this.$emit("add-item", this.product);
    }
  }
};
</script>
