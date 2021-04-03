import React from 'react'
import './HomeSection.css'
import Card from '../../Components/Card/Card'

function HomeSection({title, data}) {
    return (
        <div>
            <h1 className="section-title">{title}</h1>
            <div className="grid-box">
                {
                    [0, 1, 2, 3].map(item => {
                        return (
                            <div className="grid-item">
                                <Card />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeSection
