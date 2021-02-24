<template>
  <div class="detail-nav">
    <Nav background="white">
      <template #left>
        <span class="container_left" @click="$router.go(-1)"> < </span>
      </template>

      <template #center>
        <div class="container_center">
          <span v-for="(item,index) in title" :key="index" @click="itemClick(index)" :style="count===index?{color:'pink'}:''">
            {{item}}
          </span>
        </div>
      </template>
    </Nav>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "DetailNav",
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      count:0,
    }
  },
  props:{
    index:Number
  },
  components:{
    Nav
  },
  watch:{
    index(){
      this.count=this.index;
    }
  },
  methods:{
    //点击改变字体颜色
    itemClick(index){
      this.count=index;
      this.$emit('btnClick',index)
    },
  },
}
</script>

<style scoped>
.container_left{
  font-size: .5rem;
  text-align: center;
  margin-left: .5rem;
}
.container_center{
  display: flex;
  justify-content: space-around;

}
</style>
