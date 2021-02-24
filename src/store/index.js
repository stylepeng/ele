import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import getters from "@/store/getters"
import actions from "@/store/actions";
import moduleA from "@/store/module/moduleA";
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)
let state={
  goodsList:[], //储存加入购物车的商品
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    moduleA
  },
  plugins:[persistedstate()]
})
