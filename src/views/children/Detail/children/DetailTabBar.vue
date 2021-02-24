<template>
  <div class="tab-bar" @click="addMessage($event)">
    <div v-for="(item,index) in tabbar" :key="index">
      <span :id="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar",
  data(){
    return{
      tabbar:['客服','店铺','收藏','加入购物车','购买']
    }
  },
  methods:{
    addMessage(e){
      switch (e.target.id){
        case "0":
          console.log('aaa');
          break;
        case '1':
          this.$router.push('/store');
          break;
        case '2':
          this.$emit('collect',);
          break;
        case '3':
          this.$emit('addToCart',1);
          break;
      }
    }
  },

}
</script>

<style scoped>
.tab-bar{
  display: flex;
  height: 1rem;
  line-height: 1rem;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
}

</style>
