import { createGlobalStyle } from 'styled-components'
import RobotoFont from '../javascript/fonts'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ${RobotoFont}
    html,
    body {
        height: 100vh;
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
    justify-content: center;
    align-items: center;
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
    padding:${props=> props.size? "25px 30px":"20px 15px"};
    border: ${props=>props.primary? "2px solid #1dd960":"2px solid white"};

    &:hover{
        background-color: ${props=>props.primary? "#1dd960":"white" };
        color: black;
        transition: 0.3s;
    }

`;

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`

