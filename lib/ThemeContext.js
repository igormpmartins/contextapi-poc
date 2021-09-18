import React, {createContext, useContext, useState} from 'react'
import { useMode } from './ModeContext'

const THEMES = [
    ['blue-metal', 'Blue Metal'],
    ['silver', 'Prateado']
]

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('blue-metal')
    const mode = useMode()

    /*const setNewTheme = t => {
        setTheme(t)
    }*/

    return (
        <ThemeContext.Provider 
            value={
                    {
                        themes: THEMES, 
                        theme: mode.mode + theme, 
                        //setTheme: setNewTheme
                        setTheme
                    }
                }>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const theme = useContext(ThemeContext)
    return theme
}