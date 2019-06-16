<template>
  <div>
    {{enteredData}}
    <form v-on:submit.prevent>
      <!-- <form> -->
      <label>Search products:</label>
      <input
        type="text"
        v-model="searchedData"
        v-on:change="handleChangeValue"
        placeholder="Search products..."
      >
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchedData: ""
    };
  },
  computed: {
    enteredData() {
      return this.searchedData;
    }
  },
  methods: {
    handleChangeValue() {
      // this.juste = e.target.value;
      // console.log(e);
      // console.log(e.target.model);
      console.log(this.enteredData);
      var e = this.enteredData;
      this.$emit("handle-search", e);
    }
  }
};
</script>

