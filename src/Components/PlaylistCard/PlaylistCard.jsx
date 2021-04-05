import React from 'react'

function PlaylistCard({ current }) {
    
    return (
        <div className="cards">
            <img className="card-image" alt="card-pic" />
            <div className="card-title">
                {current.title}
            </div>
        </div>
    )
}

export default PlaylistCard
