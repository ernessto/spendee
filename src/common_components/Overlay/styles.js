import { css, keyframes } from 'styled-components';

const fade = keyframes`
    from { opacity: 0 }
    to { opacity: .6 }
`;

export default {
    overlayView: css`
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.6);
        z-index: 100;
        animation: ${fade} .4s;
        animation-fill-mode: forwards;
    `
}