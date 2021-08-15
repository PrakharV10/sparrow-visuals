import React from 'react'

import './VideoCard.css'

function VideoCard({title, thumbnail, channelImage, channelName, description}) {

    return (
        <div
            className="video-card">
            <div className="video-thumbnail">
                <img src={thumbnail} alt="thumbnail" className="rsp-img" />
                <div className="duration-tag">
                    2:09
                </div>
            </div>
            <div className="video-desc">
                <div className="title">
                    {title}
                </div>
                <div className="views">
                    15M views
                </div>
                <div className="channel">
                    <img src={channelImage} alt="avatar" className="avatar sm" />
                    {channelName}
                </div>
                <div className="caption">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default VideoCard
