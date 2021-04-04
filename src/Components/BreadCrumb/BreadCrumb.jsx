import React from 'react'
import './BreadCrumb.css'

function BreadCrumb({courseName}) {
    return (
        <div className="bread-crumb">
            <div className="route-title">
                
            </div>
            {courseName}
        </div>
    )
}

export default BreadCrumb
