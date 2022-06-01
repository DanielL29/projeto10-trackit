import axios from "axios"
import { API_BASE_URL } from '../mock/data'
import dayjs from 'dayjs'

export function createHabit(name, days, habits, updateProgress, user, daysNumbers, setLoading, config, setDays, setDaysNumbers, setName, setCreating, setHabits) {
    setLoading(true)
    const habit = {name, days: daysNumbers.sort((a, b) => a - b)}
    const promise = axios.post(`${API_BASE_URL}/habits`, habit, config(user))
    promise.then((res) => {
        const haveToday = res.data.days.find(day => day === dayjs().day())
        const baseDays = days.map((day, i) => ({ id: i, name: day.name, selected: day.selected = false }))
        if(haveToday !== undefined) updateProgress()
        setLoading(false)
        setCreating(false)
        setDays([...baseDays])
        setDaysNumbers([]) 
        setName('') 
        setHabits([...habits, res.data])
    })
    promise.catch(res => {
        alert(`Oops! algo deu errado...${res.response.data}`)
        setLoading(false)
    })
}