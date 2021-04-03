import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className="cards">
            <img className="card-image" src="https://images.unsplash.com/photo-1610714872434-3efb46a5c258?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="card-pic" />
            <div className="card-title">
                Introduction to Blender
            </div>
            <div className="card-text">
                Topic : 3D Modelling | Blender
            </div>
        </div>
    )
}

export default Card
