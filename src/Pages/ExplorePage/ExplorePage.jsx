import React from 'react'
import { Link } from 'react-router-dom';

import Card from '../../Components/Card/Card'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { data } from '../../Data/Data'
import './ExplorePage.css'

function ExplorePage() {
    return (
        <div className="explore-page wrapper">
            <div className="search-container">
                <span>EXPLORE</span>
                <SearchBar />
            </div>

            <div className="grid-box">
                {
                    data.map((video) => {
                        return (
                            <Link
                                state={{ course: video }}
                                to={{
                                    pathname: "/watch",
                                    search: `?v=${video.id}`
                                }}
                                key={video.id}>
                                <Card current={video}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExplorePage
