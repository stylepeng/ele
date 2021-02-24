export default {
    //增加购物车商品
    addToCart(state,cartGoods){
        state.goodsList.push(cartGoods);
    },

    //增加商品的数量
    addCount(state,good){
        good.count+=1;
    },

    //修改商品选中的状态
    checkedState(state, index) {
        state.goodsList[index].checked=! state.goodsList[index].checked;
    },

    //修改全部商品选中的状态
    allChecked(state){
        state.goodsList.forEach(item=>item.checked=false);
    },

    //全部商品没选中
    noChecked(state) {
        state.goodsList.forEach(item=>item.checked=true);
    }
}
