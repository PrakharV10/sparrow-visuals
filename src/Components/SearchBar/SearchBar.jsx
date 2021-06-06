import React from 'react';
import { useVideo } from '../../Context/VideoContext';
import './SearchBar.css';

function SearchBar({ searchValue, setSearchValue }) {
	const { dispatch } = useVideo();

	function handleSubmit(e) {
		e.preventDefault();
		dispatch({ type: 'SEARCH_FILTER', payload: searchValue });
	}

	return (
		<form className="search-bar" onSubmit={(e) => handleSubmit(e)}>
			<input
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder="Search Videos Here"
			/>
			<button type="submit">
				<svg width="1em" height="1em" viewBox="0 0 32 32">
					<path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"></path>
				</svg>
			</button>
		</form>
	);
}

export default SearchBar;
