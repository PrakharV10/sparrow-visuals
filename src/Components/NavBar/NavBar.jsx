import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar({ showMenu, setShowMenu }) {

    return (
        <nav className="nav-bar">
            <NavLink to="/" className="logo">
                DOVE
            </NavLink>
            <div className="right-nav">
                <ul>
                    <NavLink to="/" className="mobile-hide">Home</NavLink>
                    <NavLink to="/explore" className="mobile-hide">Explore</NavLink>
                    <NavLink to="/library" className="mobile-hide">Library</NavLink>
                    <li
                        onClick = {() => setShowMenu(!showMenu)}
                        className="mobile-show">
                        {
                            showMenu ? <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91z" fill="currentColor"></path></svg> :
                            
                            <svg width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2z" fill="currentColor"></path></g></svg>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
