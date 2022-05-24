import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.jpeg'
import { Login } from '../signin/SignInStyle'
import { API_BASE_URL } from '../../mock/data'
import { useState } from 'react'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'

export default function SignUp() {
    const [signUp, setSignUp] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function signUpUser(e) {
        e.preventDefault()
        setLoading(true)
        const promise = axios.post(`${API_BASE_URL}/auth/sign-up`, signUp)
        promise.then(res => {
            setLoading(false)
            navigate('/')
        })
        promise.catch(res => {
            alert(`Preencha os campos corretamente! ${res.response.data.details[0]}`)
            setLoading(false)
        })
    }

    return (
        <Login disable={loading}>
            <img src={logo} alt="logo" />
            <h1>TrackIt</h1>
            <form onSubmit={signUpUser}>
                <input type="email" name="email" placeholder="email" required 
                    onChange={(e) => setSignUp({...signUp, [e.target.name]: e.target.value})} disabled={loading} />
                <input type="password" name="password" placeholder="senha" required 
                    onChange={(e) => setSignUp({...signUp, [e.target.name]: e.target.value})} disabled={loading} />
                <input type="text" name="name" placeholder="nome" required 
                    onChange={(e) => setSignUp({...signUp, [e.target.name]: e.target.value})} disabled={loading} />
                <input type="text" name="image" placeholder="foto" required 
                    onChange={(e) => setSignUp({...signUp, [e.target.name]: e.target.value})} disabled={loading} />
                <button type="submit">
                    {loading ? <ThreeDots color="#FFF" height={50} width={50} /> : 'Cadastrar'}
                </button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Login>
    )
}