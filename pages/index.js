

import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Index() {
  return (
    <div className="container">
      <motion.div className="start"
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      >
        <div className="start__info">
          <h1>Let's crunch some numbers</h1>
          <p>Before we can offset your carbon footprint, we need to work out how big it is. We know things aren't normal right now, so tell us what you'd normally get up to. It'll take about 3 minutes.</p>
          <Link href="/transport">
            <button>Start</button>
          </Link>
        </div>
        <div className="start__pic">
          <img src="/calculator.svg" alt="" />
        </div>
      </motion.div>

    </div>
  )
}
