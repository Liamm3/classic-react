import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Typography from 'typography'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666
})

typography.injectStyles()

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
