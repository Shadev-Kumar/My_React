import { useEffect, useState } from 'react'

const User = ({ name }) => {
  const [count] = useState(0)

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log('Namaste React op')
    // }, 1000)
    // console.log('useEffect')

    // return () => {
    //   clearInterval(timer)
    //   console.log('useEffect returned')
    // }
  }, [])
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Functional Component</h2>
      <h2>Name: {name}</h2>
      <h2>Location: Bbsr</h2>
      <h2>Twitter: Shadevkumar20</h2>
    </div>
  )
}

export default User
