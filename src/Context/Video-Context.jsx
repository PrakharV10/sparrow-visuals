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
    // Search, VideoPlay, Playlist, Home, Courses

    return (
        <RouteContext.Provider value={{route, setRoute}}>
            {children}
        </RouteContext.Provider>
    )
}

export function useRoute() {
    return useContext(RouteContext)
}


// Current Course Page
const CoursePageContext = createContext();

export function CoursePageProvider({ children }) {
    
    const [coursePage, setCoursePage] = useState([]);

    return (
        <CoursePageContext.Provider value={{ coursePage, setCoursePage }}>
            {children}
        </CoursePageContext.Provider>
    )
}

export function useCoursePage() {
    return useContext(CoursePageContext)
}