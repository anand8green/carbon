import { globalState } from "./StateData"
export default function CarbonScore() {

    const [{ score },] = globalState()

    return (
        <div className="container">
            <div className="score">
                <img src="/footPrint.svg" alt="" />
                <span>{score} tonnes</span>
            </div>
        </div>
    )
}
