<template>
  <div class="comment-info" v-if="Object.keys(comment).length!==0">
    <div class="header-info">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="user-info">
        <div class="head-sculpture">
          <img :src="comment.user.avatar" alt="">
        </div>
       <div>{{comment.user.uname}}</div>
    </div>
    <div class="comment">{{comment.content}}</div>
    <div class="comment-date">
      <span>{{comment.created | show}}</span>
      <span>{{comment.style}}</span>
    </div>
    <div class="comment-img" v-if="comment.images">
      <img :src="item" alt=""  v-for="(item,index) in comment.images" :key="index">
    </div>
    <div class="store-answer" v-if="comment.explain">{{comment.explain}}</div>
  </div>
</template>

<script>
import {formatDate} from "@/components/common/formatDate";

export default {
  name: "CommentInfo",
  props:{
    comment:{}
  },
  filters:{
    show(value){
      const date=new Date(value*1000);
      return formatDate(date,"yyyy-MM-dd hh:mm:ss")
    }
  },
}
</script>

<style scoped>
div{
  margin-bottom: .1rem;
}
.header-info{
  display: flex;
  justify-content: space-between;
}
.user-info{
  display: flex;
  line-height: .8rem;
}
.head-sculpture img{
  width: .8rem;
  height: .8rem;
}
.head-sculpture{
  margin-right: .2rem;
}
.comment-img img{
  width: 2rem;
  height: 2rem;
}
.comment-date{
  color: silver;
}
</style>
