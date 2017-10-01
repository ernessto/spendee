import { css } from 'styled-components';

export default {
    categoriesContainer: css`
        position: absolute;
        top: 60px;
        left: 0;
        width: 164px;
        background-color: #fff;
        border: 1px solid #bbcdd8;
        border-radius: 4px;
        padding: 5px;
    `,
    categoriesList: css`
        list-style: none;
    `,
    listItem: css`
        display: flex;
        align-items: center;
        transition: background-color .2s;
        padding: 5px 0;
        color: #324c5b;
        font-size: 14px;
        cursor: pointer;
        :hover {
            background-color: rgba(200,200,200,.4);
        }
    `,
    categoryImage: css`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
        object-fit: cover;
    `
}