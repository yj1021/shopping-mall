import React, { ReactElement } from 'react'
import './index.less'

interface Props {
    menuList: any;
}

export default function LeftMenu({
    menuList
}: Props): ReactElement {
    return (
        <div className='left_menu'>
            {
                menuList.map((item: any) => {
                    return (
                        <div className='item' key={item.src}>
                            <img src={ item.src } />
                        </div>
                    )
                })
            }
        </div>
    )
}
