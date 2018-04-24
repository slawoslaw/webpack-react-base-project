import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {Main, Navbar} from './layout'
import Home from './Home'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar>Sample navbar</Navbar>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Main>
      </div>
    )
  }
}

export default App
