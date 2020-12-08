import '../styles/globals.css'
import 'antd/dist/antd.css'

import AppStore from '../AppStore'

function MyApp({ Component, pageProps }) {
  return (
    <AppStore>
      <Component {...pageProps} />
    </AppStore>
  )
}

export default MyApp
