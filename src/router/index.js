import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/layout/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import('@/views/mine/index.vue'),
                meta: {
                    title: '我的'
                }
            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/revise',
        name: 'revise',
        component: () => import('@/views/mine/revise.vue'),
        meta: {
            title: '修改信息'
        }
    },
    {
        path: '/merchantlist',
        name: 'merchantlist',
        component: () => import('@/views/merchant/list.vue'),
        meta: {
            title: '商家列表'
        }
    },
    {
        path: '/merchantinfo',
        name: 'merchantInfo',
        component: () => import('@/views/merchant/info.vue'),
        meta: {
            title: '商家详情'
        }
    },
    {
        path: '/merchantorder',
        name: 'merchantorder',
        component: () => import('@/views/merchant/order.vue'),
        meta: {
            title: '确认订单'
        }
    },
    {
        path: '/success',
        name: 'orderSuccess',
        component: () => import('@/views/merchant/success.vue'),
        meta: {
            title: '下单成功'
        }
    },
    {
        path: '/myorder',
        name: 'myorder',
        component: () => import('@/views/mine/order.vue'),
        meta: {
            title: '我的订单'
        }
    },
    {
        path: '/orderinfo',
        name: 'orderinfo',
        component: () => import('@/views/mine/orderInfo.vue'),
        meta: {
            title: '订单详情'
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
// 全局后置钩子设置标题
router.afterEach((to, from) => {
    document.title = to.meta.title || '默认标题'
    console.log('aftereach')
})
export default router