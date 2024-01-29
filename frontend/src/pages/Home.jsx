import { jwtDecode } from 'jwt-decode'
import React, {useContext} from 'react'
import AuthContext from "../context/AuthContext"
import { Link } from 'react-router-dom'

const Home = () => {
  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (user){
    const decoded = jwtDecode(token)
    let user_id = decoded.user_id
  }

  return (
    <div className='Home'>
      <h1>Homepage</h1>
      <p>This is the Homepage</p>

      {user ?
        <>
          <span>You are logged in</span>
          <br />
          <br />
          <Link to="/dashboard">Dashboard</Link>
          <br />
          <Link onClick={logoutUser}>Logout</Link>
        </>
      :
        <>
          <span>You are not logged in</span>
          <br />
          <br />
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
        </>
      }
    </div>
  )
}

export default Home