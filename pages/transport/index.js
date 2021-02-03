
import Link from 'next/link'
import { globalState } from '../component/StateData'
import { motion } from 'framer-motion'
export default function Transport() {

    const [{ transport: { carDsb, bikeDsb, trainDsb, tramDsb, undergroundDsb, busDsb } }, dispatch] = globalState()

    console.log(carDsb);

    return (
        <motion.div className="container"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
            <h1>Which of these do you normally use?</h1>

            <div className="transport" >

                <Link href="/transport/car">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "carDsb" })}>
                        <img src="./transport/car.svg" alt="" />
                        <p>Car</p>
                    </div>
                </Link>

                <Link href="/transport/bike">
                    <div className={`circle ${bikeDsb && "dsb"}`} onClick={() => dispatch({ type: "bikeDsb" })}>
                        <img src="./transport/bike.svg" alt="" />
                        <p>Motorbike</p>
                    </div>
                </Link>

                <Link href="/transport/train">
                    <div className={`circle ${trainDsb && "dsb"}`} onClick={() => dispatch({ type: "trainDsb" })}>
                        <img src="./transport/train.svg" alt="" />
                        <p>Train</p>
                    </div>
                </Link>

                <Link href="/transport/tram">
                    <div className={`circle ${tramDsb && "dsb"}`} onClick={() => dispatch({ type: "tramDsb" })}>
                        <img src="./transport/tram.svg" alt="" />
                        <p>Tram</p>
                    </div>
                </Link>

                <Link href="/transport/underground">
                    <div className={`circle ${undergroundDsb && "dsb"}`} onClick={() => dispatch({ type: "undergroundDsb" })}>
                        <img src="./transport/underground.svg" alt="" />
                        <p>Underground</p>
                    </div>
                </Link>

                <Link href="/transport/bus">
                    <div className={`circle ${busDsb && "dsb"}`} onClick={() => dispatch({ type: "busDsb" })}>
                        <img src="./transport/bus.svg" alt="" />
                        <p>Bus</p>
                    </div>
                </Link>

            </div>

            <Link href="/flight">
                <button>Next</button>
            </Link>

        </motion.div>
    )
}
