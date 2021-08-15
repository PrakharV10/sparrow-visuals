import React, { useState } from 'react';
import './SignupPage.css';

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context';
import { serverCallHandler } from '../../utils/serverCallFunction';
import { SERVERURL } from '../../utils/api';

function SignupPage() {
	const { authDispatch } = useAuth();
	const navigate = useNavigate();

	const [localInput, setLocalInput] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [loading, setLoading] = useState(false);

	const [errorMessage, setErrorMessage] = useState('');

	function passwordChecker(e) {
		const currentPass = e.target.value;
		if (currentPass.trim().length !== currentPass.length) {
			setErrorMessage('Password Cannot Have Spaces');
		} else {
			setLocalInput((localInput) => ({ ...localInput, password: e.target.value }));
			setErrorMessage('');
		}
	}

	async function serverCheckAndSave() {
		const { response } = await serverCallHandler('POST', `${SERVERURL}/signup`, {
			username: localInput.username,
			password: localInput.password,
			email: localInput.email,
		});
		if (response.success) {
			setErrorMessage('');
			setLoading(false);
			authDispatch({
				type: 'SAVE_SIGNUP_DETAILS',
				payload: { user: response.data, token: response.token },
			});
			navigate('/explore');
		} else {
			setErrorMessage(response.message);
			setLoading(false);
		}
	}

	function submitHandler(e) {
		e.preventDefault();
		if (localInput.username.length < 4) {
			setErrorMessage('Username requires atleast 4 characters.');
		} else {
			setLoading(true);
			serverCheckAndSave();
		}
	}

	return (
		<div className='signup-bg image-overlay'>
			<div className='mid-container'>
				<div className='title'>
					SIGN <span>UP</span>
				</div>
				<form onSubmit={(e) => submitHandler(e)} className='user-field'>
					{errorMessage && (
						<div className='alert error'>
							<svg width='1em' height='1em' viewBox='0 0 24 24'>
								<path
									d='M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z'
									fill='currentColor'
								></path>
							</svg>
							{errorMessage}
						</div>
					)}

					<input
						onChange={(e) =>
							setLocalInput((localInput) => ({
								...localInput,
								username: e.target.value,
							}))
						}
						value={localInput.username}
						placeholder='Username'
						type='text'
						name='Username'
						required
					/>

					<input
						onChange={(e) =>
							setLocalInput((localInput) => ({
								...localInput,
								email: e.target.value,
							}))
						}
						value={localInput.email}
						placeholder='Email'
						type='email'
						name='email'
						required
					/>

					<input
						onChange={(e) => passwordChecker(e)}
						value={localInput.password}
						placeholder='Password'
						type='password'
						name='password'
						required
					/>

					<button type='submit' className='btn btn-outline-pink'>
						{loading ? `SIGNING UP...` : `SIGN UP`}
					</button>
				</form>
				<div className='sub-text'>
					Already Have an Account?
					<Link to='/login'>
						<span className='text-pink'> Sign in!</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SignupPage;
