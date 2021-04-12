import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../../Context/Video-Context';

function ProfileDetailBox({currentState, setCurrentState}) {

    const { state: { currentUserId }} = useAuth();
    const [message, setMessage] = useState();

    async function serverChangeUsername() {
        let data = await axios.post(`https://Sparrow-Media-Authentication.prakhar10v.repl.co/users/${currentUserId}`, {
            username: currentState.username,
            email: currentState.email,
            password : currentState.actualPassword
        })
        if (data) {
            setMessage(true)
        } else {
            setMessage(false)            
        }
    }
    
    function submitHandler(e) {
        e.preventDefault();
        if (currentState.username.trim() !== 0 && currentState.email.trim() !== 0) {
            serverChangeUsername()
        }
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className="profile-container">
            <div className="head">
                Profile Details
                {message === true && <svg width="1em" height="1em" viewBox="0 0 15 15"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827z" fill="#15CD72"></path></g></svg>}
                {message === false && <svg width="1em" height="1em" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z" fill="#ED4F32"></path></svg>}
            </div>
            <div className="upper-flex">
                <div className="inp-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setCurrentState({ ...currentState, email: e.target.value })}
                        value={currentState.email}
                        placeholder="email"
                        name="email"
                        type = "email"
                    />
                </div>
            </div>
            <div className="upper-flex">
                <div className="inp-group">
                    <label htmlFor="Name">Name</label>
                    <input
                        onChange = {(e) => setCurrentState({...currentState, username: e.target.value})}
                        value={currentState.username}
                        placeholder="Name"
                        name="Name"
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-outline-pink">SAVE</button>
        </form>
    )
}

export default ProfileDetailBox
