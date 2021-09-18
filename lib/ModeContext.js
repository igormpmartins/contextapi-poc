import React, {createContext, useContext, useState} from 'react'

export const ModeContext = createContext()

export const ModeProvider = ({children}) => {

    const [mode, setMode] = useState('dark')

    return (
        <ModeContext.Provider value={{mode, setMode}}>
            {children}
        </ModeContext.Provider>
    )
}

export const useMode = () => {
    const mode = useContext(ModeContext)
    return mode
}