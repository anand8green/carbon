import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { globalState } from '../component/StateData'

export default function Car() {

    const [carType, setCarType] = useState(null)
    const [value, setValue] = useState(0)
    const [num, setNum] = useState(0)

    const [, dispatch] = globalState()

    useEffect(() => {
        if (carType === "petrol") setValue(0.5)
        if (carType === "diesel") setValue(0.4)
        if (carType === "hybrid") setValue(0.3)
        if (carType === "plug") setValue(0.3)
        if (carType === "elec") setValue(0.2)
    }, [carType])

    return (
        <div className="container">
            { !carType &&

                <motion.div className="div"
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                >
                    <h1>What type of car is it?</h1>
                    <div className="transport">
                        <div className={`circle ${carType === "petrol" ? "selected" : null}`} onClick={() => setCarType("petrol")}>
                            <img src="/transport/petrol.svg" alt="" />
                            <p>Petrol</p>
                        </div>

                        <div className={`circle ${carType === "diesel" ? "selected" : null}`} onClick={() => setCarType("diesel")}>
                            <img src="/transport/diesel.svg" alt="" />
                            <p>Diesel</p>
                        </div>

                        <div className={`circle ${carType === "hybrid" ? "selected" : null}`} onClick={() => setCarType("hybrid")}>
                            <img src="/transport/hybrid.svg" alt="" />
                            <p> Hybrid</p>
                        </div>

                        <div className={`circle ${carType === "plug" ? "selected" : null}`} onClick={() => setCarType("plug")}>
                            <img src="/transport/plug.svg" alt="" />
                            <p>Plug-in hybrid</p>
                        </div>

                        <div className={`circle ${carType === "elec" ? "selected" : null}`} onClick={() => setCarType("elec")}>
                            <img src="/transport/electric.svg" alt="" />
                            <p> Electric</p>
                        </div>
                    </div>
                </motion.div>

            }
            {
                carType &&

                <motion.div className="btnBox"
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                >
                    <h1>How much do you drive?</h1>
                    <img src="/transport/car.svg" alt="" />

                    <div className="btns">
                        <div className="plus" onClick={() => {
                            setNum(num + 1)
                            dispatch({ type: "addScore", value: value })
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
                                dispatch({ type: "removeScore", value: value })
                            }
                        }}>
                            <h2>-</h2>
                        </div>
                    </div>

                </motion.div>
            }

            <Link href="/transport">
                <button>Next</button>
            </Link>
        </div>
    )
}
