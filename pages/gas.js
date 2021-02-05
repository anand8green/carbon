import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { globalState } from './component/StateData'

export default function Gas() {

    const [, dispatch] = globalState()

    const gasCarbon = 1.9

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>Do you use gas at home?</h1>

            <div className="btnBox btnBoxGas">

                <div className="btns home">

                    <Link href="/gasrenew">
                        <div className="plus" onClick={() => {
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

                <img src="/gas.svg" alt="" />

            </div>

        </motion.div>
    )
}
