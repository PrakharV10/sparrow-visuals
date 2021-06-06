import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ChangePasswordBox from '../../Components/ChangePasswordBox/ChangePasswordBox';
import ProfileDetailBox from '../../Components/ProfileDetailBox/ProfileDetailBox';
import { useAuth } from '../../Context';
import './AccountPage.css';

function AccountPage() {
	const { authDispatch } = useAuth();
	const navigate = useNavigate();

	const [currentState, setCurrentState] = useState({
		username: '',
		email: '',
		actualPassword: '',
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	async function serverCurrentUserData() {
		const memory = await JSON.parse(localStorage.getItem('Login'));
		let {
			data: { user },
		} = await axios.get(
			`https://Sparrow-Media-Authentication.prakhar10v.repl.co/users/${memory.userId}`
		);
		setCurrentState({
			username: user.username,
			email: user.email,
			actualPassword: user.password,
		});
	}

	useEffect(() => {
		serverCurrentUserData();
	}, []);

	function logOutHandler() {
		authDispatch({ type: 'LOG_OUT_HANDLER' });
		navigate('/');
	}

	return (
		<div className="account-page">
			<div className="bread-crumb">
				<div className="route-title">My Account</div>
				<button onClick={logOutHandler} className="btn btn-invert">
					LOG OUT
				</button>
			</div>
			<div className="divider"></div>
			<div className="account-settings wrapper">
				<ProfileDetailBox currentState={currentState} setCurrentState={setCurrentState} />
				<ChangePasswordBox currentState={currentState} setCurrentState={setCurrentState} />
			</div>
		</div>
	);
}

export default AccountPage;
