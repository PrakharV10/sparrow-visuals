import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/Video-Context'
import './LogInPage.css'

function LogInPage() {

    const { state: { isUserLoggedIn }, dispatch } = useAuth();
    const { state } = useLocation();
    const navigate = useNavigate();

    const [localInput, setLocalInput] = useState({
        email: "",
        password : ""
    })

    function submitHandler(e) {
        e.preventDefault();
        dispatch({ type: "CHECK_LOGIN_DETAILS", payload: localInput })
    }

    useEffect(() => {
        isUserLoggedIn === true && navigate(state?.from ? state.from : "/")
    },[])

    return (
        <div className="signin-bg image-overlay">
            <div className="mid-container">
                <div className="title">
                    LOG <span>IN</span>
                </div>
                <form onSubmit={(e) => submitHandler(e)} className="user-field">
                    <input
                        onChange={(e) => setLocalInput({ ...localInput, email: e.target.value })}
                        value = {localInput.email}
                        placeholder="Email"
                        type="text"
                        name="username" />
                    <input
                        onChange={(e) => setLocalInput({ ...localInput, password: e.target.value })}
                        value = {localInput.password}
                        placeholder="Password"
                        type="password"
                        name="password" />
                    
                    <button type="submit" className="btn btn-outline-pink">
                        {isUserLoggedIn ? 'LOGGED IN' : 'LOG IN'}
                    </button>
                </form>
                <div className="sub-text">
                    Don't have an account?
                    <Link to="/signup">
                        <span className="text-pink"> Sign up!</span>
                    </Link>
                </div>
                <div className="text-pink">
                    Forgot Password?
                </div>
            </div>
        </div>
    )
}

export default LogInPage
