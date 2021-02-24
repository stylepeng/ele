<template>
  <div class="store" v-if="Object.keys(store).length!==0">
    <div class="store-info">
     <div class="logo">
       <img :src="store.logo" alt="">
     </div>
      <div >{{store.name}}</div>
    </div>

    <div class="shop-info">
      <div class="total-sell">
        <div><strong>{{store.sells}}</strong></div>
        <div>总销量</div>
      </div>
      <div>
        <div><strong>{{store.goodsCount}}</strong></div>
        <div>全部宝贝</div>
      </div>
      <div>
        <div v-for="(item,index) in store.score" :key="index" class="score">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span v-if="item.isBetter" style="background-color: red;color: white">高</span>
          <span v-else style="background-color: green;color: white">低</span>
        </div>
      </div>
    </div>

    <div class="enter">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "StoreInfo",
  props:{
    store:{}
  }
}
</script>

<style scoped>
.store-info{
  display: flex;
  line-height: 1rem;

}
img{
  width: 1rem;
  height: 1rem;
}
.logo{
  margin-right: .2rem;
}
.shop-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  line-height: .4rem;
}

span{
  margin: 0 .1rem;
}
.score{
  display: flex;
  justify-content: space-between;
  margin-bottom: .1rem;
}
.enter{
  margin: .3rem auto;
  text-align: center;
  background-color: silver;
  border-radius: .5rem;
  width: 2rem;
  color: snow;
}
</style>
