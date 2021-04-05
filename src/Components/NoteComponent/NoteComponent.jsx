import React, { useState } from 'react'
import { useVideo } from '../../Context/Video-Context';

import './NoteComponent.css'

function NoteComponent({course }) {

    const { state, dispatch } = useVideo();
    const [input, setInput] = useState("");
    
    function submitHandler(e) {
        e.preventDefault();
        if (input.trim().length === 0)
            return
        dispatch({ type: "ADD_NOTE", payload: { input: input, id: course.id } })
        setInput("")
    }

    const currentNote =  state.myNotes.find(item => item.id === course.id)

    return (
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
    )
}

export default NoteComponent
