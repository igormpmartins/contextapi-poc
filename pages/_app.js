import React from 'react'
import { AppProps } from 'next/app';
import '../styles/globals.css'

//https://colinhacks.com/essays/building-a-spa-with-nextjs

//Acontece que por estar utilizando NextJS, ocorre SSR.
//Nesse momento, não há document! Mas é necessário para o render, 
//por isso tem essa volta.

//Tb. foi utilizado o suppressHydrationWarning, para não mostrar o Warning,
//quando tenta dar render (comparando com o dom real), mas retorna vazio.

function MyApp({ Component, pageProps }) {
    // Outra forma, é comentar esse Fragment e colocar no globals.css 
    return (
        <React.Fragment>
             <div suppressHydrationWarning>
                {typeof window === 'undefined' ? null : <Component {...pageProps} />}
            </div>
        </React.Fragment>
    )
}

export default MyApp
