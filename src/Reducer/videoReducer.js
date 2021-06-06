import { searchMyNotes } from '../utils/util';

const SAVE_LIKED_VIDEOS_FROM_SERVER = 'SAVE_LIKED_VIDEOS_FROM_SERVER';
const SAVE_PLAYLIST_FROM_SERVER = 'SAVE_PLAYLIST_FROM_SERVER';
const SAVE_NOTES_FROM_SERVER = 'SAVE_NOTES_FROM_SERVER';
const SAVE_ALL_VIDEOS = 'SAVE_ALL_VIDEOS';
const ADD_TO_LIKES = 'ADD_TO_LIKES';
const REMOVE_FROM_LIKES = 'REMOVE_FROM_LIKES';
const ADD_NOTE = 'ADD_NOTE';
const ADD_NEW_PLAYLIST = 'ADD_NEW_PLAYLIST';
const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST';
const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
const SEARCH_FILTER = 'SEARCH_FILTER';

export function videoDispatchFunction(state, { type, payload }) {
	switch (type) {
		case SAVE_LIKED_VIDEOS_FROM_SERVER:
			return { ...state, likedVideo: payload.likedVideoData };

		case SAVE_PLAYLIST_FROM_SERVER:
			return { ...state, playlists: payload.playlistData };

		case SAVE_NOTES_FROM_SERVER:
			return { ...state, myNotes: payload.notes };

		case SAVE_ALL_VIDEOS:
			return { ...state, videoData: payload.videoData };

		case ADD_TO_LIKES:
			return { ...state, likedVideo: [...state.likedVideo, payload] };

		case REMOVE_FROM_LIKES:
			return {
				...state,
				likedVideo: state.likedVideo.filter((item) => item.id !== payload._id),
			};

		case ADD_NOTE:
			if (searchMyNotes(state, payload)) {
				return {
					...state,
					myNotes: state.myNotes.map((one) => {
						if (one.id === payload._id)
							return { ...one, notes: [...one.notes, payload.input] };
						return one;
					}),
				};
			} else {
				return {
					...state,
					myNotes: [...state.myNotes, { id: payload._id, notes: [payload.input] }],
				};
			}

		case ADD_NEW_PLAYLIST:
			return { ...state, playlists: [...state.playlists, { name: payload, id: [] }] };

		case ADD_TO_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.map((onePlaylist) => {
					if (onePlaylist._id === payload.playlistId) {
						return { ...onePlaylist, videos: [...onePlaylist.videos, payload.video] };
					} else {
						return onePlaylist;
					}
				}),
			};

		case REMOVE_FROM_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.map((onePlaylist) => {
					if (onePlaylist._id === payload.playlistId) {
						return {
							...onePlaylist,
							videos: onePlaylist.videos.filter(
								(item) => item._id !== payload.video._id
							),
						};
					} else {
						return onePlaylist;
					}
				}),
			};

		case DELETE_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.filter(
					(onePlaylist) => onePlaylist.name !== payload.name
				),
			};

		case SEARCH_FILTER:
			return { ...state, searchValue: payload };

		default:
			return state;
	}
}

export const initialState = {
	videoData: [],
	likedVideo: [],
	playlists: [],
	myNotes: [],
	searchValue: '',
};
