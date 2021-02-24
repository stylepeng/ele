<template>
  <div class="detail-recommend" >
    <GoodsItem    v-for="(item,index) in recommend" :key="index">
      <img :src="item.image">
      <p>{{item.title}}</p>
      <p>{{item.price}}</p>
    </GoodsItem>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem";

export default {
  name: "DetailRecommend",
  components:{
    GoodsItem
  },
  props:{
    recommend:{}
  },
}
</script>

<style scoped>
.detail-recommend{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
