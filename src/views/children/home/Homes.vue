<template>
  <div class="homes">
    <Nav>
      <template #center>
        <p>购物街</p>
      </template>
    </Nav>
    <Tab v-show="isShowTab" :title="['流行','新款','精选']" @btnClick="btnClick"  class="btnTable" ref="tab1"/>
    <BScroll
        class="container"
        @scroll="getPosition"
        ref="scrolls"
        :probe-type="3"
        :pull-up-load="true"
        @pullingUp="loadMore"
    >

        <HomeSwiper @load="swiperLoad" :banner="banner"/>
        <Recommend/>
        <Popular />
        <Tab :title="['流行','新款','精选']" @btnClick="btnClick" ref="tab2"/>
        <Good :good="showGood"/>
    </BScroll>

    <BackTop :position="position" @click.native="backTop"/>
  </div>
</template>

<script>
//导入组件
import Nav from "@/components/Nav";
import HomeSwiper from "@/views/children/home/children/HomeSwiper";
import Recommend from "@/views/children/home/children/Recommend";
import Tab from "@/views/children/home/children/Tab";
import Good from "@/components/Good";
import BScroll from "@/components/BScroll";
import BackTop from "@/components/BackTop";
import Popular from "@/views/children/home/children/Popular";

//网络请求
import {getHomeGood,getBanner} from "@/network/home";


export default {
  name: "Home",
  data(){
   return{
     goods:{
       pop:{page:0,list:[]},
       new:{page:0,list:[]},
       sell:{page:0,list:[]},
     },
     current:'pop',
     isLoad:false,
     scroll:null,
     position:null,
     offsetTop:0,
     isShowTab:false,
     banner:[],
   }
  },
  computed:{
    showGood(){
      return this.goods[this.current].list
    }
  },
  components:{
    Nav,
    HomeSwiper,
    Recommend,
    Tab,
    Good,
    BScroll,
    BackTop,
    Popular,

  },
  mounted() {
    this.$bus.$on('imageLoad',()=>{
      this.$refs.scrolls.refresh();
    })
  },
  created() {
    this.good('pop');
    this.good('new');
    this.good('sell');
    this.bannerDate();

  },
  methods:{
    /*
    *事件监听的方法
    * */
    btnClick(index){
      switch (index){
        case 0:
          this.current='pop';
          console.log(this.$refs.tab1.count)
          break;
        case 1:
          this.current='new';
          break;
        case 2:
          this.current='sell';
          break;
      }
      this.$refs.tab1.count=index;
      this.$refs.tab2.count=index;

    },
    //点击跳转到顶部
    backTop(){
      this.$refs.scrolls.postPosition(0,0,1000);
    },
    //获取滚动的位置
    getPosition(position){
        this.position=(-position.y)>1000;
      if(this.offsetTop<(-position.y)){
          this.isShowTab=true;
        }else{
          this.isShowTab=false;
        }
    },
    //加载更多数据
    loadMore(){
      this.good(this.current);
    },
    //轮播图加载完毕,获取offsetTop
    swiperLoad(){
      //获取bar离顶部的距离
      this.offsetTop=this.$refs.tab2.$el.offsetTop;
      let height=document.getElementsByTagName('html')[0].style.fontSize;
      height=parseInt(height)*1.2
      this.offsetTop+=height;
    },
    /*
    * 网络请求
    * */
    good(type){
      let page=this.goods[type].page+1;
      getHomeGood(type,page).then(res=>{
        let list=res.data.data.list
        this.goods[type].list.push(...list);
      this.goods[type].page+=1;
      }).catch(err=>{
        console.log(err);
      })
    },
    //轮播图数据的申请
    bannerDate(){
      getBanner().then(res=>{
        this.banner=res.data.data.banner.list;
      }).catch(err=>{
        console.log(err);
      })
    },
  },

}
</script>

<style scoped>
.homes{
  height: 100%;
}
.container{
  height:calc(100% - 1.2rem);
}
.btnTable{
  position:fixed;
  top: .6rem;
  right: 0;
  left: 0;
  z-index: 1;
}
</style>
