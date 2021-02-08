import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { globalState } from './component/StateData'

export default function Family() {

    const [, dispatch] = globalState()
    const [num, setNum] = useState(1)

    const familyCarbon = 0.1

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>And finally, how many people live in your home?</h1>
            <p>This helps us work out how much you use certain services.</p>

            <div className="btnBox btnBoxHome">

                <div className="btns">

                    <div className="minus" onClick={() => {
                        if (num >= 1) {
                            setNum(num - 1)

                        }
                    }}>
                        <h2>-</h2>
                    </div>

                    <div className="points">
                        <h1>{num}</h1>
                        <span> person</span>
                    </div>

                    <div className="plus" onClick={() => {
                        setNum(num + 1)
                        console.log(num);
                        if (num < 3) {
                            dispatch({ type: "removeScore", value: familyCarbon })
                        }
                        if (num === 6) {
                            dispatch({ type: "removeScore", value: familyCarbon })
                        }

                    }}>
                        <h2>+</h2>
                    </div>

                </div>

                <img src="/family.svg" alt="" />

            </div>

            <Link href="/result">
                <button>Next</button>
            </Link>
        </motion.div>
    )
}
