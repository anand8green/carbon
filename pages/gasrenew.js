import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { globalState } from './component/StateData'

export default function Gasrenew() {

    const [, dispatch] = globalState()

    const gasCarbon = 4.1
    const gasRenewCarbon = 1.9

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>Is your home gas 100% carbon neutral?</h1>
            <p>It's a yes if you're with Green.</p>
            <div className="btnBox btnBoxHome">

                <div className="btns home">

                    <Link href="/family">
                        <div className="plus" onClick={() => {
                            dispatch({ type: "addScore", value: gasRenewCarbon })
                        }}>
                            <h2>Yes</h2>
                        </div>
                    </Link>

                    <Link href="/family">
                        <div className="minus" onClick={() => {
                            dispatch({ type: "addScore", value: gasCarbon })
                        }}>
                            <h2>No</h2>
                        </div>
                    </Link>

                </div>

                <img src="/gasrenew.svg" alt="" />

            </div>

            <Link href="/family">
                <button onClick={() => {
                    dispatch({ type: "addScore", value: gasCarbon })
                }}>I'm not sure</button>
            </Link>

        </motion.div>
    )
}
