
import Link from 'next/link'
import { globalState } from '../component/StateData'
import { motion } from 'framer-motion'
export default function Food() {

    const [{ transport: { carDsb, bikeDsb, trainDsb, tramDsb, undergroundDsb, busDsb } }, dispatch] = globalState()

    console.log(carDsb);

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>What types of food do you eat?</h1>

            <div className="food" >

                <Link href="/food/beef">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "carDsb" })}>
                        <img src="/food/beef.svg" alt="" />
                        <p>Beef</p>
                    </div>
                </Link>

                <Link href="/transport/bike">
                    <div className={`circle ${bikeDsb && "dsb"}`} onClick={() => dispatch({ type: "bikeDsb" })}>
                        <img src="/food/pork.svg" alt="" />
                        <p>Pork</p>
                    </div>
                </Link>

                <Link href="/transport/train">
                    <div className={`circle ${trainDsb && "dsb"}`} onClick={() => dispatch({ type: "trainDsb" })}>
                        <img src="/food/chicken.svg" alt="" />
                        <p>Chicken</p>
                    </div>
                </Link>

                <Link href="/transport/tram">
                    <div className={`circle ${tramDsb && "dsb"}`} onClick={() => dispatch({ type: "tramDsb" })}>
                        <img src="/food/lamb.svg" alt="" />
                        <p>Lamb</p>
                    </div>
                </Link>

                <Link href="/transport/underground">
                    <div className={`circle ${undergroundDsb && "dsb"}`} onClick={() => dispatch({ type: "undergroundDsb" })}>
                        <img src="/food/fish.svg" alt="" />
                        <p>Fish</p>
                    </div>
                </Link>

                <Link href="/transport/bus">
                    <div className={`circle ${busDsb && "dsb"}`} onClick={() => dispatch({ type: "busDsb" })}>
                        <img src="/food/shellfish.svg" alt="" />
                        <p>Shellfish</p>
                    </div>
                </Link>
                <Link href="/transport/bus">
                    <div className={`circle ${busDsb && "dsb"}`} onClick={() => dispatch({ type: "busDsb" })}>
                        <img src="/food/dairy.svg" alt="" />
                        <p>Dairy</p>
                    </div>
                </Link>
                <Link href="/transport/bus">
                    <div className={`circle ${busDsb && "dsb"}`} onClick={() => dispatch({ type: "busDsb" })}>
                        <img src="/food/eggs.svg" alt="" />
                        <p>Eggs</p>
                    </div>
                </Link>

            </div>

            <Link href="/flight">
                <button>Next</button>
            </Link>

        </motion.div>
    )
}
