import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../../Context';

function ChangePasswordBox({ currentState, setCurrentState }) {
	const {
		authState: { currentUserId },
	} = useAuth();
	const [message, setMessage] = useState('');

	async function serverPostPassword() {
		const data = await axios.post(
			`https://Sparrow-Media-Authentication.prakhar10v.repl.co/users/${currentUserId}`,
			{
				username: currentState.username,
				email: currentState.email,
				password: currentState.newPassword,
			}
		);
		if (data) {
			setMessage(true);
			setCurrentState({
				oldPassword: '',
				newPassword: '',
				confirmPassword: '',
			});
		} else {
			setMessage(false);
		}
	}

	function submitHandler(e) {
		e.preventDefault();
		if (
			currentState.oldPassword === currentState.actualPassword &&
			currentState.newPassword === currentState.confirmPassword
		) {
			serverPostPassword();
		} else {
			setMessage(false);
		}
	}

	return (
		<form onSubmit={(e) => submitHandler(e)} className="profile-container">
			<div className="head">
				Change Password
				{message === true && (
					<svg width="1em" height="1em" viewBox="0 0 15 15">
						<g fill="none">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827z"
								fill="#15CD72"
							></path>
						</g>
					</svg>
				)}
				{message === false && (
					<svg width="1em" height="1em" viewBox="0 0 20 20">
						<path
							d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z"
							fill="#ED4F32"
						></path>
					</svg>
				)}
			</div>
			<div className="upper-flex">
				<div className="inp-group">
					<label htmlFor="old password">Old Password</label>
					<input
						autoComplete="off"
						value={currentState.oldPassword}
						onChange={(e) =>
							setCurrentState({ ...currentState, oldPassword: e.target.value })
						}
						name="old password"
					/>
				</div>
				<div className="inp-group">
					<label htmlFor="New Password">New Password</label>
					<input
						autoComplete="off"
						value={currentState.newPassword}
						onChange={(e) =>
							setCurrentState({ ...currentState, newPassword: e.target.value })
						}
						name="New Password"
					/>
				</div>
			</div>
			<div className="upper-flex">
				<div className="inp-group">
					<label htmlFor="Confirm New Password">Confirm New Password</label>
					<input
						autoComplete="off"
						value={currentState.confirmPassword}
						onChange={(e) =>
							setCurrentState({ ...currentState, confirmPassword: e.target.value })
						}
						name="Confirm New Password"
					/>
				</div>
			</div>
			<button type="submit" className="btn btn-outline-pink">
				CHANGE
			</button>
		</form>
	);
}

export default ChangePasswordBox;
