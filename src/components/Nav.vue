<template>
  <div class="nav" :style="{background:background}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "Nav",
  props:{
  background: {
    default:'pink'
  }
  }
}
</script>

<style scoped>
.nav{
  width: 7.5rem;
  height: .6rem;
  line-height: .6rem;
  display: flex;
  border: none;
  outline: none;
}
.left,.right{
  width: 1.5rem;
}
.center{
  flex: 1;
  text-align: center;
}
</style>
