import React from 'react'

import Button from '../../components/Button/Button'

import logo from '../../assets/react.svg'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <p>Sample text</p>
        <Button title="Sample button" />
        <img className="home__logo" src={logo} />
      </div>
    )
  }
}

export default Home
