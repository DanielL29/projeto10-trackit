import styled from 'styled-components'

export const HistoricContainer = styled.div`
    margin-left: 17px;
    margin-top: 98px;

    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 17px;
    }

    .green {
        background-color: #8CC654;
        padding: 9px;
        border-radius: 100%;
    }

    .red {
        background-color: #E25666;
        padding: 9px;
        border-radius: 100%;
    }

    .calendar {
        border: none;
        border-radius: 10px;
        width: 335px;
        height: 402px;
    }

    .calendar .react-calendar__month-view__days button {
        height: 62px;
    }

    .day-habits {
        position: absolute;
        margin-top: -50px;
        margin-left: 50px;
    }
`