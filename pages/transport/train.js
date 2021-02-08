import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { globalState } from '../component/StateData'

export default function Train() {

    const [, dispatch] = globalState()
    const [num, setNum] = useState(0)

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>How much do you travel by train?</h1>
            <div className="btnBox">

                <div className="btns">
                    <div className="minus" onClick={() => {
                        if (num >= 1) {
                            setNum(num - 1)
                            dispatch({ type: "removeScore", value: 0.2 })
                        }
                    }}>
                        <h2>-</h2>
                    </div>

                    <div className="points">
                        <h1>{num}</h1>
                        <span> hours per week</span>
                    </div>

                    <div className="plus" onClick={() => {
                        setNum(num + 1)
                        dispatch({ type: "addScore", value: 0.2 })
                    }}>
                        <h2>+</h2>
                    </div>

                </div>
                <img src="/transport/train.svg" alt="" />

            </div>

            <Link href="/transport">
                <button>Next</button>
            </Link>
        </motion.div>
    )
}
