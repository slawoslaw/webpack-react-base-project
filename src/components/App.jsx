import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './Home'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App
