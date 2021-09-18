import React, {createContext, useContext} from 'react'

const ValueContext = createContext()

//quando ocorre essa transferência de valores entre os comps, 
//é chamado de prop drillings

const Content = () => {
    return (
    <div>
        <h2>Content</h2>
        <Other />
    </div>
    )
}

const Other = () => {
    const val = useContext(ValueContext)
    return (
        <div>
            <h2>Other = {val}</h2>
        </div>
    )
}

const Poc = () => {
    const value = 'Meu super texto'
    return (
        <div>
            <ValueContext.Provider value={value}>
                <h1>Testes de Context</h1>
                {/*<Content />*/}
                <Other />
            </ValueContext.Provider>
        </div>
    )
}

export default Poc