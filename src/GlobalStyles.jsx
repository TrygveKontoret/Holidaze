import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        font-family: 'Poppins', sans-serif;
        li {
            color: black;
        }
    }
    h1, h2, h3 {
        font-family: 'Lato', sans-serif;
        color: #293070;
    }

    a {
        color: #293070;
    }

    
`;

export default GlobalStyles;
