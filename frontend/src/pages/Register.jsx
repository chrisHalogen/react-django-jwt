import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext"


const Register = () => {
  const [full_name, setFull_name] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const {registerUser} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(full_name)
    console.log(email)
    console.log(username)

    registerUser(full_name, email, username, password, password2)
  }

  return (
    <div className='register'>
      <h1>Register</h1>
      <p>Create a new account</p>

      <form>
        <label>Full Name:</label>
        <input 
          type="text" 
          name="full_name"
          onChange={(e)=>setFull_name(e.target.value)}
          required />

        <label>Email:</label>
        <input 
          type="email" 
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          required />

        <label>Username:</label>
        <input 
          type="text" 
          name="username"
          onChange={(e)=>setUsername(e.target.value)}
          required />

        <label>Password:</label>
        <input 
          type="password" 
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          required />

        <label>Confirm Password:</label>
        <input 
          type="password" 
          name="password2"
          onChange={(e)=>setPassword2(e.target.value)}
          required />

        <div className='btn-container'>
          <button onClick={handleSubmit} type='button'>Register</button>
        </div>
        <span>Already Have an Account; 
          <Link to="/login">Login</Link>
        </span>

      </form>
    </div>
  )
}

export default Register