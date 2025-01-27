import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  if(!user) return <h1>Not Logged in</h1>
  return (
    (
      <>
        <h1>Profile : { user.username}</h1>
        <p>More Component</p>
      </>
    )
   
  )
}

export default Profile;