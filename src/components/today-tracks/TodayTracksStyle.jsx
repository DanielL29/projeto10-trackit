import styled from 'styled-components'

export const TodayContainer = styled.div`
    margin-top: 98px;
    margin-left: 17px;

    h1 {
        color: #126BA5;
        font-size: 23px;
    }

    h3 {
        font-size: 18px;
        color: #BABABA;
        margin-bottom: 28px;
        margin-top: 5px;
    }

    .progress {
        color: #8FC549;
    }
`

export const TrackCard = styled.div`
    display: flex;
    justify-content: space-between;

    width: 340px;
    height: 94px;   
    background-color: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 15px;
    color: #666666;

    h2 {
        font-size: 20px;
        margin-bottom: 8px;
    }

    p {
        font-size: 13px;
    }

    div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 69px;
        height: 69px;
        background-color: ${({ done }) => done ? '#8FC549' : '#E7E7E7'};
        border-radius: 5px;
        cursor: pointer;
    }

    span {
        color: ${({ done }) => done ? '#8FC549' : 'currentColor'};
    }

    .record {
        color: ${({ done, equals }) => done && equals ? '#8FC549' : 'currentColor'}
    }
`