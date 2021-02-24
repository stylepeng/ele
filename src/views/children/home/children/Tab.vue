<template>
  <div class="tab" >
    <div  @click="currentIndex(index)" v-for="(item,index) in title" :key="index" class="tab-container">
      <span :class="{active:count===index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data(){
    return{
      count:0
    }
  },
  methods:{
    currentIndex(index){
      this.count=index;
      this.$emit('btnClick',index)
    },
  },
  props:{
    title:Array
  }
}
</script>

<style scoped>
.tab{
  background-color: white;
  display: flex;
  justify-content: space-between;
  outline: none;
  line-height: .6rem;
  height: .6rem;
}
.tab-container{
  flex: 1;
  text-align: center;

  font-size: .2rem;
}
.active{
  border-bottom:.03rem solid pink;
  color: pink;
}
</style>
