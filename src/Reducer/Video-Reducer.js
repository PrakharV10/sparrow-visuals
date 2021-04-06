import { searchMyNotes } from "../ReusableFunctions/funcs";

const ADD_TO_LIKES = "ADD_TO_LIKES";
const REMOVE_FROM_LIKES = "REMOVE_FROM_LIKES";
const ADD_NOTE = "ADD_NOTE";
const ADD_NEW_PLAYLIST = "ADD_NEW_PLAYLIST";
const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
const DELETE_PLAYLIST = "DELETE_PLAYLIST";
const SEARCH_FILTER = "SEARCH_FILTER";


export function dispatchFunc(state , { type, payload }) {
    switch (type) {
        case ADD_TO_LIKES:
            return { ...state, likedVideo: [...state.likedVideo, payload] }
        
        case REMOVE_FROM_LIKES:
            return { ...state, likedVideo: state.likedVideo.filter(item => item.id !== payload.id) }
        
        case ADD_NOTE:
            if (searchMyNotes(state,payload)){
                return {
                    ...state, myNotes : state.myNotes.map(one => {
                        if (one.id === payload.id)
                            return { ...one, notes: [...one.notes, payload.input] }
                        return one
                    })
                }
            } else {
                return {...state, myNotes : [...state.myNotes, {id : payload.id, notes : [payload.input]}]}
            }
            
        case ADD_NEW_PLAYLIST:
            return { ...state, playlists: [...state.playlists, { name : payload, id : [] }] }
        
        case ADD_TO_PLAYLIST:
            return {...state, 
                playlists: state.playlists.map((onePlaylist) => {
                    if (onePlaylist.name === payload.name) {
                        return { ...onePlaylist, id: [...onePlaylist.id, payload.id] }
                    } else {
                        return onePlaylist
                    }
                })
            }
        
        case REMOVE_FROM_PLAYLIST:
            return {
                ...state,
                playlists: state.playlists.map((onePlaylist) => {
                    if (onePlaylist.name === payload.name) {
                        return {...onePlaylist, id: onePlaylist.id.filter(item => item !== payload.id)}
                    } else {
                        return onePlaylist
                    }
                })
            }
        
        case DELETE_PLAYLIST:
            return { ...state, playlists: state.playlists.filter(onePlaylist => onePlaylist.name !== payload.name) }
        
        case SEARCH_FILTER:
            return {...state, searchValue : payload}
        
        default:
            return state;
    }
}

export const initialState = {
    likedVideo: [],
    playlists: [
        {
            name: "Demo Playlist",
            id : []
        }
    ],
    myNotes: [],
    searchValue : ""
}

/*
myNotes : [
    {
        id : 
        notes : ["..."]
    }
]

playlists: [
        {
            name: "Demo Playlist",
            id : ["..."]
        }
    ]

    {
        name : [" " " "]
    }

*/