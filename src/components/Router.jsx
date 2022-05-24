import { Routes, Route } from 'react-router-dom'
import Habits from './habits/Habits'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'
import TodayTracks from './today-tracks/TodayTracks'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/cadastro' element={<SignUp />} />
            <Route path='/hoje' element={<TodayTracks />} />
            <Route path='/habitos' element={<Habits />} />
        </Routes>
    )
}