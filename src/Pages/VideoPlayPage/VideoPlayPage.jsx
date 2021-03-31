import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayPage.css'

function VideoPlayPage() {
    return (
        <div className="video-play">
            <div className="player">
                <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    url="https://www.youtube.com/watch?v=3jf_Z68c4LQ"
                />
            </div>
            <div className="video-details">
                <div className="name">
                    My Hero Academia OST - Might+U
                </div>
                <div className="channel">
                    <img src="https://www.refinery29.com/images/10267701.jpg" alt="avatar" className="avatar sm" />
                    GroguMando
                </div>
                <div className="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    )
}

export default VideoPlayPage
