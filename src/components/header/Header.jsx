import { useContext } from "react"
import UserContext from "../../context/UserContext"
import { HeaderContainer } from "./HeaderStyle"

export default function Header() {
    const { user } = useContext(UserContext)

    return (
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src={user.image} alt="profile" />
        </HeaderContainer>
    )
}