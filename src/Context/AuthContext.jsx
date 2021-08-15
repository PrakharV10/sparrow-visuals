import { createContext, useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router';
import { initialAuthState, authDispatchFunction } from '../Reducer/authReducer';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [authState, authDispatch] = useReducer(authDispatchFunction, initialAuthState);
	const navigate = useNavigate();

	function previousVersionUserCleanup() {
		localStorage.removeItem('Login');
		alert('Welcome to Dove v2. Signup to continue.');
		navigate('/signup');
	}

	useEffect(() => {
		const memory = JSON.parse(localStorage.getItem('Login'));
		if (memory?.isUserLoggedIn === true) {
			if (memory.token) {
				authDispatch({ type: 'LOGIN_BY_LOCAL_STORAGE', payload: { user: memory } });
			} else {
				previousVersionUserCleanup();
			}
		}
	}, [authDispatch]);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
