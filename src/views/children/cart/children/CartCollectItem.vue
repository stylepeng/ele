<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "CartCollectItem"
}
</script>

<style scoped>
.item{
  display: flex;
  justify-content: space-between;
}
img{
  width: 1rem;
}
</style>
