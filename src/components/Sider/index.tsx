import React, { ReactElement, useState, useMemo, useEffect } from 'react'
import { bussinessList, TRouter, getSystemRouterList } from '../../router/router'
import { Menu, Button } from 'antd';
import { useHistory, useLocation } from 'react-router-dom'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons'
import './index.less'

interface Props {
    
}

const { SubMenu } = Menu;

export default function SiderComp({}: Props): ReactElement {

    const history = useHistory()
    const location = useLocation()
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const menuClick = (path: string): void => {
        if(location.pathname === path) return
        localStorage.currentRouter = path
        history.push(path)
    }

    const defaultOpenKeys: string[] = useMemo(() => {
        let result: string[] = []
        let pathList = location.pathname.substring(1).split('/')
        pathList.reduce((pre: string[], next: string, index: number) => {
            pre.push(next)
            if(pre.length >= 2) {
                result.push(`/${pre.join('/')}`)
            }
            return pre
        }, [])
        return result
    }, [location.pathname])

    const defaultSelectedKey: string[] = useMemo(() => {
        let currentRouter: string = localStorage.currentRouter || location.pathname
        return [currentRouter]
    }, [])

    useEffect(() => {
        return () => {
            localStorage.currentRouter = ''
        }
    },[])

    const renderMenu = (list: TRouter[]) => {
        let newList = list.filter(item => item.meta?.isRender)
        return newList.map((item: TRouter) => {
            let { children, path, redirect, Icon, meta } = item
            if(children && children.length) {
                return (
                    <SubMenu key={path} icon={<Icon />} title={ meta.title }>
                        { renderMenu(children) }
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={path} icon={Icon ? <Icon /> : null} onClick={() => {menuClick(path)}}>
                        { meta.title }
                    </Menu.Item>
                )
            }
        })
    }
    
    return (
        <>
            <Button type="primary" onClick={() => setCollapsed((status: boolean) => !status)} className='collapsed_btn'>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={defaultSelectedKey}
                defaultOpenKeys={defaultOpenKeys}
                mode="inline"
                inlineCollapsed={collapsed}
            >
                { renderMenu(bussinessList) }
            </Menu>
        </>
    )
}
