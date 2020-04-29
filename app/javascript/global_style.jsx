import { createGlobalStyle } from 'styled-components'
import RobotoFont from '../javascript/fonts'

export const GlobalStyle = createGlobalStyle`
    ${RobotoFont}
    html,body{
        min-height: 100%;
        background-color: #1b1b1b;
        font-family: 'Roboto';
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`