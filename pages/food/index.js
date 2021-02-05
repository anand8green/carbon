
import Link from 'next/link'
import { globalState } from '../component/StateData'
import { motion } from 'framer-motion'
export default function Food() {

    const [{ food: { beefDsb, porkDsb, chickenDsb, lambDsb, fishDsb, shellfishDsb, dairyDsb, eggsDsb } }, dispatch] = globalState()

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>What types of food do you eat?</h1>

            <div className="food" >

                <Link href="/food/beef">
                    <div className={`circle ${beefDsb && "dsb"}`} onClick={() => dispatch({ type: "beefDsb" })}>
                        <img src="/food/beef.svg" alt="" />
                        <p>Beef</p>
                    </div>
                </Link>

                <Link href="/food/pork">
                    <div className={`circle ${porkDsb && "dsb"}`} onClick={() => dispatch({ type: "porkDsb" })}>
                        <img src="/food/pork.svg" alt="" />
                        <p>Pork</p>
                    </div>
                </Link>

                <Link href="/food/chicken">
                    <div className={`circle ${chickenDsb && "dsb"}`} onClick={() => dispatch({ type: "chickenDsb" })}>
                        <img src="/food/chicken.svg" alt="" />
                        <p>Chicken</p>
                    </div>
                </Link>

                <Link href="/food/lamb">
                    <div className={`circle ${lambDsb && "dsb"}`} onClick={() => dispatch({ type: "lambDsb" })}>
                        <img src="/food/lamb.svg" alt="" />
                        <p>Lamb</p>
                    </div>
                </Link>

                <Link href="/food/fish">
                    <div className={`circle ${fishDsb && "dsb"}`} onClick={() => dispatch({ type: "fishDsb" })}>
                        <img src="/food/fish.svg" alt="" />
                        <p>Fish</p>
                    </div>
                </Link>

                <Link href="/food/shellfish">
                    <div className={`circle ${shellfishDsb && "dsb"}`} onClick={() => dispatch({ type: "shellfishDsb" })}>
                        <img src="/food/shellfish.svg" alt="" />
                        <p>Shellfish</p>
                    </div>
                </Link>
                <Link href="/food/dairy">
                    <div className={`circle ${dairyDsb && "dsb"}`} onClick={() => dispatch({ type: "dairyDsb" })}>
                        <img src="/food/dairy.svg" alt="" />
                        <p>Dairy</p>
                    </div>
                </Link>
                <Link href="/food/eggs">
                    <div className={`circle ${eggsDsb && "dsb"}`} onClick={() => dispatch({ type: "eggsDsb" })}>
                        <img src="/food/eggs.svg" alt="" />
                        <p>Eggs</p>
                    </div>
                </Link>

            </div>

            <Link href="/purchase/clothes">
                <button>Next</button>
            </Link>

        </motion.div>
    )
}
