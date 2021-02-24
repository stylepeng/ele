<template>
  <div class="shop-params">
    <table>
      <tr>
        <td colspan="2">{{params.key}}</td>
      </tr>
      <tr v-for="(item,index) in params.product" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
      <tr>
        <td>{{params.rule}}</td>
        <td>{{params.des}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ShopParams",
  props:{
    params:{}
  }
}
</script>

<style scoped>
tr:nth-child(1){
  text-align: center;
}
table,tr,td{
  border: .02rem solid silver;
}
table{
  margin-bottom: .2rem;
}
tr td:nth-child(1){
  width: 1rem;
  text-align: center;
}
tr td:nth-child(2){
  color: pink;
}
</style>
