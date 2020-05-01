import React from 'react'
import {GlobalStyle} from 'global_style.jsx'
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/common/Header'

export default function App(){
    return <>
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes/>
        </BrowserRouter>
    </>
}