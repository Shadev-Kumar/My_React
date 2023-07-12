import { useEffect, useState } from 'react'

const User = ({ name }) => {
  const [count] = useState(0)

  useEffect(() => {
  }, [])
  
  return (
    <div className="user-card mt-2 bg-[#d6ccc2] p-2 rounded-lg">
      <h2>Profile</h2>
      <h2>Name: {name}</h2>
      <h2>Location: Bbsr</h2>
      <h2>Twitter: Shadevkumar20</h2>
    </div>
  )
}

export default User
