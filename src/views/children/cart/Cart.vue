<template>
  <div class="cart">
    <Nav>
      <template #center>
        购物车
      </template>
    </Nav>
    <BScroll class="scroll">
      <CartCollect/>
    </BScroll>
    <ButtonBar class="button-bar"/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import CartCollect from "@/views/children/cart/children/CartCollect";
import BScroll from "@/components/BScroll";
import ButtonBar from "@/views/children/cart/children/ButtonBar";
export default {
  name: "Cart",
  components:{
    Nav,
    CartCollect,
    BScroll,
    ButtonBar
  },

  deactivated() {
    this.$store.getters.goodsList.forEach(item=>item.checked=true)
  }
}
</script>

<style scoped>
.scroll{
  height: calc(100% - 1.82rem);
}
.cart{
  height: 100%;
}
.button-bar{
  position: relative;
  bottom: 0;
}
</style>
