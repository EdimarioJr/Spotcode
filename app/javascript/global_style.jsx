import { createGlobalStyle } from 'styled-components'
import RobotoFont from '../javascript/fonts'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ${RobotoFont}
    html,
    body{
        height: 100vh;
        min-height: 100vh;
        background-color: #1b1b1b;
        font-family: 'Roboto';
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    a{
        text-decoration:none;
        cursor: pointer;
    }
`;

export const FlexRowCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FlexColumnCenter = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(81vh - 80px);
`;


export const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: center;
    color: white;
    font-weight: bolder;
    background-color: transparent;
    border-radius: 3px;
    height: 30px;
    font-size: 20px;
    padding:${props=> props.size == 1? "25px 30px":"20px 15px"};
    border: ${props=>props.primary == 1? "2px solid #1dd960":"2px solid white"};

    &:hover{
        background-color: ${props=>props.primary? "#1dd960":"white" };
        color: black;
        transition: 0.3s;
    }

`;

export const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    min-height: calc(81vh - 80px);
`

export const GridAuto = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
    width: 100%;
`
export const Title = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 20px;
    font-size: 45px;
    font-weight: bolder;
`
