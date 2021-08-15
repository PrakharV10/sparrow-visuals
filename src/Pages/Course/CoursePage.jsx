import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import VideoCard from '../../Components/VideoCard/VideoCard';
import './CoursePage.css';
import { useLoading, useVideo } from '../../Context';
import Loader from '../../Components/LoaderSpinner/Loader';

function CoursePage() {
	const { courseUrl } = useParams();
	const { videoState } = useVideo();
	const { isLoading } = useLoading();

	const current = videoState.videoData.filter((item) => item.url === courseUrl);

	return (
		<div className="course-page">
			{!isLoading && (
				<>
					<BreadCrumb courseName={current[0].category} />
					<div className="divider"></div>
					<div className="video-list">
						{current.map((course) => {
							return (
								<Link to={`/watch/${course._id}`} key={course._id}>
									<VideoCard {...course} />
								</Link>
							);
						})}
					</div>
				</>
			)}
			{isLoading && (
				<div
					style={{
						width: '100%',
						height: '70vh',
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

export default CoursePage;
