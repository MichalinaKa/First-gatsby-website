import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box
}

*, *::before, *::after{
    box-sizing:border-box;
}
body{
    margin: 0;
    padding: 120px 80px 0;
    font-family: 'Montserrat';
}
button{
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat'
}
ul{
    margin: 0;
    padding: 0;
}

`
export default GlobalStyle
