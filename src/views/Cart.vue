<template>
  <div class="home">{{selected}}Labasvakaras</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {},
  props: {
    selected: String
  }
};
</script>
