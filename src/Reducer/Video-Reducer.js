import { searchMyNotes, searchMyPlaylist } from "../ReusableFunctions/funcs";

const ADD_TO_LIKES = "ADD_TO_LIKES";
const REMOVE_FROM_LIKES = "REMOVE_FROM_LIKES";
const ADD_NOTE = "ADD_NOTE";
const ADD_NEW_PLAYLIST = "ADD_NEW_PLAYLIST";
const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";


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
            if (searchMyPlaylist(state, payload.name)){
                return {
                    ...state, playlists: state.playlists.map((one) => {
                        if (one.name === payload.name)
                            return { ...one, id: [...one.id, payload.id] }
                        return one
                    })
                }
            } else {
                return {...state, playlists : [...state.playlists, payload]}
            }
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
    myNotes: []
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

*/