import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export function VideoProvider({children}) {
    return (
        <VideoContext.Provider>
            {children}
        </VideoContext.Provider>
    )
}

export function useVideo() {
    return useContext(VideoContext);
}

// Route Context

const RouteContext = createContext();

export function RouteProvider({ children }) {

    const [route, setRoute] = useState("Search");
    // Search, VideoPlay

    return (
        <RouteContext.Provider value={{route, setRoute}}>
            {children}
        </RouteContext.Provider>
    )
}

export function useRoute() {
    return useContext(RouteContext)
}