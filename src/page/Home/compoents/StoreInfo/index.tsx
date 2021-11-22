import React, { ReactElement } from 'react'
import CountUp from '../../../../components/CountUp'
import './index.less'

interface infoItem {
    info: string;
    num: number;
}

interface Props {
    infoList: infoItem[]
}

export default function StoreInfo({
    infoList
}: Props): ReactElement {
    return (
        <div className='store_info'>
            <div className='content'>
                { 
                    infoList.map(item => {
                        let { info, num } = item
                        return (
                            <div className='item' key={info}>
                                <div>{ info }</div>
                                <div className='num'>
                                    <CountUp end={ num }/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
