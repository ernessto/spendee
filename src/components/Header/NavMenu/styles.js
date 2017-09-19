import { css } from 'styled-components';

export default {
    navMenuContainer: css`
        display: flex;
        width: 50%;
        justify-content: center;
    `,
    link: css`
        display: inline-block;
        > a {
            color: #7b93a4;
            font-size: 16px;
            cursor: pointer;
            outline: none;
            position: relative;
            display: inline-block;
            text-decoration: none;
            padding: 20px;
            font-weight: 600;
            transition: color .2s;
            :hover {
                color: #12c48b;
            }
        }
        > a.active {
            color: #12c48b;
            ::after {
                content: "";
                height: 3px;
                background-color: #12c48b;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    `
}