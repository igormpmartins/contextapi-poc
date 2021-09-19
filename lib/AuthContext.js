import React, {useEffect, createContext, useContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isAuthing, setIsAuthing] = useState(true)
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({})

    useEffect(async()=> {
        
        //efetuando um delay, para simular alguma validação de token, etc.
        const res = await fetch('https://httpbin.org/delay/2')
        await res.json()
        //console.log(json)
        setIsAuthing(false)

        if (window.localStorage.getItem('token') === 1) {
            setIsAuth(true)
            setUser({
                id: 1,
                user: 'Igor'
            })
        }

    }, [])

    const signIn = user => {
        //chama api
        //verifica se está ok
        window.localStorage.setItem('token', 1)
        setIsAuth(true)
    }

    const signOut = () => {
        window.localStorage.removeItem('token')
        setIsAuth(false)
        setUser({})
    }

    const auth = {
        isAuthing,
        isSignedIn: isAuth,
        user,
        signIn,
        signOut
        
    }

    if (isAuthing) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}



