import React from 'react'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import VideoCard from '../../Components/VideoCard/VideoCard'
import './SearchPage.css'

function SearchPage() {
    return (
        <div className="search-page">
            <BreadCrumb />
            <div className="divider"></div>
            <div className="video-list">
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default SearchPage
