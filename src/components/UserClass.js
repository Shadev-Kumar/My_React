import React from 'react'

class UserClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'default',
      },
    }
    console.log(this.props.name + ' Child Constructor')
  }

  async componentDidMount() {
    console.log(this.props.name + ' Component Did Mount')
    const response = await fetch('https://api.github.com/users/akshaymarch7')
    const data = await response.json()

    this.setState({
      userInfo: data,
    })

    console.log(data)

    // this.timer = setInterval(() => {
    //   console.log('Namaste React op')
    // }, 1000)
  }

  componentDidUpdate() {
    console.log('Component Did Updated')
  }
  componentWillUnmount() {
    // clearInterval(this.timer)
    console.log('Component Will Unmount')
  }
  render() {
    const { name, location } = this.state.userInfo

    console.log(this.props.name + ' Child Render')

    return (
      <div className="user-card">
        <h2>Class Based Component</h2>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Twitter: Shadevkumar20</h2>
      </div>
    )
  }
}

export default UserClass
