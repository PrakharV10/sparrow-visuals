import { createContext, useContext, useEffect, useReducer } from 'react';
import { initialAuthState, authDispatchFunction } from '../Reducer/authReducer';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [authState, authDispatch] = useReducer(authDispatchFunction, initialAuthState);

	useEffect(() => {
		const memory = JSON.parse(localStorage.getItem('Login'));
		if (memory?.isUserLoggedIn === true) {
			authDispatch({ type: 'LOGIN_BY_LOCAL_STORAGE', payload: { user: memory } });
		}
	}, [authDispatch]);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
