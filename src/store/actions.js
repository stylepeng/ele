export default {
    //向购物车添加商品
    addToCart(context,cartGoods) {
        let good = context.state.goodsList.find(item => {
            return item.id === cartGoods.id;
        })
        if (!good) {
            context.commit('addToCart', cartGoods)
        } else {
            context.commit('addCount', good)
        }
    },
    //修改商品选中的状态
    checkedState(context,item){
        let index=context.state.goodsList.indexOf(item);
        context.commit('checkedState',index);
    },

    //修改全部商品的选中的状态/
    allChecked(context) {
        context.commit('allChecked')
    },

    //修改全部商品没选中
    noChecked(context){
        context.commit('noChecked')
    }
}

