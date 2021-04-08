import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            <div className="hero-section image-overlay">
                <div className="hero-text">
                    Step into the World of Graphic Designing, <br /> Where Everything is as Beautiful <br/> As you Imagine it to be.
                </div>
                <div className="hero-button">
                    <Link to="/signup">
                        <button className="btn btn-simple-pink">SIGN UP</button>
                    </Link>
                    <Link to="/explore">
                        <button className="btn btn-invert">EXPLORE</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
