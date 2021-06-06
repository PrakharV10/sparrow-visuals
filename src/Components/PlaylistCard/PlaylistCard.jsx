import React from 'react';
import { Link } from 'react-router-dom';

function PlaylistCard({ currentVideo }) {
	return (
		<div>
			<Link to={`/watch/${currentVideo._id}`} key={currentVideo._id} className="cards">
				<img className="card-image" src={currentVideo.thumbnail} alt="card-pic" />
				<div className="card-title">{currentVideo.title}</div>
			</Link>
		</div>
	);
}

export default PlaylistCard;
