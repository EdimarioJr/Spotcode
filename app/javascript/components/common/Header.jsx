import React from 'react'
import styled from 'styled-components'
import {FlexRowCenter,Button} from '../../global_style'
import Dropdown from "./Dropdown"
import {useLocation} from "react-router-dom"

import logo from '../../assets/images/logo.png'

const Header= styled(FlexRowCenter)`
    justify-content: space-between;
    padding: 0 100px;
    height: 130px;

    #imagem{
        background-image: url(${logo});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left center;
        height: 90%;
        width: 40%;
    }

`;


export default function HeaderComponent(){
    let action_button = useLocation().pathname == '/' ?
    action_button = <a href="users/sign_in"> <Button size={1} primary={1}>ENTRAR</Button></a> 
    :
    action_button = <Dropdown/>


    return(
        <Header>
                <div id='imagem'>
                </div>
                {action_button}
        </Header>   
    )
}