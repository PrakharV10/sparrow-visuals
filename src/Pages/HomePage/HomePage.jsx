import React from 'react'
import CourseSection from '../../Components/CourseSection/CourseSection'
import LikeSection from '../../Components/LikeSection/LikeSection'
import PlaylistSection from '../../Components/PlaylistSection/PlaylistSection'
import {courseList} from '../../Data/Data.js'
import './HomePage.css'

function HomePage() {

    return (
        <div className="home-page wrapper">
            <CourseSection
                courseList={courseList} />
            <div className="divider"></div>
            <LikeSection />
            <div className="divider"></div>
            <PlaylistSection />
            <div className="divider"></div>
        </div>
    )
}

export default HomePage
