import React, { ReactChild, ReactElement } from 'react'
import { Layout } from 'antd'
import Headers from '../Header'
import SiderComp from '../Sider'
import './index.less'

const { Header, Footer, Sider, Content } = Layout;

interface Props {
    children: ReactChild
}

export default function LayoutComp({
    children
}: Props): ReactElement {
    return (
        <Layout className='layout_warpper'>
            <Header>
                <Headers />
            </Header>
                <Layout className='layout_main'>
                    <Sider>
                        <SiderComp />
                    </Sider>
                    <Content>
                        <div className='layout_content'>
                            { children }
                        </div>
                    </Content>
                </Layout>
        </Layout>
    )
}
