import React from 'react'
import { Link } from 'react-router-dom';

import { data } from '../../Data/Data'


function PlaylistCard({ current }) {

    const currVid = data.find(item => item.id === current)
    
    return (
        <div>
            <Link
                state={{ course: currVid }}
            to={{
                pathname: "/watch",
                search: `?v=${currVid.id}`
            }}
            key={currVid.id}
            className="cards">
                <img className="card-image" src={currVid.thumbnail} alt="card-pic" />
                <div className="card-title">
                    {currVid.title}
                </div>
            </Link>
        </div>
    )
}

export default PlaylistCard
