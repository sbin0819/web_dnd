import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
// import { media } from './theme';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: -0.25px;
        line-height: 1.24;
    }

    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 20px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    body {
        background: #18191f;
        color: white;
    }
    a{
        color: inherit;
        text-decoration:none;
    }
`;
