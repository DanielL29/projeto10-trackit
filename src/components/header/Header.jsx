import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../../context/UserContext"
import { HeaderContainer, Logout, Perfil } from "./HeaderStyle"

export default function Header() {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    function logout() {
        localStorage.clear()
        setUser({})
        navigate('/')
    }

    return (
        <HeaderContainer>
            <h1>TrackIt</h1>
            <Perfil>
                <Logout onClick={logout}>
                    <ion-icon name="log-out-outline"></ion-icon>
                    <p>Logout</p>
                </Logout>
                <img src={user.image} alt="profile" />
            </Perfil>
        </HeaderContainer>
    )
}