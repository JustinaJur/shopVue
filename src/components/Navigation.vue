<template>
  <nav>
    <ul>
      <li v-for="item in content">{{item}}</li>
    </ul>
    <!-- <div>{{content}}</div> -->
    <ul id="nav">
      <li>
        <router-link to="/" title="produktai" :selected="content">Products</router-link>|
      </li>
      <li>
        <router-link to="/Cart">Cart</router-link>
      </li>
      <li>
        <router-link to="/Contacts">Contacts</router-link>
      </li>
      <router-view/>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["content"]
};
</script>

<style scoped>
#nav {
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  place-items: center; */
  /* background-color: lightsteelblue;
  color: brown;
  padding: 10px;
  margin: 0;
  text-transform: uppercase;
  list-style-type: none; */
}
</style>
