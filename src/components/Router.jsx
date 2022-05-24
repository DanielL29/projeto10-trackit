import { Routes, Route } from 'react-router-dom'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/cadastro' element={<SignUp />} />
        </Routes>
    )
}