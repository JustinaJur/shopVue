<template>
  <button v-on:click="addItem">{{name}}</button>
</template>
<script>
export default {
  name: "ButtonAdd",
  props: {
    name: String
  },
  methods: {
    addItem() {
      console.log("ddd");
      this.$emit("add-item");
    }
  }
};
</script>
