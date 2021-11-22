import React, { ReactElement } from 'react'
import './index.less'

interface Props {
    title: string;
}

// export default function SubHeader({
//     title
// }: Props): FC {
    
// }

export default ({
    title
}: Props): ReactElement => {
    return (
        <div className='common_subTitle'>
            {title}
        </div>
    )
}