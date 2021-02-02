
import Link from 'next/link'
import { globalState } from '../component/StateData'

export default function Transport() {

    const [{ carDsb }, dispatch] = globalState()

    console.log(carDsb);

    return (
        <div>
            <h1>Which of these do you normally use?</h1>

            <div className="box">
                <Link href="/transport/car">
                    <div className={`circle ${carDsb && "dsb"}`} onClick={() => dispatch({ type: "mkCarDsb" })}>
                        Car
                </div>
                </Link>

                <div className="circle">
                    Motorbike
                </div>

                <div className="circle">
                    Train
                </div>

                <div className="circle">
                    Tram
                </div>

                <div className="circle">
                    Underground
                </div>

                <div className="circle">
                    Bus
                </div>

            </div>

            <Link href="/flight">
                <button>I don't use any of them</button>
            </Link>

        </div>
    )
}
