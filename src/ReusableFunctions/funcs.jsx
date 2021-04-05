export function searchLikes(state, course) {
    if (state.likedVideo.filter((item) => item.id === course.id).length === 0) {
        return false
    } else {
        return true
    }
}

export function searchMyNotes(state, payload) {
    if (state.myNotes.find((item) => item.id === payload.id)) {
        return true
    } else {
        return false
    }
}

export function searchPlaylistsForPlaylist(state, playlistName) {
    if (state.playlists.find((item) => item.name === playlistName )){
        return true
    } else {
        return false
    }
}

export function searchPlaylistsForID(itemID,videoID) {
    if (itemID.filter(oneId => oneId === videoID).length === 0)
        return false
    else
        return true
}