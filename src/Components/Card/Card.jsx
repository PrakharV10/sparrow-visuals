import React from 'react'
import './Card.css'

function Card({current}) {
    return (
        <div className="cards">
            <img className="card-image" src={current.thumbnail} alt="card-pic" />
            <div className="card-title">
                {current.title}
            </div>
            <div className="card-text">
                Topic : {current.category}
            </div>
        </div>
    )
}

export default Card
