import { createContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState({})

    if(user.token !== undefined) {
        localStorage.setItem("user", JSON.stringify(user))
    } else if (localStorage.getItem("user") !== null) {
        const userAuth = JSON.parse(localStorage.getItem("user"))
        setUser(userAuth)
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext