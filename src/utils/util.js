export function searchLikes(likedVideo, currentVideo) {
	if (likedVideo.find((item) => item._id === currentVideo._id)) {
		return true;
	} else {
		return false;
	}
}

export function searchMyNotes(myNotes, payload) {
	if (myNotes.find((item) => item.videoId === payload.videoId)) {
		return true;
	} else {
		return false;
	}
}

export function searchPlaylistsForPlaylist(state, playlistName) {
	if (state.playlists.find((item) => item.name === playlistName)) {
		return true;
	} else {
		return false;
	}
}

export function isCurrentVideoInPlaylist(item, videoID) {
	if (item.videos.find((oneId) => oneId._id === videoID)) return true;
	return false;
}

export function returnUserID(state, user) {
	return state.userLoginDetails.find(
		(one) => one.email === user.email && one.password === user.password
	).userId;
}
