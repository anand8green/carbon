import { createContext, useContext, useReducer } from "react"

const Data = createContext()

const initState = {
    score: 0,
    carDsb: false
}

const reducer = (state, action) => {

    switch (action.type) {

        case "mkCarDsb": return { ...state, carDsb: true }
        case "carValue":

            const val = state.score + action.value
            return { ...state, score: Number(val.toFixed(2)) }
    }
}

export default function StateData({ children }) {
    return (
        <Data.Provider value={useReducer(reducer, initState)}>
            {children}
        </Data.Provider>
    )
}

export const globalState = () => useContext(Data)