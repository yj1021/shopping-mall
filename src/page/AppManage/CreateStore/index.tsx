import React, { ReactElement, useState } from 'react'
import { Input, Space, Radio } from 'antd'
import LeftMenu from './components/LeftMenu'
import Container from './components/Container'
import Setting from './components/Setting'
import _ from 'lodash'
import './index.less'

interface TMock {
    name: string;
    src: string;
}

interface Props {
    
}

const mockList: TMock[] = [
    {
        name: '头部',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/left1.7ba48d9.png',
    },
    {
        name: '焦点图',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/left2.a741dbb.png',
    },
    {
        name: '热销产品',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/left4.e05a292.png',
    },
    {
        name: '多眼导航',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/left5.3495596.png',
    },
    {
        name: '拼图',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/left6.7f163a6.png'
    },
    {
        name: '商品板块',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/left7.5742d95.png',
    },
    {
        name: '滚动展示',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/left8.ac601d1.png',
    },
    {
        name: '悬浮弹窗',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/left9.2f27252.png',
    },
    {
        name: '分类',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/classify_nav.1598927.png',
    },
    {
        name: '活动轮播',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/active_carousel.e052f43.png',
    },
    {
        name: '个人信息',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/account.b29f29b.png',
    },
    {
        name: '订单',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/order.56665d1.png',
    },
    {
        name: '工具箱',
        src: 'http://sdkadmin.ujuec.com/interface/static/img/tools.afeb80d.png',
    }
]

export default function CreateStore({}: Props): ReactElement {

    const [type, setType] = useState<number>(1)
    const [menuList, setMenuList] = useState<TMock[]>(mockList)

    const onChange = (e: any) => {
        let val = e.target.value
        let newList = _.cloneDeep(mockList)
        setType(val)
        switch (val) {
            case 1:
                setMenuList(mockList)
                break;
            case 2:
                setMenuList(newList.slice(2, 6))
                break;
            case 3:
                setMenuList(newList.slice(2, 8))
                break;
            default:
                break;
        }
    }

    return (
        <div className='create_store'>
            <Space direction='vertical' className='mb20'>
                <Space>模板名称: <Input /></Space>
                <Space>模板类型: 
                    <Radio.Group onChange={onChange} value={type}>
                        <Radio value={1}>首页</Radio>
                        <Radio value={2}>自定义页</Radio>
                        <Radio value={3}>个人中心</Radio>
                    </Radio.Group>
                </Space>
            </Space>
            <div className='content'>
                <LeftMenu menuList={menuList}/>
                <Container />
                <Setting />
            </div>
        </div>
    )
}
