import axios from "axios";
import {Indicator} from 'mint-ui'
export function request(config){
    let instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5'
    })
    //拦截器
    instance.interceptors.request.use(config=>{
        Indicator.open({
            text:'加载中',
            spinnerType:'fading-circle'
        });
        return config;
    })
    instance.interceptors.response.use(req=>{
        Indicator.close();
        return req;
    },error => {
        Indicator.close();
        return Promise(error)
    })
    return instance(config)
}
