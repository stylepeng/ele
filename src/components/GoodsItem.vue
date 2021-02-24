<template>
  <div class="goods-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "GoodsItem"
}
</script>

<style scoped>
.goods-item,img{
  width: 3.5rem;
  text-align: center;
}

</style>
