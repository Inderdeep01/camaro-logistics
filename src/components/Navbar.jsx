import React from 'react'
import './Navbar.css'

function NavBar() {
    return (
    <div id="navbar">
        <div id='logo-container'>
            <div id='logo'></div>
        </div>
        <div id='btn-container'>
            <div id='contact-btn' className='btn btn-primary'>Contact&nbsp;Us</div>
            <div id='home-btn' className='btn btn-outline-secondary'>Gallery</div>
            <div id='home-btn' className='btn btn-outline-secondary'>Home</div>
        </div>
    </div>)
}

export default NavBar