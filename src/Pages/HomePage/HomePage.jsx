import React from 'react'
import CourseSection from '../../Components/CourseSection/CourseSection'
import {data,courseList} from '../../Data/Data.js'
import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page wrapper">
            <CourseSection
                data = {data}
                courseList={courseList} />
            <div className="divider"></div>
        </div>
    )
}

export default HomePage
