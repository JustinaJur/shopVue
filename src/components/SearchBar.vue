<template>
  <div>
    {{juste}}
    <form v-on:submit.prevent>
      <label>Search products:</label>
      <input
        type="text"
        v-model="juste"
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
      juste: ""
    };
  },
  methods: {
    handleChangeValue(e) {
      this.juste = e.target.value;
      console.log(e);
      console.log(e.target.model);
      this.$emit("handle-search", e);
    }
  }
};
</script>

