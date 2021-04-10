import React from 'react'
import {Link, useParams } from 'react-router-dom'
import {data} from '../../Data/Data'

import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import VideoCard from '../../Components/VideoCard/VideoCard'
import './CoursePage.css'

function CoursePage() {

    const { courseUrl } = useParams();

    const current = data.filter((item) => item.url === courseUrl);

    return (
        <div className="course-page">
            <BreadCrumb courseName = {current[0].category} />
            <div className="divider"></div>
            <div className="video-list">
                {
                    current.map(course => {
                        return (
                            <Link
                                to = {`/watch/${course.id}`}
                                key={course.id}
                            >
                                <VideoCard {...course}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CoursePage
