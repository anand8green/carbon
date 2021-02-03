import { createContext, useContext, useReducer } from "react"

const Data = createContext()

const initState = {
    score: 0,
    transport: {
        carDsb: false
    }

}

const reducer = (state, action) => {

    switch (action.type) {

        case "carDsb": return { ...state, transport: { ...state.transport, carDsb: true } }
        case "bikeDsb": return { ...state, transport: { ...state.transport, bikeDsb: true } }
        case "trainDsb": return { ...state, transport: { ...state.transport, trainDsb: true } }
        case "tramDsb": return { ...state, transport: { ...state.transport, tramDsb: true } }
        case "undergroundDsb": return { ...state, transport: { ...state.transport, undergroundDsb: true } }
        case "busDsb": return { ...state, transport: { ...state.transport, busDsb: true } }

        case "addScore":
            const val = state.score + action.value
            return { ...state, score: Number(val.toFixed(2)) }

        case "removeScore":
            const valRemove = state.score - action.value
            return { ...state, score: Number(valRemove.toFixed(2)) }
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