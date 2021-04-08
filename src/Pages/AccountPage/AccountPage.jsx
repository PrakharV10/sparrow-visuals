import React from 'react'
import { useNavigate } from 'react-router';
import ChangePasswordBox from '../../Components/ChangePasswordBox/ChangePasswordBox';
import ProfileDetailBox from '../../Components/ProfileDetailBox/ProfileDetailBox';
import { useAuth } from '../../Context/Video-Context';
import './AccountPage.css'

function AccountPage() {

    const { dispatch } = useAuth();
    const navigate = useNavigate();

    function logOutHandler() {
        dispatch({ type: "LOG_OUT_HANDLER" })
        navigate('/')
    }

    return (
        <div className="account-page">
            <div className="bread-crumb">
                <div className="route-title">
                    My Account
                </div>
                <button onClick={logOutHandler} className="btn btn-invert">LOG OUT</button>
            </div>
            <div className="divider"></div>
            <div className="account-settings wrapper">
                <ProfileDetailBox />
                <ChangePasswordBox />
            </div>

        </div>
    )
}

export default AccountPage
