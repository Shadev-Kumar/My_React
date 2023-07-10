import { Component, useEffect } from 'react'
import User from './User'

class About extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>Food Delivery App</h1>
        <h2>Hi i am Learning React.</h2>
        <User name={'Shadev Kumar'} location={'Bbsr'} />{' '}
      </div>
    )
  }
}

export default About
