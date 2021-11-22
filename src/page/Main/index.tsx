import React, { ReactChild, ReactElement } from 'react'
import Layout from '../../components/Layout'

interface Props {
    children: ReactChild
}

export default function Main({
    children
}: Props): ReactElement {
    return (
        <Layout>
            { children }
        </Layout>
    )
}
