
import Link from 'next/link'
import { motion } from 'framer-motion'
import { globalState } from './component/StateData'

export default function Result() {

    const [{ score },] = globalState()

    return (
        <div className="container">
            <motion.div className="start"
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            >
                <div className="start__info result">
                    <h5>Your carbon footprint is</h5>
                    <h1>{score} tonnes</h1>
                    <p>We've kept our questions simple, so this is an estimate. But it's a good one.</p>

                    <Link href="/">
                        <button className="resultBtn">Offset for £5.49 a month</button>
                    </Link>

                    <p className="moneyinfo">Your money will help protect the rainforest, provide clean cookstoves, and generate green energy around the world.</p>
                </div>
                <div className="start__pic">
                    <img src="/result.svg" alt="" />
                </div>
            </motion.div>

        </div>
    )
}
