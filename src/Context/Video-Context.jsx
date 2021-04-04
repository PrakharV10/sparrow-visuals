import React, { createContext, useContext, useReducer } from 'react';
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
