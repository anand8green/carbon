import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { globalState } from './component/StateData'

export default function Flight() {

    const flyFourHoursCarbon = 0.6
    const flyEightHoursCarbon = 2.1
    const flyTwelveHoursCarbon = 3.5
    const flyOverTweleveCarbon = 4.2

    const [, dispatch] = globalState()
    const [num, setNum] = useState(0)

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <div className="btnBox">
                <h1>How many flights have you taken in the past 12 months?</h1>
                <img src="/transport/plane.svg" alt="" />

                <div className="btns">
                    <div className="plus" onClick={() => {
                        setNum(num + 1)
                        dispatch({ type: "addScore", value: 0.1 })
                    }}>
                        <h2>+</h2>
                    </div>
                    <div className="points">
                        <h1>{num}</h1>
                        <span> hours per week</span>
                    </div>
                    <div className="minus" onClick={() => {
                        if (num >= 1) {
                            setNum(num - 1)
                            dispatch({ type: "removeScore", value: 0.1 })
                        }
                    }}>
                        <h2>-</h2>
                    </div>
                </div>

            </div>

            <Link href="/transport">
                <button>Next</button>
            </Link>
        </motion.div>
    )
}
