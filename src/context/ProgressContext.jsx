import { createContext, useState } from "react";

const ProgressContext = createContext()

export function ProgressProvider({ children }) {
    const [progress, setProgress] = useState(0)
    const [length, setLength] = useState(0)

    function getProgress(data) {
        let counter = 0
        if (data.length === 0) return counter

        for (let i = 0; i < data.length; i++) {
            if (data[i].done === true) counter++
        }
        counter = Math.round(counter * 100 / data.length)
        setProgress(counter)
        setLength(data.length)
    }

    function updateProgress(doneIncrement, check) {
        const progressCount = Math.round(progress * length / 100)
        if(doneIncrement) {
            const incrementProgress = check ? Math.round(((progressCount + 1) * 100) / length) : Math.round(((progressCount - 1) * 100) / length)
            setProgress(incrementProgress)
        } else {
            const incrementProgress = Math.round((progressCount * 100) / (length + 1))
            setLength(length + 1)
            setProgress(incrementProgress)
        }
    }

    return (
        <ProgressContext.Provider value={{ progress, setProgress, getProgress, updateProgress }}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressContext