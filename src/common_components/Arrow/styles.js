import { css } from 'styled-components';

export default {
    arrow: css`
        display: inline-block;
        position: relative;
        height: ${props => props.size || '8px'};
        width: ${props => props.size || '8px'};
        border-width: 2px 2px 0 0;
        border-style: solid;
        ${props => props.active ? 'border-color: #333;' : 'border-color: #bbcdd8;'}
        transition: transform .3s, border-color .3s;
        ${props => props.arrowState === 'up' && 'transform: rotate(-45deg); border-color: #333;'}
        ${props => props.arrowState === 'down' && 'transform: rotate(135deg); top: -2px;'}
        ${props => props.arrowState === 'left' && 'transform: rotate(-135deg);'}
        ${props => props.arrowState === 'right' && 'transform: rotate(45deg);'}
        margin: ${props => props.margin || 'auto'};
    `
}