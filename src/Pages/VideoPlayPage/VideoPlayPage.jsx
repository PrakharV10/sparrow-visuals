import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {useLocation} from 'react-router-dom'
import { useVideo } from '../../Context/Video-Context';
import { searchLikes } from '../../ReusableFunctions/funcs';

import './VideoPlayPage.css'

function VideoPlayPage() {

    const { state: { course } } = useLocation();
    const { state, dispatch } = useVideo();
    const [input, setInput] = useState("");

    function handleLikes() {
        if(searchLikes(state,course) === false){
            dispatch({type : "ADD_TO_LIKES", payload: course})
        } else {
            dispatch({type : "REMOVE_FROM_LIKES", payload : course})
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        if (input.trim().length === 0)
            return
        dispatch({ type: "ADD_NOTE", payload: { input: input, id: course.id } })
        setInput("")
    }
    
    const currentNote =  state.myNotes.find(item => item.id === course.id)

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
                            <button className="btn btn-trans">ADD TO PLAYLIST</button>
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
                <div className="notes-container">
                    <div className="note-header">
                        Take a Note!
                    </div>
                    {currentNote &&
                        <div className="note-display">
                            {
                                currentNote.notes.map((note,index) => {
                                    return (
                                        <div
                                            className= "one-note"
                                            key={index}>{note}</div>
                                    )
                                })
                            }
                        </div>
                    }
                    
                    <form onSubmit={(e) => submitHandler(e)} className="note-input">
                        <input
                            placeholder="Type here.."
                            type="text"
                            value={input}
                            onChange = {(e) => setInput(e.target.value)}
                        />
                        <button style={{display : "none"}} type="submit"></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayPage
