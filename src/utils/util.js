export function searchLikes(state, course) {
	if (state.likedVideo.filter((item) => item.id === course.id).length === 0) {
		return false;
	} else {
		return true;
	}
}

export function searchMyNotes(state, payload) {
	if (state.myNotes.find((item) => item.id === payload.id)) {
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
	console.log('Item : ', item);
	if (item.videos.find((oneId) => oneId._id === videoID)) return true;
	return false;
}

export function returnUserID(state, user) {
	return state.userLoginDetails.find(
		(one) => one.email === user.email && one.password === user.password
	).userId;
}
