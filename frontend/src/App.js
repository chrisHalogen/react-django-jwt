import React from 'react'
import "./app.scss"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./utils/ProtectedRoute"
import { AuthProvider } from './context/AuthContext'
import {Dashboard, Home, Login, Register} from "./pages"


const App = () => {
  return (
    <div className='App'>
        <div className='container'>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route 
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" exact element={<Home />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    </div>
  )
}

export default App