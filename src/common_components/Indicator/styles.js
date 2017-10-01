import { css } from 'styled-components';

export default {
    indicator: css`
        display: inline-flex;
        width: 20px;
        height: 20px;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        ${props => (props.primary || props.invertPrimary)  && 'margin-right: 5px;'}
        ${props => props.primary && 'color: #12c48b'};
        border-radius: 50%;
        ${props => props.primary && 'background-color: #fff;'}
        ${props => props.invertPrimary && 'background-color: #12c48b; color: #fff;'}
        
        span {
            line-height: 1;
            ${props => props.close && 'margin: auto 0;'};
        }
        img {
            object-fit: cover;
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
    `
}