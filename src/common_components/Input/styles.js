import { css } from 'styled-components';

export default {
    label: css`
        display: flex;
        flex-direction: column;
    `,
    input: css`
        padding: 0 8px;
        background-color: transparent;
        outline: none;
        height: 36px;
        line-height: 36px;
        touch-action: manipulation;
        border: 1px solid rgb(229, 235, 238);
        ${props => props.borderActiveColor && 'border-color: #bbcdd8;'}
        transition: border-color .3s, color .2s;
        border-radius: 4px;
        font-size: 14px;
        font-family: Open Sans, Arial, sans-serif;
        color: ${props => props.textColor || 'rgba(0,0,0,.7)'};
        ${ props => props.amountState === 'expenses' && 'color: #fb6666;'}
        ${ props => props.amountState === 'incomes' && 'color: #12c48b;'}
        font-weight: ${props => props.weight || 'inherit'};
        text-align: ${props => props.textPosition || 'left'};
        :hover {
            border: 1px solid #bbcdd8;
        }
        :focus {
            border: 1px solid #bbcdd8;
        }
        &::-webkit-input-placeholder { color: #bbcdd8; }
        &::-moz-placeholder { color: #bbcdd8; }
        &:-moz-placeholder { color: #bbcdd8; }
        &:-ms-input-placeholder { color: #bbcdd8; }
    `,
    labelText: css`
        margin-bottom: 3px;
        font-size: 12px;
        color: #7b93a4;
    `
}