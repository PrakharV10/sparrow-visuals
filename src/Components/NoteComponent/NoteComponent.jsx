import React, { useState } from 'react'
import { useAuth, useVideo } from '../../Context/Video-Context';
import ReactMarkdown from 'react-markdown'

import './NoteComponent.css'
import LoginModal from '../LoginModal/LoginModal';

function NoteComponent({ course }) {

    const { state, dispatch } = useVideo();
    const [input, setInput] = useState("");
    const [loginModal, setLoginModal] = useState(false);
    const { state: { iseUserLoggedIn } } = useAuth();
    
    function submitHandler(e) {
        e.preventDefault();
        if (iseUserLoggedIn) {
            if (input.trim().length === 0)
                return
            dispatch({ type: "ADD_NOTE", payload: { input: input, id: course.id } })
            setInput("")   
        } else {
            setLoginModal(true)
        }
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
                                    key={index}><ReactMarkdown source= {note} /></div>
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
                    onChange={(e) => setInput(e.target.value)}
                />
                <button style={{ display: "none" }} type="submit"></button>
                <LoginModal loginModal = {loginModal} setLoginModal = {setLoginModal} />
            </form> 
        </div>
    )
}

export default NoteComponent
