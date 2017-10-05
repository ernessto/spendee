import { css } from 'styled-components';

export default {
    wrapper: css`
        position: absolute;
        top: 30px;
        left: 0;
        width: 1110px;
        z-index: 150;
        padding: 15px;
        background-color: #fff;
        ${props => props.rounded && 'border-radius: 8px;'}
    `
}
