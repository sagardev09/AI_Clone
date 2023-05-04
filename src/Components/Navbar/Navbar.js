import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import "./Navbar.css"
import logo from "../../assets/logo.svg"

const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false)

    const Menu = () => (
        <>
            <p><a href='#home'>HOME</a></p>
            <p><a href='#wgpt3'>What Is GPT</a></p>
            <p><a href='#possibility'>Open AI</a></p>
            <p><a href='#features'>Case Studies</a></p>
            <p><a href='#blog'>Library</a></p>
        </>
    )
    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links-container">
                    <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => settoggleMenu(false)} /> :
                    <RiMenu3Line color="#fff" size={27} onClick={() => settoggleMenu(true)} />}
            </div>
            {toggleMenu && (
                <div className='gpt3__navbar-menu_container scale-up-center'>
                    <div className='gpt3__navbar-menu_container_links'>
                        <Menu />
                        <div className='gpt3__navbar-menu_container-links-sign'>
                            <p>Sign in</p>
                            <button type='button'>Sign up</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
