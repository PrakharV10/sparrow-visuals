import React, { createContext, useContext, useReducer } from 'react';
import { videoDispatchFunction, initialState } from '../Reducer/videoReducer';

const VideoContext = createContext();

export function VideoProvider({ children }) {
	const [videoState, videoDispatch] = useReducer(videoDispatchFunction, initialState);

	return (
		<VideoContext.Provider value={{ videoState, videoDispatch }}>
			{children}
		</VideoContext.Provider>
	);
}

export function useVideo() {
	return useContext(VideoContext);
}
