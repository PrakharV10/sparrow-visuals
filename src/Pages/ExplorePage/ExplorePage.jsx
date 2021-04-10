import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Card from '../../Components/Card/Card'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { useVideo } from '../../Context/Video-Context';
import { data } from '../../Data/Data'
import './ExplorePage.css'

function ExplorePage() {

    const { state, dispatch } = useVideo();
    const [searchValue, setSearchValue] = useState("");

    function clearSearchFunction() {
        setSearchValue("");
        dispatch({type : "SEARCH_FILTER", payload : ""})
    }

    function getSearchFiltered(originalData) {
        return originalData.filter(oneVideo => {
            if (oneVideo.title.toLowerCase().includes(state.searchValue.toLowerCase()) || oneVideo.category.toLowerCase().includes(state.searchValue))
                return oneVideo
            return null
        })
    }


    const filteredData = getSearchFiltered(data)

    return (
        <div className="explore-page wrapper">
            <div className="search-container">
                <span>EXPLORE</span>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>

            { state.searchValue !== "" &&
                <div className="search-show">
                <div
                    onClick = {clearSearchFunction}
                    className="clear-button">
                        CLEAR SEARCH
                    </div>
                </div>
            }

            <div className="grid-box">
                {
                    filteredData.map((video) => {
                        return (
                            <Link
                                to = {`/watch/${video.id}`}
                                key={video.id}>
                                <Card current={video}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExplorePage
