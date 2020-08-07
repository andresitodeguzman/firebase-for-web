import { css } from 'lit-element';

export const style = css`
    nav {
        width: 100%;
        background-color: var(--primary-color);
        position: fixed;
        top: 0;
    }

    nav > div > div {
        padding: 20px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    a {
        color: white;
        text-decoration: none;
    }
`;