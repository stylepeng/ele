<!---->
<template>
  <div class="good">
    <div v-for="(item,index) in good" :key="index" class="container" @click="itemClick(item.iid)">
      <img :src="item.showLarge.img" alt="" @load="imageLoad">
      <div>
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Good",
  props:{
    good:Array
  },
  methods:{
     imageLoad(){
       this.$bus.$emit('imageLoad')
     },
    itemClick(id){
      this.$router.push({
        path:"/detail",
        query:{
          iid:id
        }
      })
    }
  }
}
</script>

<style scoped>
.good{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.container,img{
  width: 3.5rem;
  text-align: center;
}

</style>
