<template>
  <div class="home-swiper">
    <Swiper>
      <Swiperitem v-for="(item,index) in banner" :key="index"  >
        <img :src="item.image" alt="" ref="s" @load="imageLoad">
      </Swiperitem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
import Swiperitem from "@/components/swiper/Swiperitem";

import {debounce} from "@/components/common/debounce";

export default {
  name: "HomeSwiper",
  data(){
    return{
      load:false, //记录图片是否加载完成
    }
  },
  components:{
    Swiper,
    Swiperitem
  },
  props:{
    banner:Array
  },
  methods:{
    //图片加载完向父组件发送事件
    imageLoad(){
      if(!this.load){
        this.$emit('load');
      }
    }
  },
}
</script>

<style scoped>
img{
  height: 2.5rem;
}
</style>
