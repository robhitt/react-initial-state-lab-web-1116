import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    // The initial value of secondsLeft is set by passing in a initialCount prop to the Bomb component.

    // props.initialCount = 120
    this.state = { secondsLeft: this.props.initialCount }
  }

  render() {
    if (this.state.secondsLeft === 0) {
      return(
        <div>Boom!</div>
      )
    } else {
      return(
        <div>{ this.state.secondsLeft } seconds left before I go boom!</div>
      )
    }
  }
}

module.exports = Bomb
