<template>
  <div class="nav">
    <div>
      <input type="radio" :checked="allChecked" @click="all">
      <span>全选</span>
    </div>
    <div>
      <span>合计</span>
      <span>￥{{totalPrice}}</span>
    </div>
    <div>{{count}}</div>
  </div>
</template>

<script>
export default {
  name: "ButtonBar",
  computed:{
    //算出总价格
    totalPrice(){
      return this.$store.getters.goodsList.filter(item=>{
        return item.checked;
      }).reduce((per,item)=>{
        return per+item.price*item.count;
      },0).toFixed(2)
    },

    //监听全部商品选中状态
    allChecked(){
      if(this.$store.getters.goodsList.length===0) return false;
      return !(this.$store.getters.goodsList.find(item=>{
        return !item.checked
      }))
    },

    //计算总件数
    count(){
      return this.$store.getters.goodsList.filter(item=>item.checked).reduce((per,item)=> {
       return  per + item.count
      },0)
    }
  },
  methods:{
    all(){

      if(this.allChecked){
        this.$store.dispatch('allChecked');
      }else{
        this.$store.dispatch('noChecked');
      }
    }
  },
}
</script>

<style scoped>
.nav{
  display: flex;
  background-color: lightgray;
  line-height: .6rem;
  height: .6rem;
  position: relative;
  justify-content: space-between;
}
</style>
