import styled from 'styled-components'

export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    img {
        width: 200px;
    }

    h1 {
        font-family: 'Playball';
        font-size: 69px;
        color: #126BA5;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }

    input {
        width: 303px;
        height: 45px;
        outline: none;
        background-color: ${({ disable }) => disable ? '#f2f2f2' : '#fff'};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        padding-left: 11px;
        color: ${({ disable }) => disable ? '#afafaf' : '#dbdbdb'};
        margin-bottom: 6px;
        box-sizing: border-box;
    }

    input::placeholder {
        color: #DBDBDB;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        outline: none;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }

    p {
        margin-top: 25px;
        color: #52B6FF;
        font-size: 14px;
        text-decoration: underline;
        cursor: pointer;
    }
`