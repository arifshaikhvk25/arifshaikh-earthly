import React, { useState } from 'react'
// import img from "../../imports/img"
import img from "../../imports/img"
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr"
const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <nav className="navbar">

                <div className="navbar-logo">
                    <img src={img.logo} alt="logo" style={{ width: 70 }} />
                    <span className='span'>Earthly</span>
                </div>

                <ul className='navbar-links'>
                    <li> <a href="#home">Home</a> </li>
                    <li> <a href="#about">About</a> </li>
                    <li> <a href="#contact">Contact</a> </li>
                    <li> <a href="#services">Services</a> </li>
                </ul>

                <div className="navbar-smallscreen">

                    <GiHamburgerMenu color='black' fontSize={25} onClick={() => setToggle(true)} />

                    {
                        toggle && (    /* if only toggle will true it will show all this  */

                            <div className="navbar-smallscreen-overlay slide-bottom">
                                <GrClose className='close' fontSize={25} onClick={()=>{setToggle(false)}} />

                                <ul className='navbar-smallscreen-links'>
                                    <li> <a href="#home" onClick={()=>{setToggle(false)}} >Home</a> </li>
                                    <li> <a href="#about" onClick={()=>{setToggle(false)}} >About</a> </li>
                                    <li> <a href="#contact" onClick={()=>{setToggle(false)}} >Contact</a> </li>
                                    <li> <a href="#services" onClick={()=>{setToggle(false)}} >Services</a> </li>
                                </ul>

                            </div>

                        )
                    }
                </div>


            </nav>
        </div>
    )
}

export default Navbar
