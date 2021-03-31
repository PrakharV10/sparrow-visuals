import React from 'react'
import './SideBar.css'

function SideBar({showMenu}) {
    return (
        <div className={showMenu ? "side-bar-bg show" : "side-bar-bg"}>
            <div className={showMenu ? "side-bar view" : "side-bar"}>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Playlist</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
