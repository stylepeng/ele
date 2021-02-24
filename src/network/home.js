import {request} from "@/network/request";

//获取轮播图
export function getBanner(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGood(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
