
import Link from 'next/link'
import { globalState } from '../component/StateData'

export default function Transport() {

    const [{ carDsb }, dispatch] = globalState()

    console.log(carDsb);

    return (
        <div className="container">
            <h1>Which of these do you normally use?</h1>

            <div className="transport">

                <Link href="/transport/car">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "mkCarDsb" })}>
                        <img src="./transport/car.svg" alt="" />
                        <p>Car</p>
                    </div>
                </Link>

                <Link href="/transport/car">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "mkCarDsb" })}>
                        <img src="./transport/bike.svg" alt="" />
                        <p>Motorbike</p>
                    </div>
                </Link>

                <Link href="/transport/car">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "mkCarDsb" })}>
                        <img src="./transport/train.svg" alt="" />
                        <p>Train</p>
                    </div>
                </Link>

                <Link href="/transport/car">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "mkCarDsb" })}>
                        <img src="./transport/tram.svg" alt="" />
                        <p>Tram</p>
                    </div>
                </Link>

                <Link href="/transport/car">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "mkCarDsb" })}>
                        <img src="./transport/underground.svg" alt="" />
                        <p>Underground</p>
                    </div>
                </Link>

                <Link href="/transport/car">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "mkCarDsb" })}>
                        <img src="./transport/bus.svg" alt="" />
                        <p>Bus</p>
                    </div>
                </Link>

            </div>

            <Link href="/flight">
                <button>I don't use any of them</button>
            </Link>

        </div>
    )
}
