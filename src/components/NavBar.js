import React from 'react'
import logo from '../logo.png'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavBar = () => {
  return (
    <header>
      <Navbar color="danger">
        <NavbarBrand className="text-white"><img src={logo} height="48"className="align-center" alt="logo" /> Input Nurse Availability</NavbarBrand>
      </Navbar>
    </header>
    
  )
}

export default NavBar
