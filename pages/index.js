import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Private from './Private'
import SignIn from './SignIn'

import { ModeContext, ModeProvider, useMode } from '../lib/ModeContext'
import { ThemeProvider, useTheme } from '../lib/ThemeContext'
import { AuthProvider } from '../lib/AuthContext'

/*
const MyComp = () => {
  const treku = useMode()
  return <h2>MyComp - {JSON.stringify(treku)}</h2>
}
*/

const ModeSwitcher = () => {
  const mode = useMode()

  const darkMode = () => {
    mode.setMode('dark')
  }

  const lightMode = () => {
    mode.setMode('light')
  }

  return (
    <p>
      <button onClick={darkMode}>Dark</button>
      <button onClick={lightMode}>Light</button>
    </p>
  )
}

const ThemeSwitcher = () => {
  const theme = useTheme()

  //quase um currying / factory / wrapper
  const switchTheme = selTheme => () => {
    theme.setTheme(selTheme)
  }

  return (
    <p>
      {theme.themes.map(t => {
        return <button key={t[0]} onClick={switchTheme(t[0])}>{t[1]}</button>
      })}
    </p>
  )

}

const Index = () =>   {
  //const mode = useMode()

  return (
      <ModeProvider>
        <ThemeProvider>
          <AuthProvider>
            <ModeSwitcher />
            <ThemeSwitcher />
            <div className="App">
              <h1>DevPleno LiveClass</h1>
              {/*<MyComp /> */ }
              
              <Router>
                <Route path="/" component={SignIn} exact />
                <Route path="/app" component={Private} />
              </Router>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </ModeProvider>
  )
}

export default Index