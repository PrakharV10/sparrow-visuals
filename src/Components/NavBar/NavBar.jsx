import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="logo">
                DOVE
            </div>
            <div className="right-nav">
                <ul>
                    <li><svg
                        viewBox="0 0 32 32"><path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"></path></svg>
                    </li>
                    <li className="mobile-hide">Home</li>
                    <li className="mobile-hide">Explore</li>
                    <li className="mobile-hide">Playlist</li>
                    <li className="mobile-show">
                        <svg width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2z" fill="currentColor"></path></g></svg>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
