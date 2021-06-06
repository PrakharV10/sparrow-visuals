import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context';
import './LogInPage.css';

function LogInPage() {
	const {
		authState: { isUserLoggedIn },
		authDispatch,
	} = useAuth();
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const { state } = useLocation();
	const navigate = useNavigate();

	const [localInput, setLocalInput] = useState({
		email: '',
		password: '',
	});

	async function serverAuth() {
		try {
			let { data } = await axios.post(
				'https://Sparrow-Media-Authentication.prakhar10v.repl.co/login',
				localInput
			);
			setErrorMessage('');
			setLoading(false);
			authDispatch({ type: 'CHECK_LOGIN_DETAILS', payload: data });
		} catch (e) {
			console.log(e);
			setLoading(false);
			setErrorMessage('Invalid Username or Password');
		}
	}

	function submitHandler(e) {
		e.preventDefault();
		setLoading(true);
		serverAuth();
	}

	useEffect(() => {
		isUserLoggedIn && navigate(state?.from ? state.from : '/explore');
	}, [isUserLoggedIn]);

	return (
		<div className="login-bg image-overlay">
			<div className="mid-container">
				<div className="title">
					LOG <span>IN</span>
				</div>

				<form onSubmit={(e) => submitHandler(e)} className="user-field">
					{errorMessage && (
						<div className="alert error">
							<svg width="1em" height="1em" viewBox="0 0 24 24">
								<path
									d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z"
									fill="currentColor"
								></path>
							</svg>
							{errorMessage}
						</div>
					)}
					<input
						onChange={(e) => setLocalInput({ ...localInput, email: e.target.value })}
						value={localInput.email}
						placeholder="Email"
						type="text"
						name="username"
					/>
					<input
						onChange={(e) => setLocalInput({ ...localInput, password: e.target.value })}
						value={localInput.password}
						placeholder="Password"
						type="password"
						name="password"
					/>

					<button type="submit" className="btn btn-outline-pink">
						{loading ? 'LOGGIN IN...' : 'LOG IN'}
					</button>
				</form>
				<div className="sub-text">
					Don't have an account?
					<Link to="/signup">
						<span className="text-pink"> Sign up!</span>
					</Link>
				</div>
				<div className="text-pink">Forgot Password?</div>
			</div>
		</div>
	);
}

export default LogInPage;
