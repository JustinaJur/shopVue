<template>
  <div class="cart">
    <div v-if="selected.length == 0">Your cart is empty</div>
    <table v-else>
      <thead>
        <th>products</th>
        <th>quantity</th>
        <th>price</th>
        <th>add</th>
        <th>remove</th>
      </thead>
      <td>{{selected}}</td>
      <!-- <td>{item.quantity}</td>
                                <td>{Number(item.price * item.quantity).toFixed(2)} EUR</td>
                                <ButtonAdd
                                    item={item}
                                    addItem={this.props.addItem}
                                    selected={this.props.selected}
                                    name="+"
                                />
                                < ButtonRemove
                                    item={item}
                                    removeItem={this.props.removeItem}
                                    name="-"
      />-->
      <!-- <div className="button">{this.props.children}</div> -->
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {},
  props: {
    selected: Array
  }
};
</script>
