import '../styles/globals.css'
import '../styles/Home.css'
import CarbonScore from './component/CarbonScore'
import StateData from './component/StateData'

function MyApp({ Component, pageProps }) {
  return <StateData>
    <CarbonScore />
    <Component {...pageProps} />
  </StateData>

}

export default MyApp
