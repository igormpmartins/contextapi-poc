import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

const SignIn = () => {

  const history = useHistory()
  const auth = useAuth()

  const signIn = () => {
    auth.signIn('user')
    history.push('/app')
  }

  if (!auth.isAuthing && auth.isSignedIn) {
    return <Redirect to='/app' />
  }

  return (
    <div>
      <h2>SignIn (public)</h2>
      <h2>Auth {JSON.stringify(auth.isSignedIn)}</h2>
      <button onClick={signIn}>SignIn</button>
    </div>
  )
}
export default SignIn
