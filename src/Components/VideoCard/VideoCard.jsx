import React from 'react'
import { useRoute } from '../../Context/Video-Context';
import './VideoCard.css'

function VideoCard() {

    const { setRoute } = useRoute();

    return (
        <div
            onClick = {() => setRoute("VideoPlay")}
            className="video-card">
            <div className="video-thumbnail">
                <img src="https://images.unsplash.com/photo-1610714872434-3efb46a5c258?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="thumbnail" className="rsp-img" />
                <div className="duration-tag">
                    2:09
                </div>
            </div>
            <div className="video-desc">
                <div className="title">
                    Baby Yoda Being Adorable
                </div>
                <div className="views">
                    15M views
                </div>
                <div className="channel">
                    <img src="https://www.refinery29.com/images/10267701.jpg" alt="avatar" className="avatar sm" />
                    GroguMando
                </div>
                <div className="caption">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
        </div>
    )
}

export default VideoCard
