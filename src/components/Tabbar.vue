<template>
  <div class="tab-bar" @click="changeColor">
    <Tabbaritem path="/homes">
      <p id="home">首页</p>
    </Tabbaritem>
    <Tabbaritem path="/category">
      <p id="category">分类</p>
    </Tabbaritem>
    <Tabbaritem path="/cart">
      <p id="cart">购物车</p>
    </Tabbaritem>
    <Tabbaritem path="/profile">
      <p id="profile">我的</p>
    </Tabbaritem>
  </div>
</template>

<script>
import Tabbaritem from "@/components/Tabbaritem";
export default {
  name: "TabBar",
  components:{
    Tabbaritem
  },
  data(){
    return {
      list:['首页','分类','购物车','我的']
    }
  },
  props:{
    color:{
      default:'red'
    },
  },
  methods:{
    changeColor(event){
      let id=event.target.id;
     switch (id) {
       case 'home' :
         this.$router.push('/homes').catch(()=>{});
         break ;
       case 'category':
         this.$router.push('/category');
         break;
       case 'cart' :
         this.$router.push('/cart').catch(()=>{});
         break ;
       case 'profile':
         this.$router.push('/profile').catch(()=>{});
         break;
     }
    }
  }
}
</script>

<style scoped>
.tab-bar{
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 .2rem;
  line-height: .4rem;
  border-bottom: .03rem silver solid;
}
p{
  font-size: .2rem;
}
</style>
