import { css } from 'styled-components';

export default {
    container: css`
        display: flex;
        flex-direction: column;
        position: relative;
    `,
    inputWrapper: css`
        position: relative;
    `,
    inputOverlay: css`
        position: absolute;
        z-index: -1;
        top: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        left: 13px;
    `,
    inputOverlayText: css`
        color: #324c5b;
        font-size: 14px;
    `,
    arrowWrapper: css`
        display: inline-flex;
        height: 25px;
        width: 25px;
        top: 28px;
        right: 2px;
        background-color: rgba(255,255,255,.5);
        position: absolute;
        
        :hover {
            cursor: pointer;
            > span {
                border-color: #333;
            }
        }
    `,
    categoryFilterContainer: css`
        display: flex;
        flex-direction: row;
    `,
    categoryFilter: css`
        padding: 3px 16px;
        border: 0;
        font-family: Open Sans,Helvetica,Arial,sans-serif;
        border-radius: 4px;
        font-size: 12px;
        background-color: transparent;
        color: #bbcdd8;
        cursor: pointer;
        margin-bottom: 15px;
        ${ props => props.isActive && 'color: #fff;' }
        ${ props => (props.isActive && props['data-active-category'] === 'expenses') && 'background-color: #fb6666' }
        ${ props => (props.isActive && props['data-active-category'] === 'incomes') && 'background-color: #12c48b' }
    `
}