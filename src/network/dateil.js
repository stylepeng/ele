import {request} from "@/network/request";

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

//baseInfo组件的数据
export function Goods(itemInfo,columns,service){
        this.title=itemInfo.title;
        this.price=itemInfo.lowNowPrice;
        this.oldPrice=itemInfo.oldPrice;
        this.desc=itemInfo.discountDesc;
        this.color=itemInfo.discountBgColor;
        this.column=columns;
        this.service=service;
}

//store组件的数据
export  function Store(shopInfo){
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods
}

//detailInfo组件的数据
export function Info(detailInfo){
    this.desc=detailInfo.desc;
    this.key=detailInfo.detailImage[0].key;
    this.list=detailInfo.detailImage[0].list;
}

//获取shopParams组件的数据
export function Params(info,rule){
    this.key=info.key;
    this.product=info.set;
    this.rule=rule.key;
    this.des=rule.disclaimer;
}

