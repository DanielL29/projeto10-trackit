import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 70px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0 33px;
    font-size: 18px;

    h2 {
        color: #52B6FF;
    }
`

export const ProgressBar = styled.div`
    height: 91px;
    width: 91px;
    margin-bottom: 60px;

    .CircularProgressbar-path {
        stroke: #fff;
    }
    .CircularProgressbar-trail {
        stroke: #52B6FF;
    }
    .CircularProgressbar-text {
        fill: #fff;
    }
    .CircularProgressbar-background {
        fill: #52B6FF;
    }
`
