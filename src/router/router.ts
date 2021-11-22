import { lazy } from 'react'
import {
    HomeOutlined,
    QrcodeOutlined,
    InboxOutlined,
    InsertRowRightOutlined
} from '@ant-design/icons'

export interface TRouter {
    path: string;
    component?: any;
    Icon?: any;
    meta?: any;
    redirect?: string;
    children?: TRouter[];
}

//routerList
export const bussinessList: TRouter[] = [
    {
        path: '/main/home',
        component: lazy(() => import('../page/Home')),
        Icon: HomeOutlined,
        meta: {
            title: '首页',
            isRender: true
        }
    },
    {
        path: '/main/appManage',
        component: lazy(() => import('../page/AppManage')),
        Icon: QrcodeOutlined,
        meta: {
            title: 'APP管理',
            isRender: true
        },
        children: [
            {
                path: '/main/appManage/storeRenovation',
                component: lazy(() => import('../page/AppManage/StoreRenovation')),
                Icon: InboxOutlined,
                meta: {
                    title: '店铺装修',
                    isRender: true
                },
            },
            {
                path: '/main/appManage/storeSetting',
                component: lazy(() => import('../page/AppManage/StoreSetting')),
                Icon: InsertRowRightOutlined,
                meta: {
                    title: '店铺设置',
                    isRender: true
                }
            },
            {
                path: '/main/appManage/storeRenovation/:storeType',
                component: lazy(() => import('../page/AppManage/CreateStore')),
                meta: {
                    title: '店铺设置',
                    isRender: false
                }
            },
            {
                path: '/main/appManage',
                redirect: '/main/appManage/storeRenovation'
            }
        ]
    },
    {
        path: '/main',
        redirect: '/main/home'
    }
]

export const routerList: TRouter[] = [
    {
        path: '/login',
        component: lazy(() => import('../page/Login')),
        meta: {
            title: '登陆'
        }
    },
    {
        path: '/main',
        component: lazy(() => import('../page/Main')),
        meta: {
            title: '主要内容'
        },
        children: bussinessList
    }
]



const flattenRoute = (bussinessList: TRouter[]) => {
    let routerList: TRouter[] = []
    bussinessList.map(item => {
        if(item.children && item.children.length) {
            routerList.push(...flattenRoute(item.children))
        }else{
            if (item.meta?.isRender === false) routerList.push(item)
        }
    })
    return routerList
}

export const getSystemRouterList = () :TRouter[] => {
    const systemRouterList: TRouter[] = []
    flattenRoute(bussinessList)
    return flattenRoute(bussinessList)
}