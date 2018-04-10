import React from 'react'
import {render} from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import 'reset-css'

import App from './app'

const rootEl = document.getElementById('app') 

const wrapApp = AppComponent =>
  <AppContainer>
    <AppComponent />
  </AppContainer>

render(wrapApp(App), rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    render(wrapApp(NextApp), rootEl)
  })
}

