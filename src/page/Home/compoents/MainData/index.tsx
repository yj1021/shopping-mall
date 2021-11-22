import React, { ReactElement } from 'react'
import { TInfo } from '../../../../type'
import CountUp from '../../../../components/CountUp'
import './index.less'

interface Props {
    dataList: TInfo[];
}

export default function MainData({
    dataList
}: Props): ReactElement {
    return (
        <div className='main_data'>
            {
                dataList.map(item => {
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
    )
}
