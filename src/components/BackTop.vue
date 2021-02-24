<template>
  <div class="back-top" v-if="position" >
    <img src="@/assets/img/home/top.png"/>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props:{
    //根据position确定是否显示
    position: {
      default:''
    }
  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  bottom: .8rem;
  right: .3rem;
}
img{
  width: .43rem;
  height: .43rem;
}
</style>
