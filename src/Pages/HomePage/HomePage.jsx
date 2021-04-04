import React from 'react'
import CourseSection from '../../Components/CourseSection/CourseSection'
import LikeSection from '../../Components/LikeSection/LikeSection'
import { useVideo } from '../../Context/Video-Context'
import {courseList} from '../../Data/Data.js'
import './HomePage.css'

function HomePage() {

    const { state } = useVideo();

    return (
        <div className="home-page wrapper">
            <CourseSection
                courseList={courseList} />
            <div className="divider"></div>
            <LikeSection />
            <div className="divider"></div>
        </div>
    )
}

export default HomePage
