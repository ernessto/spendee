import { css } from 'styled-components';

export default {
    wrapper: css`
        margin: 0 auto;
        position: relative;
        z-index: 150;
        padding: 15px;
        background-color: #fff;
        ${props => props.rounded && 'border-radius: 8px;'}
    `
}
