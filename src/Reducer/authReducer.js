const SAVE_SIGNUP_DETAILS = 'SAVE_SIGNUP_DETAILS';
const CHECK_LOGIN_DETAILS = 'CHECK_LOGIN_DETAILS';
const LOGIN_ON_STARTUP = 'LOGIN_ON_STARTUP';
const LOG_OUT_HANDLER = 'LOG_OUT_HANDLER';
const SAVE_USER_DETAILS_FROM_SERVER = 'SAVE_USER_DETAILS_FROM_SERVER';
const CHANGE_USERNAME_AND_EMAIL = 'CHANGE_USERNAME_AND_EMAIL';

export function authDispatchFunction(state, { type, payload }) {
	switch (type) {
		case SAVE_USER_DETAILS_FROM_SERVER:
			return { ...state, email: payload.email, username: payload.username };

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

		case CHANGE_USERNAME_AND_EMAIL:
			return { ...state, username: payload.username, email: payload.email };

		default:
			return state;
	}
}

export const initialAuthState = {
	isUserLoggedIn: false,
	authToken: '',
	username: '',
	email: '',
};
