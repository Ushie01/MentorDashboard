import React from 'react';
import RecentProjects from './RecentProjects';
import ActivitySection from './ActivitySection';
import TaskToday from './TaskToday';

const LeftProject = () => {
	return (
		<div className='flex flex-col w-full'>
			<RecentProjects />
			<ActivitySection />
			<TaskToday />
		</div>
	);
};

export default LeftProject;
