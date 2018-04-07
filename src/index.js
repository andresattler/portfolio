import React from 'react'
import {render} from 'react-dom'

import Intro from './components/Intro'
import Projects from './components/Projects/'

const App = () => (
  <div>
    <Intro />
    <Projects />
  </div>
)
render(<App />, document.getElementById('app'))
