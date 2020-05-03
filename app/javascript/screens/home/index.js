import React from 'react';
import styled from "styled-components"
import {FlexColumnCenter,Button} from '../../global_style'

const Title =  styled.div`
    color: white;
    font-size: 2em;
    #primary{
        color: #1dd960;
        text-align: center;
    }
`

const List = styled.ul`
    color: white;
    margin-top: 50px;
    font-size: 1.5em;
    list-style-type: square;
    margin-bottom: 50px;
    li{
        margin-bottom: 5px;
    }
    span{
        font-weight: bolder;
    }
`

export default function HomeScreen(){
    return (
    <>
    <FlexColumnCenter>
        <Title>
            <h1>SEU APP DE</h1>
            <h1 id="primary">MÚSICA</h1>
        </Title>
        <List>
            <li>Suas músicas <span>favoritas</span></li>
            <li>Seus <span>podcasts</span></li>
            <li>Os <span>lançamentos</span></li>
            <li>As novas <span>descobertas</span></li>
        </List>
        <a href="users/sign_up">
            <Button size={1}>CADASTRAR AGORA</Button>
        </a>
    </FlexColumnCenter>
    </>
    );
}