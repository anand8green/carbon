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

    const [four, setFour] = useState(0)
    const [eight, setEight] = useState(0)
    const [tw, setTw] = useState(0)
    const [overTw, setOverTw] = useState(0)

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>How many flights have you taken in the past 12 months?</h1>
            <div className="btnBox">

                <div className="allBtns">

                    {/* 1 */}
                    <div className="btns">

                        <div className="minus" onClick={() => {
                            if (four >= 1) {
                                setFour(four - 1)
                                dispatch({ type: "removeScore", value: flyFourHoursCarbon })
                            }
                        }}>
                            <h2>-</h2>
                        </div>
                        <div className="points">
                            <h1>{four}</h1>
                            <span> Under 4 hours flights</span>
                        </div>
                        <div className="plus" onClick={() => {
                            setFour(four + 1)
                            dispatch({ type: "addScore", value: flyFourHoursCarbon })
                        }}>
                            <h2>+</h2>
                        </div>

                    </div>

                    {/* 2 */}

                    <div className="btns">

                        <div className="minus" onClick={() => {
                            if (eight >= 1) {
                                setEight(eight - 1)
                                dispatch({ type: "removeScore", value: flyEightHoursCarbon })
                            }
                        }}>
                            <h2>-</h2>
                        </div>

                        <div className="points">
                            <h1>{eight}</h1>
                            <span> 4-8 hours flights</span>
                        </div>

                        <div className="plus" onClick={() => {
                            setEight(eight + 1)
                            dispatch({ type: "addScore", value: flyEightHoursCarbon })
                        }}>
                            <h2>+</h2>
                        </div>

                    </div>

                    {/* 3 */}

                    <div className="btns">
                        <div className="minus" onClick={() => {
                            if (tw >= 1) {
                                setTw(tw - 1)
                                dispatch({ type: "removeScore", value: flyTwelveHoursCarbon })
                            }
                        }}>
                            <h2>-</h2>
                        </div>

                        <div className="points">
                            <h1>{tw}</h1>
                            <span> 8-12 hours flights</span>
                        </div>

                        <div className="plus" onClick={() => {
                            setTw(tw + 1)
                            dispatch({ type: "addScore", value: flyTwelveHoursCarbon })
                        }}>
                            <h2>+</h2>
                        </div>

                    </div>

                    {/* 4 */}

                    <div className="btns">
                        <div className="minus" onClick={() => {
                            if (overTw >= 1) {
                                setOverTw(overTw - 1)
                                dispatch({ type: "removeScore", value: flyOverTweleveCarbon })
                            }
                        }}>
                            <h2>-</h2>
                        </div>
                        <div className="points">
                            <h1>{overTw}</h1>
                            <span> Over 12 hours flights</span>
                        </div>
                        <div className="plus" onClick={() => {
                            setOverTw(overTw + 1)
                            dispatch({ type: "addScore", value: flyOverTweleveCarbon })
                        }}>
                            <h2>+</h2>
                        </div>

                    </div>

                </div>

                <img src="/flight.svg" alt="" className="flightPic" />

            </div>

            <Link href="/food">
                <button>Next</button>
            </Link>
        </motion.div>
    )
}
