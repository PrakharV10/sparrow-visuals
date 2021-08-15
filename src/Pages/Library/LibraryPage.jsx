import React from 'react';
import Loader from '../../Components/LoaderSpinner/Loader';
import CourseSection from '../../Components/CourseSection/CourseSection';
import LikeSection from '../../Components/LikeSection/LikeSection';
import PlaylistSection from '../../Components/PlaylistSection/PlaylistSection';
import { useLoading } from '../../Context';
import { courseList } from '../../Data/Data.js';
import './LibraryPage.css';

function LibraryPage() {
	const { isLoading } = useLoading();

	return (
		<div className="library-page wrapper">
			{!isLoading && (
				<>
					<CourseSection courseList={courseList} />
					<div className="divider"></div>
					<LikeSection />
					<div className="divider"></div>
					<PlaylistSection />
					<div className="divider"></div>
				</>
			)}
			{isLoading && (
				<div
					style={{
						height: '70vh',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Loader />
				</div>
			)}
		</div>
	);
}

export default LibraryPage;
