import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './PAGES/Homepage/Home'
import Profile from './Profile/Profile'
import Login from './Login/Login'
import Signup from './Login/Signup'
import ForgotPassword from './Login/ForgotPassword'
import Cart from './cart/cart'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}
export default App