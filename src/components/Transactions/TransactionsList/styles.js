import { css } from 'styled-components';

export default {
    transactionContainer: css`
        margin: 0 auto;
        width: 1110px;
        margin-top: 50px;
        border-radius: 10px;
        background-color: #fff;
        padding: 15px;
    `,
    list: css`
        list-style: none;
    `,
    listItem: css`
        display: flex;
        justify-content: space-between;
        
        > div {
            width: 175px;
        }
        .textRight {
            text-align: right;
        }
    `
}