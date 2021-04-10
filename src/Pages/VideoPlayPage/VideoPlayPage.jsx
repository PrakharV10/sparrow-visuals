import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {useParams} from 'react-router-dom'
import NoteComponent from '../../Components/NoteComponent/NoteComponent';
import PlaylistModal from '../../Components/PlaylistModal/PlaylistModal';
import { useVideo } from '../../Context/Video-Context';
import { data } from '../../Data/Data';
import { searchLikes } from '../../ReusableFunctions/funcs';

import './VideoPlayPage.css'

function VideoPlayPage() {

    const { videoID } = useParams();
    const { state, dispatch } = useVideo();
    const [showModal, setShowModal] = useState(false);

    const course = data.find((one) => one.id === videoID)

    function handleLikes() {
        if(searchLikes(state,course) === false){
            dispatch({type : "ADD_TO_LIKES", payload: course})
        } else {
            dispatch({type : "REMOVE_FROM_LIKES", payload : course})
        }
    }

    return (
        <div className="video-play">
            <div className="left-flex">
                <div className="video-player">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        url={`https://www.youtube.com/watch?v=${course.id}`}
                    />
                </div>
                <div className="video-details">
                    <div className="details-head">
                        <div className="name">
                            {course.title}
                        </div>
                        <div className="button-group">
                            <button
                                onClick = {handleLikes}
                                className={searchLikes(state, course) === true ? "btn btn-trans clicked" : "btn btn-trans"}
                            >
                                {searchLikes(state,course) ? "LIKED" : "LIKE"}
                            </button>
                            <button
                                onClick = {() => setShowModal(true)}
                                className="btn btn-trans"
                            >
                                ADD TO PLAYLIST
                            </button>
                            <PlaylistModal course={course} showModal={showModal} setShowModal={setShowModal} />
                        </div>
                    </div>
                    <div className="channel">
                        <img
                            src={course.channelImage} alt="avatar" className="avatar sm" />
                        {course.channelName}
                    </div>
                    <div className="caption">
                        {course.description}
                    </div>
                </div>
            </div>

            <div className="right-flex">
                <NoteComponent course={course}/>
            </div>
        </div>
    )
}

export default VideoPlayPage
