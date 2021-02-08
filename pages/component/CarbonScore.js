import { globalState } from "./StateData"
export default function CarbonScore() {

    const [{ score },] = globalState()

    return (
        <div className="container topBar">
            <div className="greenLogo">
                <img src="/logoGreen.svg" alt="" />
            </div>
            {/* <div className="score">
                <img src="/logoGreen.svg" alt="" />

            </div> */}
            <div className="score">
                <img src="/footPrint.svg" alt="" />
                <span>{score} tonnes</span>
            </div>
        </div>
    )
}
