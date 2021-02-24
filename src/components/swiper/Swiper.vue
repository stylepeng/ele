<template>
  <div class="swiper">
    <div ref="swiper"
         class="swiper_container"
         @touchstart="touchstart($event)"
         @touchmove="touchmove($event)"
         @touchend="touchend"
    >
      <slot></slot>
    </div>
<!--    圆点-->
    <div v-if="showCircle" class="circle">
      <ul >
        <li v-for="(item,i) in children" :key="i" :style="i===index?{color:activeColor}:''"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data(){
    return{
      index:0,  //当前的索引
      width:'', //轮播图的宽度
      length:'',  //子组件的数量
      scroll:'', //储存定时器
      isScroll:false,  //监听当前的轮播图是否正在滚动
      start:'', //手指当前的为位置
      move:'',  //手指移动的距离
      children:'', //子组件的数据
      swiper:{},
    }
  },
  props:{
    showCircle:{
      default:false
    },
    activeColor:{
      default: 'pink',
      type:String
    }
  },
  created() {
    this.getComponent();
  },
  mounted() {

    this.getBannerWidth();
    //开启定时器
    this.openTimeout();
    //监听过渡动画结束事件
    this.$refs.swiper.addEventListener('transitionend',()=>{
      //判断index的值
      if(this.index===this.length){
        this.index=0;
        this.cancelTransition();
        this.setTranslate(-this.index*this.width);
      }else if(this.index===0){
        this.index=this.length;
        this.cancelTransition();
        this.setTranslate(-this.index*this.width);
      }
      this.isScroll=false;

    })

  },
  methods:{
    //获取dom元素
    getBannerWidth(){
      this.swiper=this.$refs.swiper.style;
      this.width=this.$refs.swiper.offsetWidth;
    },

    //获取子组件的数据
    getComponent(){
      this.children=this.$children;
    },

    //设置往X轴移动的距离
    setTranslate(position){
     this.swiper.transform=`translate(${position}px)`;
    },

    //设置过渡的属性
    setTransition(){
      this.swiper.transition='all .8s';
    },

    //取消过渡的属性
    cancelTransition(){
      this.swiper.transition='none';
    },
    //开启定时器
    openTimeout(){
      this.scroll=setInterval(this.setTimeout,2000);
    },

    //设置定时器
    setTimeout(){
      //获取子组件的数量
      if(!this.length){
        this.length=this.$children.length-1;
      }
      this.index++;
      this.isScroll=true;
      this.setTransition();
      this.setTranslate(-this.index*this.width)

    },

    //当前手指的位置
    touchstart(e){
      if(this.isScroll) return'';
      clearInterval(this.scroll);
      this.start=e.touches[0].clientX;
    },

    //手指移动的距离
    touchmove(e){
      this.move=e.touches[0].clientX-this.start;
      e.preventDefault();
      this.setTranslate(-this.index*this.width+this.move);
    },

    //手指移开触发的事件
    touchend(){
      let width=this.width/20;
      if(Math.abs(this.move)>width){
        if(this.move>0){
          this.index--;
        }else{
          this.index++;
        }
        this.setTransition();
        this.setTranslate(-this.index*this.width);
      }else{
        this.setTransition();
        this.setTranslate(-this.index*this.width);

      }
      //重启定时器
      this.openTimeout();
    },
  },
}
</script>

<style scoped>
.swiper_container{
  display: flex;

}
.swiper{
  position: relative;
}
.circle{

}
ul{
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: .2rem;
  left: 0;
  right: 0;
}
li{
  margin-right: .2rem;
}
</style>
