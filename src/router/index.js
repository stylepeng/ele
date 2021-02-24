import Vue from 'vue';
import VueRouter from "vue-router";
import Homes from "@/views/children/home/Homes";


Vue.use(VueRouter)


const routes=[
    {path:'',redirect:'/homes'},
    {path:'/cart',component: ()=>import("@/views/children/cart/Cart")},
    {path:'/category',component: ()=>import("@/views/children/category/Category")},
    {path: '/homes',component: Homes},
    {path:'/profile',component: ()=>import("@/views/children/profile/Profile")},
    {path: '/detail',component:()=>import("@/views/children/Detail/Detail")},
    {path: '/store',component:()=>import('@/views/children/store/Store')}
]
let router=new VueRouter({
    mode:'history',
    routes
})

export default router
