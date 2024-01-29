import React, {useState, useContext, useEffect} from 'react'
import useAxios from "../utils/useAxios"
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const Dashboard = () => {
  const [response, setResponse] = useState("")
  const api = useAxios();
  const token = localStorage.getItem("authTokens")
  const {logoutUser} = useContext(AuthContext)

  
  const decode = jwtDecode(token)
  // console.log(decode)
  let user_id = decode.user_id
  let username = decode.username
  let email = decode.email
  let full_name = decode.full_name
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/")
        setResponse(response.data.response)

      } catch (error) {
        console.log(error)
        setResponse("Something Went Wrong")
      }
    }
    
    fetchData()
    
  }, [])
  

  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <p>Welcome, {username}</p>
      <span>Your Cridentials are as follows</span>
      <br />
      <span>Username: {username}</span>
      <br />
      <span>UserID: {user_id}</span>
      <br />
      <span>Full Name: {full_name}</span>
      <br />
      <span>Email: {email}</span>
      <br /><br />
      <span>{response}</span>
      <br /><br />
      <Link to="/">Home</Link>
      <br />
      <Link onClick={logoutUser}>Logout</Link>
      
    </div>
  )
}

export default Dashboard