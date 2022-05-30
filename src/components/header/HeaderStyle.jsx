import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Playball';
    font-size: 39px;
    color: #fff;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 18px;
    box-sizing: border-box;
    z-index: 1;

    img {
        border-radius: 100%;
        width: 51px;
        height: 51px;
        object-fit: cover;
    }
`

export const Perfil = styled.div`
    display: flex;
    align-items: center;
    transition: all 300ms ease-in-out;

    div:first-child {
        width: 0px;
        background-color: transparent;
        transition: all 300ms ease-in-out;
    }

    &:hover div:first-child {
        width: 50px;
        background-color: #fff;
    }

    div:first-child:hover {
        width: 120px;
    }

    img {
        cursor: pointer;
    }
`

export const Logout = styled.div`
    display: flex;
    align-items: center;
    width: 50px;
    font-family: 'Lexend Deca', sans-serif;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    color: #126BA5;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 5px;
    margin-right: -10px;

    ion-icon {
        font-size: 30px;
    }

    p {
        display: none;
        margin-right: 10px;
        font-size: 20px;
    }

    &:hover p {
        display: initial;
    }
`