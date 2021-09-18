import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMode } from '../lib/ModeContext'
import { useTheme } from '../lib/ThemeContext'

const SignIn = () => {

  const history = useHistory()
  const mode = useMode()
  const theme = useTheme()

  const signIn = () => {
    history.push('/app')
  }

  return (
    <div>
      <h2>SignIn (public)</h2>
      <h2>Mode {JSON.stringify(mode.mode)}</h2>
      <h2>Theme {JSON.stringify(theme.theme)}</h2>
      <button onClick={signIn}>SignIn</button>
    </div>
  )
}
export default SignIn
