import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import ProgressContext from "../../context/ProgressContext";
import UserContext from "../../context/UserContext";
import { API_BASE_URL, config } from "../../mock/data";
import { FooterContainer, ProgressBar } from "./FooterStyle";

export default function Footer() {
    const { progress, setProgress } = useContext(ProgressContext)
    const [todayHabits, setTodayHabits] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        getTodayHabits()
        getProgress()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todayHabits])

    function getTodayHabits() {
        const promise = axios.get(`${API_BASE_URL}/habits/today`, config(user))
        promise.then(res => setTodayHabits(res.data))
    }

    function getProgress() {
        let counter = 0
        if(todayHabits.length === 0) return counter
        
        for(let i = 0; i < todayHabits.length; i++) {
            if(todayHabits[i].done === true) counter++
        }
        counter = Math.round(counter * 100 / todayHabits.length)
        setProgress(counter)
    }

    return (
        <FooterContainer>
            <Link to="/habitos" style={{ textDecoration: 'none' }}>
                <h2>Hábitos</h2>
            </Link>
            <Link to="/hoje" style={{ textDecoration: 'none' }}>
                <ProgressBar>
                    <CircularProgressbar backgroundPadding={6} strokeWidth={9} value={progress} text="Hoje" background />
                </ProgressBar>
            </Link>
            <Link to="historico" style={{ textDecoration: 'none' }}>
                <h2>Histórico</h2>
            </Link>
        </FooterContainer>
    )
}