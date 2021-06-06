import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ChangePasswordBox from '../../Components/ChangePasswordBox/ChangePasswordBox';
import Loader from '../../Components/LoaderSpinner/Loader';
import ProfileDetailBox from '../../Components/ProfileDetailBox/ProfileDetailBox';
import { useAuth, useLoading } from '../../Context';
import './AccountPage.css';

function AccountPage() {
	const { authState, authDispatch } = useAuth();
	const navigate = useNavigate();
	const { isLoading } = useLoading();

	const [currentState, setCurrentState] = useState({
		username: '',
		email: '',
		actualPassword: '',
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	useEffect(() => {
		setCurrentState({ ...currentState, username: authState.username, email: authState.email });
	}, [isLoading]);

	function logOutHandler() {
		authDispatch({ type: 'LOG_OUT_HANDLER' });
		navigate('/');
	}

	return (
		<div className="account-page">
			{!isLoading && (
				<>
					<div className="bread-crumb">
						<div className="route-title">My Account</div>
						<button onClick={logOutHandler} className="btn btn-invert">
							LOG OUT
						</button>
					</div>
					<div className="divider"></div>
					<div className="account-settings wrapper">
						<ProfileDetailBox
							currentState={currentState}
							setCurrentState={setCurrentState}
						/>
						<ChangePasswordBox
							currentState={currentState}
							setCurrentState={setCurrentState}
						/>
					</div>
				</>
			)}
			{isLoading && (
				<div
					style={{
						width: '100%',
						height: '70vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Loader />
				</div>
			)}
		</div>
	);
}

export default AccountPage;
