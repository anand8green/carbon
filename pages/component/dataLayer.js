

// import React, { createContext, useReducer, useContext } from 'react'

// const DataContext = createContext()

// const initState = {
//     score: 10,
//     car: false
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "incScore": return { ...state, score: state.score + 10 }
//     }
//     switch (action.type) {
//         case "car": return { ...state, car: !state.car }
//     }
// }

// export default function DataLayer({ children }) {
//     return (
//         <div>
//             <DataContext.Provider value={useReducer(reducer, initState)}>
//                 {children}
//             </DataContext.Provider>

//         </div>
//     )
// }

// export const StateData = () => useContext(DataContext)
