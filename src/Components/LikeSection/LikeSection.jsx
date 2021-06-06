import React from 'react';
import { useVideo } from '../../Context/VideoContext';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import './LikeSection.css';

function LikeSection() {
	const { state } = useVideo();

	return (
		<div>
			<h1 className="section-title">Liked Series</h1>
			{state.likedVideo.length === 0 && <div className="grid-box">Nothing to show here!</div>}
			{state.likedVideo.length !== 0 && (
				<div className="grid-box">
					{state.likedVideo.map((vid) => {
						return (
							<Link to={`/watch/${vid.id}`} key={vid.id}>
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
