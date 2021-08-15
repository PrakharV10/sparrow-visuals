import React from 'react'
import './BreadCrumb.css'

function BreadCrumb({courseName, title=""}) {
    return (
        <div className="bread-crumb">
            <div className="route-title">
                {title}
            </div>
            {courseName}
        </div>
    )
}

export default BreadCrumb
