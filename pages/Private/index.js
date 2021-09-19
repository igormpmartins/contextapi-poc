import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { useAuth } from '../../lib/AuthContext'
import Clients from './Clients'
import Dashboard from './Dashboard'

const Private = () => {
  let { path, url } = useRouteMatch()

  const auth = useAuth()

  if (!auth.isAuthing && !auth.isSignedIn) {
    return (
      <p>O usuário não pode acessar <Link to='/'>SignIn</Link></p>
    )
  }

  return (
    <div>
      <h1>Private {url}</h1>
      <p>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/app">Dashboard</Link>
        {' | '}
        <Link to="/app/clients">Clients</Link>
        {' | '}
        <button onClick={auth.signOut}>SignOut</button>
      </p>
      <Switch>
        <Route path={`${path}`} exact component={Dashboard} />
        <Route path={`${path}/clients`} component={Clients} />
      </Switch>
    </div>
  )
}
export default Private
