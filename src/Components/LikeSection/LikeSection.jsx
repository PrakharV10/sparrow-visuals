import React from 'react'
import { useVideo } from '../../Context/Video-Context'
import { Link } from 'react-router-dom';

import Card from '../Card/Card'

import './LikeSection.css'

function LikeSection() {

    const { state } = useVideo();

    return (
        <div>
            <h1 className="section-title">
                Liked Series
            </h1>
            <div className="grid-box">
                {
                    state.likedVideo.map((vid) => {
                        return (
                            <Link
                                state = {{course : vid}}
                                to={{
                                    pathname: "/watch",
                                    search: `?v=${vid.id}`
                                }}
                                key={vid.id}>
                                <Card current={vid}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LikeSection
