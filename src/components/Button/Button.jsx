import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return <button className="btn">{this.props.title}</button>
  }
}

export default Button
