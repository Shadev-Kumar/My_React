import { Component, useEffect } from 'react'
import UserClass from './Userclass'
import User from './User'

class About extends Component {
  constructor(props) {
    super(props)
    // console.log('Parent Constructor')
  }
  componentDidMount() {
    // console.log('Parent Component Did Mount')
  }
  render() {
    // console.log('Parent Render')
    return (
      <div>
        <h1>Food Delivery App</h1>
        <h2>Hi i am Learning React.</h2>
        <UserClass name={'Hello'} location={'Bbsr'} />{' '}
      </div>
    )
  }
}

export default About
