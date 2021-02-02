import React, { createContext, useReducer, useContext } from 'react'

const CartContex = createContext()

export default function CartProvider({ reducer, initState, children }) {
    return (
        <div>
            <CartContex.Provider value={useReducer(reducer, initState)}>
                {children}
            </CartContex.Provider>

        </div>
    )
}

export const CartData = () => useContext(CartContex)
