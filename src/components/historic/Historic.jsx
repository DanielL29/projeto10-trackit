import { HistoricContainer } from "./HistoricStyle";
import dayjs from 'dayjs'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from './../../mock/data';
import UserContext from '../../context/UserContext'

export default function Historic() {
    const [historic, setHistoric] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        getHistoric()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [historic])

    function getHistoric() {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }

        const promise = axios.get(`${API_BASE_URL}/habits/history/daily`, config)
        promise.then(res => setHistoric(res.data))
    }

    function formatDate(date) {
        const formattedDate = dayjs(date).format().split('T')[0].split('-').reverse().join('/')
        for(let i = 0; i < historic.length; i++) {
            let counter = 0
            if(formattedDate === historic[i].day) {
                for(let j = 0; j < historic[i].habits.length; j++) {
                    if(historic[i].habits[j].done) counter++
                }

                if(counter === historic[i].habits.length) {
                    return <p className="green">{formattedDate.split('/')[0]}</p>
                } else {
                    return <p className="red">{formattedDate.split('/')[0]}</p>
                }  
            }
        }
        return formattedDate.split('/')[0]
    }

    return (
        <HistoricContainer>
            <h1>Histórico</h1>
            <Calendar className="calendar" locale="pt-BR" formatDay={(locale, date) => formatDate(date)} />
        </HistoricContainer>
    )
}