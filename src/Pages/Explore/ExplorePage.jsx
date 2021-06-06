import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../Components/Card/Card';
import Loader from '../../Components/LoaderSpinner/Loader';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { useVideo, useLoading } from '../../Context';
import './ExplorePage.css';

function ExplorePage() {
	const { videoState, videoDispatch } = useVideo();
	const [searchValue, setSearchValue] = useState('');
	const { isLoading } = useLoading();

	function clearSearchFunction() {
		setSearchValue('');
		videoDispatch({ type: 'SEARCH_FILTER', payload: '' });
	}

	function getSearchFiltered(originalData) {
		return originalData.filter((oneVideo) => {
			if (
				oneVideo.title.toLowerCase().includes(videoState.searchValue.toLowerCase()) ||
				oneVideo.category.toLowerCase().includes(videoState.searchValue)
			)
				return oneVideo;
			return null;
		});
	}

	const filteredData = getSearchFiltered(videoState.videoData);

	return (
		<div className="explore-page wrapper">
			<div className="search-container">
				<span>EXPLORE</span>
				<SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>

			{videoState.searchValue !== '' && (
				<div className="search-show">
					<div onClick={clearSearchFunction} className="clear-button">
						CLEAR SEARCH
					</div>
				</div>
			)}

			{!isLoading && (
				<div className="grid-box">
					{filteredData.map((video) => {
						return (
							<Link to={`/watch/${video._id}`} key={video._id}>
								<Card current={video} />
							</Link>
						);
					})}
				</div>
			)}
			{isLoading && (
				<div
					style={{
						height: '50vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}
				>
					<Loader />
				</div>
			)}
		</div>
	);
}

export default ExplorePage;
