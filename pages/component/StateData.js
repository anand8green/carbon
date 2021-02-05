import { createContext, useContext, useReducer } from "react"

const Data = createContext()

const initState = {
    score: 0,
    transport: {},
    food: {},

}

const reducer = (state, action) => {

    switch (action.type) {

        // On click distable state for transport

        case "carDsb": return { ...state, transport: { ...state.transport, carDsb: true } }
        case "bikeDsb": return { ...state, transport: { ...state.transport, bikeDsb: true } }
        case "trainDsb": return { ...state, transport: { ...state.transport, trainDsb: true } }
        case "tramDsb": return { ...state, transport: { ...state.transport, tramDsb: true } }
        case "undergroundDsb": return { ...state, transport: { ...state.transport, undergroundDsb: true } }
        case "busDsb": return { ...state, transport: { ...state.transport, busDsb: true } }

        // on click distable state for food items

        case "beefDsb": return { ...state, food: { ...state.food, beefDsb: true } }
        case "porkDsb": return { ...state, food: { ...state.food, porkDsb: true } }
        case "chickenDsb": return { ...state, food: { ...state.food, chickenDsb: true } }
        case "lambDsb": return { ...state, food: { ...state.food, lambDsb: true } }
        case "fishDsb": return { ...state, food: { ...state.food, fishDsb: true } }
        case "shellfishDsb": return { ...state, food: { ...state.food, shellfishDsb: true } }
        case "dairyDsb": return { ...state, food: { ...state.food, dairyDsb: true } }
        case "eggsDsb": return { ...state, food: { ...state.food, eggsDsb: true } }

        // Adding score

        case "addScore":
            const val = state.score + action.value
            return { ...state, score: Number(val.toFixed(2)) }

        // Removing score

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