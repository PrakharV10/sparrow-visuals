import { searchMyNotes } from "../ReusableFunctions/funcs";

const ADD_TO_LIKES = "ADD_TO_LIKES";
const REMOVE_FROM_LIKES = "REMOVE_FROM_LIKES";
const ADD_NOTE = "ADD_NOTE";


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
        default:
            return state;
    }
}

export const initialState = {
    likedVideo: [],
    playlists: [],
    myNotes: []
}

/*
myNotes : [
    {
        id : 
        notes : ["..."]
    }
]

*/