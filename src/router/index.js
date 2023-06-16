import { createWebHistory, createRouter, } from "vue-router";
import store from "../store";
import { Message } from "@arco-design/web-vue";
const defaultRoutes  = [
    {
        path: '/',
        name:'Login',
        component: ()=>import('../components/Login.vue'),
        meta: {
            auth : false
        }
    },
    {
        path: '/home',
        name:'Home',
        component: ()=>import('../components/Home.vue'),
        meta: {
            auth : true
        }
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     meta: { title: '404' },
    //     component: () => import('@/views/common/NotFound.vue')
    //   },
    
]


const router = createRouter({
    
    history: createWebHistory(), //import.meta.BASE_URL
    routes: defaultRoutes
})

router.beforeEach((to,from,next)=>{

    if(to.meta.auth === true){
        if(store.getters.getAuth==false){
            Message.error('You need to Log In !!')
            next('/')
        }
    }
    next()
})

export default router;