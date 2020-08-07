import { css } from 'lit-element';

export const style = css`
    nav {
        width: 100vw;
        background-color: var(--primary-color);
    }

    nav > div {
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