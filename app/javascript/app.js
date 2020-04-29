import React,{Fragment} from 'react'
import {GlobalStyle} from 'global_style.jsx'
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'

export default function App(){
    return <>
        <BrowserRouter>
            <GlobalStyle/>
            <Routes/>
        </BrowserRouter>
    </>
}