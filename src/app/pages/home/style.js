import { css } from 'lit-element';

export const style = css`
    .container {
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 10px;
        padding-bottom: 150px;
    }

    h1 {
        color: var(--primary-color);
    }

    button.add_button {
        background-color: var(--primary-color);
        position: fixed;
        border: 0;
        right: 15px;
        bottom: 20px;
        padding: 10px 20px;
        font-size: 15pt;
        border-radius: 30px;
        color: white;
        box-shadow: 4px 4px 26px 0px rgba(145,145,145,1);
    }
`;