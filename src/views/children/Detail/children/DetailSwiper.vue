<template>
  <div class="detail-swiper">
    <Swiper active-color="white" :show-circle="true">
      <Swiperitem v-for="(item,index) in banner" :key="index">
        <img :src="item" alt="" @load="loadChange" >
      </Swiperitem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
import Swiperitem from "@/components/swiper/Swiperitem";

export default {
  name: "Detailswiper",
  data(){
    return{
      load:false, //监听第一次加载是否完成
    }
  },
  props:{
    banner:Array
  },
  components:{
    Swiper,
    Swiperitem
  },
  methods:{
    loadChange(){
      if(!this.load){
        this.$emit('load');
        this.load=true;
      }
    }
  }
}
</script>

<style scoped>

</style>
