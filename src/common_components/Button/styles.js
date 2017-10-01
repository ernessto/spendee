import { css } from 'styled-components';

export default {
    controlButton: css`
        padding: 8px 15px;
        position: relative;
        z-index: 150;
        border: 0;
        font-size: 14px;
        font-weight: 600;
        border-radius: 4px;
        transition: background-color .3s, box-shadow .3s;
        ${props => props.primary && 'background-color: #12c48b;'}
        ${props => props.primary && 'box-shadow: 0 4px 4px 0 rgba(17,195,139,.2);'}
        ${props => props.close && 'background-color: #324c5b;'}
        ${props => props.btnDisabled && 'background-color: #bbcdd8;'}
        ${props => props.btnDisabled && 'pointer-events: none;'}
        color: #fff;
        
        :hover {
            cursor: pointer;
            ${props => props.primary && 'box-shadow: 0 5px 6px 0 rgba(17,195,139,.32);'}
            ${props => props.close && 'background-color: #45687d;'}
        }
    `,
    buttonText: css`
        font-family: Open Sans,Helvetica,Arial,sans-serif;
    `
}