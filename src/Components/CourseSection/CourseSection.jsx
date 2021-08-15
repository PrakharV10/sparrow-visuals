import React from 'react'
import { Link } from 'react-router-dom';

import './CourseSection.css'

function CourseSection({courseList }) {

    return (
        <div className="course-section">
            <h1 className="section-title">Courses</h1>
            <div className="grid-box">
                {
                    courseList.map((course,index) => {
                        return (
                            <Link to={`/courses/${course.url}`} className="card" key={index}>
                                {course.name}    
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CourseSection
