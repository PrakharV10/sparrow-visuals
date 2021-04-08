import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/Video-Context'
import './HomePage.css'

function HomePage() {

    const { state: { isUserLoggedIn } } = useAuth();

    return (
        <div className="home-page">
            <div className="hero-section image-overlay">
                <div className="hero-text">
                    Step into the World of Graphic Designing, <br /> Where Everything is as Beautiful <br/> As you Imagine it to be.
                </div>
                <div className="hero-button">
                    {!isUserLoggedIn && <Link to="/login">
                        <button className="btn btn-simple-pink">LOG IN</button>
                    </Link>}
                    <Link to="/explore">
                        <button className="btn btn-invert">EXPLORE</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
