import React from 'react'
import './PlaylistBox.css'

import PlaylistCard from '../PlaylistCard/PlaylistCard';

function PlaylistBox({ current }) {
    
    // const getIndex = current.id[0].indexOf("&")
    // const currentImgURL = current.id[0].slice(0,getIndex)

    return (
        <div className="playlist-card">
            <h2 className="playlist-name">
                {current.name}
            </h2>
            <div className="grid-box">
                {
                    current.id.map((one, index) => {
                        return (
                            <div id={index}>
                                <PlaylistCard current={one}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PlaylistBox
