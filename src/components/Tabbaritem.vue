<template>
  <div class="tab-bar-item" :style="isActive">
    <slot>首页</slot>
  </div>
</template>

<script>
export default {
  name: "Tabbaritem",
  props:{
    path:String,
    color:{
      default:'blue'
    },
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1?{color:this.color}:'';
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  line-height: .6rem;
  height: .6rem;
}
</style>
