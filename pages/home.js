import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { globalState } from './component/StateData'

export default function Home() {

    const [, dispatch] = globalState()

    const homeCarbon = 0.7

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>Is your home electricity 100% renewable?</h1>
            <p>It's a yes if you're with Green.</p>
            <div className="btnBox btnBoxHome">

                <div className="btns home">

                    <Link href="/gas">
                        <div className="plus" onClick={() => {

                        }}>
                            <h2>Yes</h2>
                        </div>
                    </Link>

                    <Link href="/gas">
                        <div className="minus" onClick={() => {
                            dispatch({ type: "addScore", value: homeCarbon })
                        }}>
                            <h2>No</h2>
                        </div>
                    </Link>

                </div>

                <img src="/home.svg" alt="" />

            </div>

            <Link href="/gas">
                <button onClick={() => {
                    dispatch({ type: "addScore", value: homeCarbon })
                }}>I'm not sure</button>
            </Link>

        </motion.div>
    )
}
