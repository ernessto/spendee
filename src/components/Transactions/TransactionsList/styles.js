import { css } from 'styled-components';

export default {
    transactionContainer: css`
        margin: 0 auto;
        width: 1140px;
        margin: 50px auto;
        border-radius: 10px;
        background-color: #fff;
        padding: 15px 0;
        font-size: 14px;
    `,
    list: css`
        list-style: none;
    `,
    listItemWrapper: css`
        padding: 5px;
    `,
    listItem: css`
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-radius: 12px;
        :hover {
            background-color: #f4f7fa;
        }
        
        > div {
            width: 175px;
            display: flex;
            align-items: center;
            
            img {
                border-radius: 50%;
                width: 32px;
                height: 32px;
                margin-right: 10px;
                object-fit: cover;
            }
        }
    `,
    hashView: css`
        ${props => props.isValue && 'color: #12c48b;'}
    `,
    amountView: css`
        justify-content: space-between;
        
        output {
            font-weight: 700;
            ${props => props.isNegative ? 'color: #f14c52;' : 'color: #2dba75;'}
        }
    `
}