import React, { ReactElement, Suspense } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { routerList, TRouter } from '../router/router'
import { Spin } from 'antd'

interface Props {
    
}

export default function Router({}: Props): ReactElement {

    const renderRouter = (list: TRouter[]) => {
        return (
            <Switch>
                { list.map((route: TRouter) => {
                    const { path, component, children, redirect } = route
                    const Component = component
                    if(children && children.length) {
                        return <Route path={path} key={path} render={props => (
                                    <Component {...props}>
                                        { renderRouter(children) }
                                    </Component>
                                )}/>
                    }else {
                        return redirect ? <Redirect to={redirect} key={path + 'redirect'}/> : <Route path={path} exact component={component} key={path}/>
                    }
                })}
            </Switch>
        )
    }

    return (
        <BrowserRouter>
            <Suspense fallback={<Spin />}>
                { renderRouter(routerList) }
            </Suspense>
        </BrowserRouter>
    )
}
