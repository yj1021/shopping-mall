import React, { ReactElement } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

interface Props {
    
}

export default function StoreRenovation({}: Props): ReactElement {

    const history = useHistory()

    const createStore = () => {
        history.push('/main/appManage/storeRenovation/newApp')
    }

    return (
        <div>
            <Button type='primary' icon={<PlusOutlined />} onClick={createStore}>新建模板</Button>
        </div>
    )
}
