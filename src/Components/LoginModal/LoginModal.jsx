import React from 'react'
import { Link } from 'react-router-dom'
import './LoginModal.css'

function LoginModal({loginModal, setLoginModal}) {
    return (
        <div
            onClick = {() => setLoginModal(false)}
            className={loginModal ? "modal-bg" : "modal-bg hide"}>
            <div
                onClick={e => e.stopPropagation()}
                className="modal login">
                <div className="modal-text">
                    Want to access the premium features?
                </div>
                <div className="modal-subtext">
                    Sign in to continue.
                </div>
                <div className="bottom-button">
                    <div className="login-link">
                        <Link
                            to="/login">
                            SIGN IN
                        </Link>
                    </div>
                    <div onClick = {() => setLoginModal(false)} className="cancel-btn">
                        CANCEL
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default LoginModal
