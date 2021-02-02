import { globalState } from "./StateData"
export default function CarbonScore() {

    const [{ score },] = globalState()

    return (
        <div className="container">
            <div className="score">
                <img src="/footprint.png" alt="" />
                <h6>{score} tonnes</h6>
            </div>
        </div>
    )
}
