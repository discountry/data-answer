import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Start from './Pages/Start'
import Answer from './Pages/Answer'
import AnswerTwo from './Pages/AnswerTwo'
import AnswerThree from './Pages/AnswerThree'
import Reward from './Pages/Reward'

const App = () => (
  <Router>
    <div className="App">
      <div className="blur-block"></div>
      <Route exact path="/" component={Start}/>
      <Route path="/one" component={Answer}/>
      <Route exact path="/two" component={AnswerTwo}/>
      <Route exact path="/three" component={AnswerThree}/>
      <Route path="/reward" component={Reward}/>
    </div>
  </Router>
)
export default App