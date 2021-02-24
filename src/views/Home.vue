<template>
  <div class="home">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
    <div class="container"></div>
    <TabBar></TabBar>
  </div>
</template>

<script>
//导入组件
import TabBar from "@/components/Tabbar";

export default {
  name: "Home",
  components:{
   TabBar
  }
}
</script>

<style scoped>
.home{
  height: 100%;
}

</style>
