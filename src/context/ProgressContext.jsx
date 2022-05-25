import { createContext, useState } from "react";

const ProgressContext = createContext()

export function ProgressProvider({ children }) {
    const [progress, setProgress] = useState(0)

    return (
        <ProgressContext.Provider value={{ progress, setProgress }}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressContext