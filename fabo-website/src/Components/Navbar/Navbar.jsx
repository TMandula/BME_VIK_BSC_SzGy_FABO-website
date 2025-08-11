import React from 'react'
import './Navbar.css'
import logo from '../../assets/Budapest_tajkep_Lanchiddal.jpg'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
    </nav>
  )
}

export default Navbar
