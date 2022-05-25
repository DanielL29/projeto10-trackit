import dayjs from "dayjs"
import { TodayContainer, TrackCard } from "./TodayTracksStyle"
import check from '../../assets/images/check.png'
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { API_BASE_URL } from './../../mock/data';
import UserContext from '../../context/UserContext'
import ProgressContext from "../../context/ProgressContext"

function Track({ habit, sequence, record, done, markHabit }) {
    return (
        <TrackCard done={done} equals={sequence === record}>
            <div>
                <h2>{habit}</h2>
                <p>Sequência atual: <span>{sequence} dias</span></p>
                <p>Seu recorde: <span className="record">{record} dias</span></p>
            </div>
            <div onClick={markHabit}>
                <img src={check} alt="check" />
            </div>
        </TrackCard>
    )
}

export default function TodayTracks() {
    const [todayHabits, setTodayHabits] = useState([])
    const { user } = useContext(UserContext)
    const weekDayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
    const { progress, setProgress } = useContext(ProgressContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        getTodayHabits()
        getProgress()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todayHabits])

    function getTodayHabits() {
        const promise = axios.get(`${API_BASE_URL}/habits/today`, config)
        promise.then(res => setTodayHabits(res.data))
    }

    function formatDate() {
        const weekDay = weekDayNames.find((_, i) => i === dayjs().day())
        const day = dayjs().date()
        let month = dayjs().month()
        month < 10 ? month = `0${month + 1}` : month = month + 1
        return `${weekDay}, ${day}/${month}`
    }

    function unCheckOrCheckHabit(id, done) {
        const isDone = done ? 'uncheck' : 'check'
        const promise = axios.post(`${API_BASE_URL}/habits/${id}/${isDone}`, {}, config)
        promise.catch(res => console.log(res.response.data))
    }

    function getProgress() {
        let counter = 0
        for(let i = 0; i < todayHabits.length; i++) {
            if(todayHabits[i].done === true) counter++
        }
        counter = Math.round(counter * 100 / todayHabits.length)
        setProgress(counter)
    }

    return (
        <TodayContainer>
            <h1>{formatDate()}</h1>
            {progress === 0 || todayHabits.length === 0 ? <h3>Nenhum hábito concluído ainda</h3> : <h3 className="progress">{progress}% dos hábitos concluidos </h3>}
            {todayHabits.length === 0 ? <p>Nenhum habito para este dia...</p> : (
                <div>
                    {todayHabits.map(today => 
                        <Track key={today.id} habit={today.name} sequence={today.currentSequence} record={today.highestSequence} done={today.done} 
                            markHabit={() => unCheckOrCheckHabit(today.id, today.done)} />)}
                </div>
            )}
        </TodayContainer>
    )
}