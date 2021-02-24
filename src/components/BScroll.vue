<template>
  <div ref="scroll"  class="BScroll" >
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "BScroll",
  data(){
    return{
      scroll:null,
      load:null,
    }
  },
  props:{
    isLoad: Boolean,
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    pullDownRefresh:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    this.initScroll()
  },
  methods:{
    //初始化scroll
    initScroll(){
      this.scroll=new BScroll(this.$refs.scroll,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        pullDownRefresh:this.pullDownRefresh
      })
      console.log(this.scroll);
      //获取滚动的实时位置
      if(typeof this.probeType==='number'){
        this.scroll.on('scroll',position=>{
          this.$emit('scroll',position);
        })
      }

      //上拉加载事件
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp');
          this.scroll.finishPullUp();
        })
      }

      //下拉刷新
      if(this.pullDownRefresh){
        this.scroll.on('pullingDown',()=>{
          this.$emit('pullingDown');
          this.scroll.finishPullDown();
        })
      }
    },

    //设置跳转的位置
    postPosition(x,y,time){
      this.scroll.scrollTo(x,y,time);
    },

    //跳转到某一个元素的位置
    jumpElement(position){
      this.scroll.scrollToElement(position);
    },

    //重新计算scroll高度
    refresh(){
      this.scroll.refresh();
    }
  }
}
</script>

<style scoped>
.BScroll{
  height: 100%;
  overflow: hidden;
}
</style>
