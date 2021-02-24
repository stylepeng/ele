<template>
   <div id="app">
     <Home/>
   </div>
</template>
<script>
import Home from "@/views/Home";
export default ({
  name:'App',
  components:{
    Home
  },
  mounted() {
    this.getWindowWidth();
    window.addEventListener('resize',this.getWindowWidth)
  },
  methods:{
    //获取浏览器的宽度,动态设置html和body元素的宽度
    getWindowWidth(){
      let width=document.documentElement.clientWidth||document.body.clientWidth;
      let html=document.getElementsByTagName('html')[0];
      let body=document.getElementsByTagName('body')[0];
      body.style.fontSize=width/750*16+"px";
      html.style.fontSize=width/7.5+"px";
    }
  },
})
</script>

<style>
@import "assets/css/baseCss.css";
</style>
