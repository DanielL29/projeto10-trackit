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

    img {
        border-radius: 100%;
        width: 51px;
        height: 51px;
        object-fit: cover;
    }
`