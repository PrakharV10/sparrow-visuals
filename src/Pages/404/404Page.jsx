import React from 'react'
import { Link } from 'react-router-dom'


import './404Page.css'

function NotFoundPage() {
    return (
        <div className="not-found-bg">
            <div className="not-found">
                <h1 className="heading">
                    404
                </h1>
                <div className="sub-text">
                    The page you are looking for, is not available!
                </div>
                <Link to = "/">
                    <button className="btn btn-pink">HOME</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage
