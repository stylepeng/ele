<template>
  <div class="detail-info">
    <div>{{detailInfo.desc}}</div>
    <div>{{detailInfo.key}}</div>
    <div v-for="(item,index) in detailInfo.list" :key="index">
      <img :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props:{
    detailInfo:{}
  },
  methods:{
  imageLoad(){
    this.$emit('load')
  }
  },
}
</script>

<style scoped>
img{
  width: 6.7rem;
  height: 4rem;
}
</style>
