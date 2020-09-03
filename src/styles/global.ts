import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
}

body {
    background: #fff;
    color: #1E5323;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-family: 'Righteous', serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    /* em vez de botar o negrito padrão que é 700 bota 500 */
    font-weight: 500;
}

button {
    /* para mudar o cursor quando passa pelo botão */
    cursor: pointer;
}
`;
