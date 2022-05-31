import dayjs from "dayjs"
import { TodayContainer, TrackCard } from "./TodayTracksStyle"
import check from '../../assets/images/check.png'
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { API_BASE_URL, config } from './../../mock/data';
import UserContext from '../../context/UserContext'
import ProgressContext from "../../context/ProgressContext"
import { ThreeDots } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"

function Track({ habit, sequence, record, done, markHabit }) {
    const [disable, setDisable] = useState(false)

    return (
        <TrackCard done={done} equals={sequence === record}>
            <div>
                <h2>{habit}</h2>
                <p>Sequência atual: <span>{sequence} dias</span></p>
                <p>Seu recorde: <span className="record">{record} dias</span></p>
            </div>
            <button onClick={() => {setDisable(true); markHabit(setDisable);}} disabled={disable}>
                <img src={check} alt="check" />
            </button>
        </TrackCard>
    )
}

export default function TodayTracks() {
    const [todayHabits, setTodayHabits] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(UserContext)
    const weekDayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
    const { progress, updateProgress } = useContext(ProgressContext)
    const navigate = useNavigate()

    useEffect(() => {
        getTodayHabits()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getTodayHabits() {
        const promise = axios.get(`${API_BASE_URL}/habits/today`, config(user))
        promise.then(res => {setTodayHabits(res.data); setLoading(false);})
    }

    function formatDate() {
        const weekDay = weekDayNames.find((_, i) => i === dayjs().day())
        const day = dayjs().date()
        let month = dayjs().month()
        month < 10 ? month = `0${month + 1}` : month = month + 1
        return `${weekDay}, ${day}/${month}`
    }

    function unCheckOrCheckHabit(id, done, setDisable, index) {
        todayHabits[index].done = !todayHabits[index].done
        done ? todayHabits[index].currentSequence -= 1 : todayHabits[index].currentSequence += 1
        done ? todayHabits[index].highestSequence -= 1 : todayHabits[index].highestSequence += 1
        done ? updateProgress(true) : updateProgress(true, true)
        setTodayHabits([...todayHabits])
        const isDone = done ? 'uncheck' : 'check'
        const promise = axios.post(`${API_BASE_URL}/habits/${id}/${isDone}`, {}, config(user))
        promise.then(() => {setDisable(false); })
        promise.catch(res => {alert(`Oops! algo deu errado...${res.response.data.message}`); navigate('/');})
    }

    return (
        <TodayContainer>
            <h1>{formatDate()}</h1>
            {loading ? <ThreeDots color="#126BA5" height={50} width={50} /> : ''}
            {!loading ? progress === 0 || todayHabits.length === 0 ? <h3>Nenhum hábito concluído ainda</h3> : <h3 className="progress">{progress}% dos hábitos concluidos </h3> : ''}
            {!loading ? todayHabits.length === 0 ? <p>Nenhum habito para este dia...</p> : (
                <div>
                    {todayHabits.map((today, i) => 
                        <Track key={today.id} habit={today.name} sequence={today.currentSequence} record={today.highestSequence} done={today.done} 
                            markHabit={(setDisable) => unCheckOrCheckHabit(today.id, today.done, setDisable, i)} />)}
                </div>
            ) : ''}
        </TodayContainer>
    )
}