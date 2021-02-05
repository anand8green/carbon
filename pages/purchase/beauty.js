import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { globalState } from '../component/StateData'

export default function Beauty() {

    const [, dispatch] = globalState()
    const [num, setNum] = useState(0)

    const purchaseCarbon = 0.1

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>How about toiletries and health and beauty products?</h1>
            <div className="btnBox">

                <div className="btns">
                    <div className="plus" onClick={() => {
                        setNum(num + 5)
                        dispatch({ type: "addScore", value: purchaseCarbon })
                    }}>
                        <h2>+</h2>
                    </div>
                    <div className="points">
                        <h1>£{num}</h1>
                        <span> per month</span>
                    </div>
                    <div className="minus" onClick={() => {
                        if (num >= 1) {
                            setNum(num - 5)
                            dispatch({ type: "removeScore", value: purchaseCarbon })
                        }
                    }}>
                        <h2>-</h2>
                    </div>
                </div>

                <img src="/purchase/beauty.svg" alt="" />

            </div>

            <Link href="/purchase/electronics">
                <button>Next</button>
            </Link>
        </motion.div>
    )
}
