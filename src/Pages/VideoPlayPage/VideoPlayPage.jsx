import React from 'react'
import ReactPlayer from 'react-player'
import {useLocation} from 'react-router-dom'

import './VideoPlayPage.css'

function VideoPlayPage() {

    
    const {state : {course}} = useLocation();
    
    return (
        <div className="video-play">
            <div className="left-flex">
                <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    url={`https://www.youtube.com/watch?v=${course.id}`}
                />
                <div className="video-details">
                    <div className="name">
                        {course.title}
                    </div>
                    <div className="channel">
                        <img src={course.channelImage} alt="avatar" className="avatar sm" />
                        {course.channelName}
                    </div>
                    <div className="caption">
                        {course.description}
                    </div>
                </div>
            </div>

            <div className="right-flex">
                
            </div>
        </div>
    )
}

export default VideoPlayPage
