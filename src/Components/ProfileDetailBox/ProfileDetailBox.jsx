import React, { useState } from 'react'
import { useAuth } from '../../Context/Video-Context';

function ProfileDetailBox() {

    const { state : {userLoginDetails , currentUserId}, dispatch } = useAuth();

    const currentUser = userLoginDetails.find(one => one.userId === currentUserId)
    const [currentState, setCurrentState] = useState({
        username: currentUser.username,
        email: currentUser.email,
    })
    
    function submitHandler(e) {
        e.preventDefault();
        if (currentState.username.trim() !== 0 && currentState.email.trim() !== 0) {
            dispatch({type : "SAVE_EDIT_USERNAME_EMAIL", payload : currentState})
        }
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className="profile-container">
            <div className="head">
                Profile Details
            </div>
            <div className="upper-flex">
                <div className="inp-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setCurrentState({ ...currentState, email: e.target.value })}
                        value={currentState.email}
                        placeholder="email"
                        name="email"
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
