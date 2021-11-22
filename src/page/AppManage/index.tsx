import React, { ReactChildren, ReactElement } from 'react'

interface Props {
    children: ReactChildren;
}

export default function AppManage({
    children
}: Props): ReactElement {
    return (
        <div>
            { children }
        </div>
    )
}
