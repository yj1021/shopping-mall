import React, { ReactElement } from 'react'
import StoreInfo from './compoents/StoreInfo'
import SubHeader from './compoents/Header'
import MainData from './compoents/MainData'
import Canvas from './compoents/Canvas'
import { TInfo } from '../../type'

interface Props {
    
}

const infoList: TInfo[] = [
    {
        info: '会员数',
        num: 10000
    },
    {
        info: '今日新增用户数',
        num: 2090
    },
    {
        info: '昨日新增用户数',
        num: 212
    }
]

const dataList: TInfo[] = [
    {
        info: '成交额',
        num: 3123
    },
    {
        info: '支付单数',
        num: 31
    },
    {
        info: '维权单数',
        num: 221
    },
    {
        info: '结算订单数',
        num: 32
    },
    {
        info: '失效订单佣金',
        num: 23
    },
    {
        info: '净收益',
        num: 123231
    },
    {
        info: '支付佣金',
        num: 321
    },
    {
        info: '失效订单成交额',
        num: 3123
    },
    {
        info: '结算佣金',
        num: 321
    },
    {
        info: '支出佣金',
        num: 4322
    },
]

export default function Home({}: Props): ReactElement {
    return (
        <div>
            <div className='mb20'>
                <SubHeader title='商城概况'/>
                <StoreInfo infoList={infoList}/>
            </div>
            <div className='mb20'>
                <SubHeader title='核心数据'/>
                <MainData dataList={dataList}/>
            </div>
            <div>
                <SubHeader title='浏览趋势图'/>
                <Canvas />
            </div>
        </div>
    )
}
