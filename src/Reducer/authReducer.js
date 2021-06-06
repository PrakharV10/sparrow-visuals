const SAVE_SIGNUP_DETAILS = 'SAVE_SIGNUP_DETAILS';
const CHECK_LOGIN_DETAILS = 'CHECK_LOGIN_DETAILS';
const LOGIN_ON_STARTUP = 'LOGIN_ON_STARTUP';
const LOG_OUT_HANDLER = 'LOG_OUT_HANDLER';

export function authDispatchFunction(state, { type, payload }) {
	switch (type) {
		case SAVE_SIGNUP_DETAILS:
			localStorage.setItem(
				'Login',
				JSON.stringify({ isUserLoggedIn: true, userId: payload.userId })
			);
			return { ...state, isUserLoggedIn: true, currentUserId: payload.userId };

		case CHECK_LOGIN_DETAILS:
			localStorage.setItem(
				'Login',
				JSON.stringify({ isUserLoggedIn: true, userId: payload.userId })
			);
			return { ...state, isUserLoggedIn: true, currentUserId: payload.userId };

		case LOGIN_ON_STARTUP:
			return { ...state, isUserLoggedIn: true, authToken: payload.userId };

		case LOG_OUT_HANDLER:
			localStorage.removeItem('Login');
			return {
				...state,
				currentUserId: null,
				isUserLoggedIn: false,
			};

		default:
			return state;
	}
}

export const initialAuthState = {
	isUserLoggedIn: true,
	authToken:
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGI1ZWQ4ZDA0YWM0NDAyZTAzMmUzMDUiLCJpYXQiOjE2MjI1MzU1NjV9.1Vj2ty4NFDnJ8b3z9X6uID28Ao-SeXmr3P3zBY9BrqA',
};
