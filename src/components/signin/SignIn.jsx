import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpeg'
import { Login } from './SignInStyle'

export default function SignIn() {
    return (
        <Login>
            <img src={logo} alt="logo" />
            <h1>TrackIt</h1>
            <form>
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="senha" required />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Login>
    )
}