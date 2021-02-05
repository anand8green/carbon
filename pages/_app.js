import '../styles/globals.scss'
import '../styles/start.scss'
import '../styles/transport.scss'
import '../styles/flight.scss'
import '../styles/food.scss'
import '../styles/home.scss'
import '../styles/gas.scss'
import '../styles/result.scss'
import CarbonScore from './component/CarbonScore'
import StateData from './component/StateData'

function MyApp({ Component, pageProps }) {
  return <StateData>
    <CarbonScore />
    <Component {...pageProps} />
  </StateData>

}

export default MyApp
