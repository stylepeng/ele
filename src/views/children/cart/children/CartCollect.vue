<template>
  <div class="collect" v-if="$store.getters.goodsList">
    <CartCollectItem v-for="(item,index) in $store.getters.goodsList" :key="index" class="cart">
      <div><input type="checkbox" :checked="item.checked" @click="checkClick(item)"></div>
      <div><img :src="item.image" ></div>
      <div>
        <div class="title">
          <span>{{item.title}}</span>
        </div>
        <div class="price">
          <span>{{item.price | price}}</span>
          <span>{{item.count | showCount}}</span>
        </div>
      </div>
    </CartCollectItem>
  </div>
</template>

<script>
import CartCollectItem from "@/views/children/cart/children/CartCollectItem";
export default {
  name: "CartCollect",
  filters:{
    showCount(value){
      return 'X'+''+value;
    },
    price(value){
      return "￥"+value;
    }
  },
  components:{
    CartCollectItem
  },
  methods:{
    checkClick(item){
      //修改vuex商品的状态
      this.$store.dispatch('checkedState',item);
    }
  }
}
</script>

<style scoped>
.cart{
  display: flex;
  margin: .05rem .2rem;
}
.title{
  width: 5.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.price{
  margin-top: .8rem;
  display: flex;
  justify-content: space-between;
}
input{
  margin-top: .6rem;
  border-radius: 60%;
}
.price span:nth-child(1){
  color:orange;
}
</style>
