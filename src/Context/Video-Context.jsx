import React, { createContext, useContext, useReducer } from 'react';
import { reducerFunc, initialAuthState } from '../Reducer/Auth-Reducer';
import { dispatchFunc, initialState } from '../Reducer/Video-Reducer';

const VideoContext = createContext();

export function VideoProvider({ children }) {
    
    const [state, dispatch] = useReducer(dispatchFunc,initialState)

    return (
        <VideoContext.Provider value={{ state, dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}

export function useVideo() {
    return useContext(VideoContext);
}


// Authentication Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
    
    const [state, dispatch] = useReducer(reducerFunc, initialAuthState);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}