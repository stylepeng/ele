<template>
  <div class="detail">
    <DetailNav :index="index" @btnClick="jump"/>
    <BScroll class="BScroll" @scroll="currentPosition" :probe-type="3" ref="scroll">
      <DetailSwiper :banner="banner" @load="loadChange"/>
      <div class="baseInfo">
        <BaseInfo :goods="goods" />
        <StoreInfo :store="store"/>
        <DetailInfo :detail-info="detailInfo" @load="again"/>
        <ShopParams :params="params" ref="params"/>
        <CommentInfo :comment="comment" ref="comment"/>
      </div>
      <DetailRecommend :recommend="recommend" ref="recommend"/>
    </BScroll>
    <BackTop :position="position" @click.native="backTop"/>
    <DetailTabBar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNav from "@/views/children/Detail/children/DetailNav"
import DetailSwiper from "@/views/children/Detail/children/DetailSwiper"
import BaseInfo from "@/views/children/Detail/children/BaseInfo"
import BScroll from "@/components/BScroll"
import StoreInfo from "@/views/children/Detail/children/StoreInfo";
import DetailInfo from "@/views/children/Detail/children/DetailInfo";
import ShopParams from "@/views/children/Detail/children/ShopParams";
import DetailRecommend from "@/views/children/Detail/children/DetailRecommend";
import BackTop from "@/components/BackTop";
import CommentInfo from "@/views/children/Detail/children/CommentInfo";
import DetailTabBar from "@/views/children/Detail/children/DetailTabBar";

import {getDetail,Goods,Store,Info,Params,getRecommend} from "@/network/dateil"

export default {
  name: "Detail",
  data(){
    return{
      index:0,  //记录顶部导航的情况
      id:null,  //储存商品的id
      banner:[],  //储存轮播图的数据
      goods:{},  //储存baseInfo组件的数据
      store:{}, //储存store组件的数据
      detailInfo:[],  //储存detailInfo组件的数据
      params:{},  //储存shopParams组件的数据
      recommend:{}, //recommend组件的数据
      position:false, //保存backTop是否显示
      themeOffSet:[], //保存到各组件的距离
      comment:{}, //储存commentInfo组件的数据
    }
  },
  components:{
    DetailNav,
    DetailSwiper,
    BaseInfo,
    BScroll,
    StoreInfo,
    DetailInfo,
    ShopParams,
    DetailRecommend,
    BackTop,
    CommentInfo,
    DetailTabBar,
  },
  created() {
    this.getGoodsId();
    this.getDetail();
    this.getRecommend();
  },
  methods:{
    //获取商品的ID
    getGoodsId(){
      this.id=this.$route.query.iid;
    },

    //获取当前滚动的位置
    currentPosition(position){
      //判断当前的位置，动态决定backTop组件是否显示
      if(-position.y>1000){
        this.position=true;
      }else{
        this.position=false
      }
    //   //动态决定topNav组件选中的索引
      for(let i in this.themeOffSet){
        i=parseInt(i);
        if((this.index!==i)&&((this.themeOffSet[i]<-position.y&&this.themeOffSet[i+1]>-position.y)||(i===this.themeOffSet.length-1&&this.themeOffSet[i]<-position.y))){
          this.index=i;
        }

      }
    },

    //重新计算滚动的范围
    again(){
      this.$refs.scroll.refresh();
    },

    //返回页面的顶部
    backTop(){
      this.$refs.scroll.postPosition(0,0,500)
    },

    //子组件轮播加载完执行命令
    loadChange(){
      //获取距离顶部的距离
      this.themeOffSet=[];
      this.$nextTick(()=>{
        this.themeOffSet.push(0);
        this.themeOffSet.push(this.$refs.params.$el.offsetTop-30);
        this.themeOffSet.push(this.$refs.comment.$el.offsetTop-30);
        this.themeOffSet.push(this.$refs.recommend.$el.offsetTop-30);
      })
    },

    //跳转到指定的位置
    jump(index){
      this.$refs.scroll.postPosition(0,-this.themeOffSet[index],500);
    },

    //添加商品到购物车
    addToCart(index){
      let cartGoods={};
      cartGoods.image=this.banner[0]
      cartGoods.title=this.goods.title;
      cartGoods.id=this.id;
      cartGoods.count=index;
      cartGoods.price=this.goods.price;
      cartGoods.checked=true;
      this.$store.dispatch('addToCart',cartGoods);
    },
  /*
  网络请求
   */
    getDetail(){
      getDetail(this.id).then(res=>{
        //获取轮播图的数据
        this.banner=res.data.result.itemInfo.topImages;
        let date=res.data.result;
        console.log(date);
        //获取baseInfo组件的数据
        this.goods=new Goods(date.itemInfo,date.columns,date.shopInfo.services);

        //获取storeInfo组件的数据
        this.store=new Store(date.shopInfo);

        //获取detailInfo组件的数据
        this.detailInfo=new Info(date.detailInfo);

        //获取shopParams组件的数据
        this.params=new Params(date.itemParams.info,date.itemParams.rule);

        //获取commentInfo组件的数据
        if(date.rate.cRate!==0){
          this.comment=date.rate.list[0];
        }
      })
    },

    //请求推荐数据
    getRecommend(){
      getRecommend().then(res=>{
        this.recommend=res.data.data.list;
      })
    }
  },
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 999;
  background:white;
  height: 100%;
}
.BScroll{
  height: calc(100% - 1.6rem);
}
.baseInfo{
  margin: 0 .4rem;
}
</style>
