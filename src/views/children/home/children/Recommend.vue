<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" :id="index">
        <img v-lazy="item.image" >
        <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
//导入服务器
import {getBanner} from "@/network/home";

export default {
  name: "Recommend",
  data(){
    return{
      recommend:''
    }
  },
  created() {
    this.getRecommend();
  },
  methods:{
    getRecommend(){
      getBanner().then(res=>{
        this.recommend=res.data.data.recommend.list;
      })
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  justify-content: space-around;
}
div{
  text-align: center;
}
img{
  width: 1.5rem;
}
</style>
