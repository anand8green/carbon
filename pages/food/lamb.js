import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { globalState } from '../component/StateData'

export default function Lamb() {

    const [, dispatch] = globalState()
    const [num, setNum] = useState(0)

    const foodCarbon = 0.2

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>How often do you eat lamb?</h1>
            <div className="btnBox">

                <div className="btns">
                    <div className="plus" onClick={() => {
                        setNum(num + 1)
                        dispatch({ type: "addScore", value: foodCarbon })
                    }}>
                        <h2>+</h2>
                    </div>
                    <div className="points">
                        <h1>{num}</h1>
                        <span> meals a week</span>
                    </div>
                    <div className="minus" onClick={() => {
                        if (num >= 1) {
                            setNum(num - 1)
                            dispatch({ type: "removeScore", value: foodCarbon })
                        }
                    }}>
                        <h2>-</h2>
                    </div>
                </div>
                <img src="/food/lamb.svg" alt="" />

            </div>

            <Link href="/food">
                <button>Next</button>
            </Link>
        </motion.div>
    )
}
