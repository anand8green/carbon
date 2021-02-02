import { globalState } from "./StateData"

export default function CarbonScore() {

    const [{ score },] = globalState()

    return (
        <div>
            <h6>Carbon Score:{score}</h6>
        </div>
    )
}
