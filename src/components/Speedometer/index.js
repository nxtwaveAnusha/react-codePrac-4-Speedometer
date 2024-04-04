import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onDecreament = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  onIncreament = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-sizeing"
        />
        <h1 className="speed-increament">Speed is {count}mph</h1>
        <p className="reading-limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="accelerate-btn" onClick={this.onIncreament}>
            Accelerate
          </button>
          <button className="break-btn" onClick={this.onDecreament}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
