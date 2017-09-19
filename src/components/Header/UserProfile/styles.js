import { css } from 'styled-components';

export default {
    userProfileContainer: css`
        display: flex;
        padding: 15px 20px 15px 0;
        justify-content: flex-end;
        width: 25%;
    `,
    userAvatar: css`
        margin: auto 0;
        border-radius: 50%;
        width: 32px;
        height: 32px;
    `,
    userName: css`
        font-weight: 700;
        color: #324c5b;
        font-size: 14px;
        margin: auto 0;
        margin-left: 10px;
    `
}