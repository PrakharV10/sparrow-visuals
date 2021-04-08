import React, { useState } from 'react'
import { useAuth } from '../../Context/Video-Context';

function ChangePasswordBox() {
    
    const { state : {userLoginDetails , currentUserId}, dispatch } = useAuth();

    const currentUser = userLoginDetails.find(one => one.userId === currentUserId)
    const [currentState, setCurrentState] = useState({
        oldPassword : "",
        newPassword: "",
        confirmPassword : ""
    })

    function submitHandler(e) {
        e.preventDefault();
        if (currentState.oldPassword === currentUser.password && currentState.newPassword === currentState.confirmPassword) {
            dispatch({ type: "SAVE_NEW_PASSWORD", payload: currentState.newPassword })
            setCurrentState({
                oldPassword: "",
                newPassword: "",
                confirmPassword : ""
            })
        }
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className="profile-container">
            <div className="head">
                Change Password
            </div>
            <div className="upper-flex">
                <div className="inp-group">
                    <label htmlFor="old password">Old Password</label>
                    <input
                        autoComplete = "off"
                        value = {currentState.oldPassword}
                        onChange = {(e) => setCurrentState({...currentState, oldPassword: e.target.value})}
                        name="old password" />
                </div>
                <div className="inp-group">
                    <label htmlFor="New Password">New Password</label>
                    <input
                        autoComplete = "off"
                        value={currentState.newPassword}
                        onChange = {(e) => setCurrentState({...currentState, newPassword: e.target.value})}
                        name="New Password" />
                </div>
            </div>
            <div className="upper-flex">
                <div className="inp-group">
                    <label htmlFor="Confirm New Password">Confirm New Password</label>
                    <input
                        autoComplete = "off"
                        value={currentState.confirmPassword}
                        onChange = {(e) => setCurrentState({...currentState, confirmPassword: e.target.value})}
                        name="Confirm New Password" />
                </div>
            </div>
            <button type="submit" className="btn btn-outline-pink">CHANGE</button>
        </form>
    )
}

export default ChangePasswordBox
