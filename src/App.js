import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Start from './Pages/Start'
import Answer from './Pages/Answer'
import Reward from './Pages/Reward'

const App = () => (
  <Router>
    <div className="App">
      <div className="blur-block"></div>
      <Route exact path="/" component={Start}/>
      <Route path="/answer" component={Answer}/>
      <Route path="/reward" component={Reward}/>
    </div>
  </Router>
)
export default App