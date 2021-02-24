//防抖函数
export function debounce(fun,time,once){
    let timer=null;
    let self=this;
    let arg=arguments;
    return ()=>{
        if(!once){
            clearTimeout(timer)
        }else{
            fun();
            once=false;
        }
        timer=setTimeout(()=>{
            fun.apply(self,arg)
        },time)
    }
}
