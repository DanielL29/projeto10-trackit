import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import Habits from './habits/Habits'
import Historic from './historic/Historic'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'
import TodayTracks from './today-tracks/TodayTracks'

export default function Router() {
    const { user } = useContext(UserContext)
    const userLogged = user.token !== undefined

    return (
        <Routes>
            <Route path='/' element={userLogged ? <Navigate to="/hoje" replace /> : <SignIn />} />
            <Route path='/cadastro' element={<SignUp />} />
            <Route path={userLogged ? '/hoje' : '*'} element={userLogged ? <TodayTracks /> : <Navigate to="/" replace />} />
            <Route path={userLogged ? '/habitos' : '*'} element={userLogged ? <Habits /> : <Navigate to="/" replace />} />
            <Route path={userLogged ? '/historico' : '*'} element={userLogged ? <Historic /> : <Navigate to="/" replace />} />
        </Routes>
    )
}