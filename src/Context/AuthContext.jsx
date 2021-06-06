import { createContext, useContext, useReducer } from 'react';
import { initialAuthState, authDispatchFunction } from '../Reducer/authReducer';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [authState, authDispatch] = useReducer(authDispatchFunction, initialAuthState);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
