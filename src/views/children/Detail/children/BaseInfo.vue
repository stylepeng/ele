<template>
  <div class="base-info" v-if="Object.keys(goods).length!==0" >
    <div class="title" >{{goods.title}}</div>
    <div class="price">
      <span :style="{color:goods.color}">￥{{goods.price}}</span>
      <span>{{goods.oldPrice}}</span>
      <span :style="{background:goods.color}">{{goods.desc}}</span>
    </div>
    <div class="other">
      <span>{{goods.column[0]}}</span>
      <span>{{goods.column[1]}}</span>
      <span>{{goods.service[goods.service.length-1].name}}</span>
    </div>
    <div class="service">
      <span v-for="(item,index) in goods.service.length-1" :key="index">
        <img :src="goods.service[item-1].icon" >
        <span>{{goods.service[item-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
  props:{
    goods:{}
  },
  mounted() {
  }
}
</script>

<style scoped>
div{
  margin-bottom: .3rem;
}

.title{
  text-indent:2em;
  font-size: .3rem;
}
.price span{
  margin-right: .05rem;
}
.price span:nth-child(1){
  font-size: .3rem;
}
.price span:nth-child(2){
  text-decoration: line-through;
  color: silver;
}
.price span:nth-child(3){
  color: white;
  border-radius: .5rem;
}
.service,.other{
  font-size: .2rem;
  display: flex;
  justify-content: space-between;
}
.service{
  margin-top: .4rem;
}
.other{
  color: silver;
}
img{
  width: .2rem;
  height: .2rem;
}
</style>
