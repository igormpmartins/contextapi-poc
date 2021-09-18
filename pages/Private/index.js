import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import Clients from './Clients'
import Dashboard from './Dashboard'

const Private = () => {
  let { path, url } = useRouteMatch()
  return (
    <div>
      <h1>Private {url}</h1>
      <p>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/app">Dashboard</Link>
        {' | '}
        <Link to="/app/clients">Clients</Link>
      </p>
      <Switch>
        <Route path={`${path}`} exact component={Dashboard} />
        <Route path={`${path}/clients`} component={Clients} />
      </Switch>
    </div>
  )
}
export default Private
