import React, { useState } from 'react'
import './SignupPage.css'

import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/Video-Context'

function SignupPage() {

    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const [localInput, setLocalInput] = useState({
        username: "",
        email: "",
        password : ""
    })

    const [errorMessage, setErrorMessage] = useState("");

    function passwordChecker(e) {
        const currentPass = e.target.value
        if (currentPass.trim().length !== currentPass.length) {
            setErrorMessage("Password cannot have spaces.")
        } else {
            setLocalInput(localInput => ({ ...localInput, password: e.target.value }))
            setErrorMessage("");
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        dispatch({ type: "SAVE_SIGNUP_DETAILS", payload: localInput })
        navigate('/login')
    }

    return (
        <div className="signup-bg image-overlay">
            <div className="mid-container">
                <div className="title">
                    SIGN <span>UP</span>
                </div>
                <form onSubmit={(e) => submitHandler(e)} className="user-field">
                    <input
                        onChange={(e) => setLocalInput(localInput => ({ ...localInput, username: e.target.value }))}
                        value={localInput.username}
                        placeholder="Username"
                        type="text"
                        name="Username" />
                    
                    <input
                        onChange={(e) => setLocalInput(localInput => ({ ...localInput, email: e.target.value }))}
                        value={localInput.email}
                        placeholder="Email"
                        type="text"
                        name="email" />
                    
                    <input
                        onChange={(e) => passwordChecker(e)}
                        value={localInput.password}
                        placeholder="Password"
                        type="password"
                        name="password" />
                    
                    <div className="error-message">{errorMessage}</div>
                    
                    <button type="submit" className="btn btn-outline-pink">SIGN UP</button>
                </form>
                <div className="sub-text">
                    Already Have an Account?
                    <Link to="/login">
                        <span className="text-pink"> Sign in!</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
