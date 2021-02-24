//节流函数
export function throttle(fun,time){
    let lastTime=0;
    let nowTime=Date.now();
    return ()=>{
        if(nowTime-lastTime>time){
            fun.call(this);
            lastTime=nowTime;
        }
    }

}
