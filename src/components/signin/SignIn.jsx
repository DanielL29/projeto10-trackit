import axios from 'axios'
import { useContext, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.jpeg'
import UserContext from '../../context/UserContext'
import { API_BASE_URL } from '../../mock/data'
import { Login } from './SignInStyle'

export default function SignIn() {
    const [signIn, setSignIn] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    function signInUser(e) {
        e.preventDefault()
        setLoading(true)
        const promise = axios.post(`${API_BASE_URL}/auth/login`, signIn)
        promise.then(res => {
            setLoading(false)
            setUser({ image: res.data.image, token: res.data.token })
            navigate('/hoje')
        })
        promise.catch(res => {
            alert(`Preencha os campos corretamente! ${res.response.data.message}`)
            setLoading(false)
        })
    }

    return (
        <Login disable={loading}>
            <img src={logo} alt="logo" />
            <h1>TrackIt</h1>
            <form onSubmit={signInUser}>
                <input type="email" name="email" placeholder="email" required 
                    onChange={(e) => setSignIn({ ...signIn, [e.target.name]: e.target.value })} disabled={loading} />
                <input type="password" name="password" placeholder="senha" required 
                    onChange={(e) => setSignIn({ ...signIn, [e.target.name]: e.target.value })} disabled={loading} />
                <button type="submit">
                    {loading ? <ThreeDots color="#FFF" height={50} width={50} /> : 'Entrar'}
                </button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Login>
    )
}