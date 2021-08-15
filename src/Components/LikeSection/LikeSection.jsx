import React from 'react';
import { useVideo } from '../../Context/VideoContext';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import './LikeSection.css';

function LikeSection() {
	const { videoState } = useVideo();

	return (
		<div>
			<h1 className="section-title">Liked Series</h1>
			{videoState.likedVideo.length === 0 && (
				<div className="grid-box">Nothing to show here!</div>
			)}
			{videoState.likedVideo.length !== 0 && (
				<div className="grid-box">
					{videoState.likedVideo.map((vid) => {
						return (
							<Link to={`/watch/${vid._id}`} key={vid._id}>
								<Card current={vid} />
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default LikeSection;
