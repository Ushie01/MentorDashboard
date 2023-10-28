import React from 'react';
import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import Card from './Card';
import { PROJECTS_DATA } from '../../Constant/data';

const RecentProjects = () => {
	return (
		<div className='bg-white p-4 rounded-lg space-y-5'>
			<div className='flex items-center justify-between'>
				<p className='font-bold text-black'>Recent Projects</p>
				<Other3DotsHorizontal
					width={35}
					height={25}
				/>
			</div>

			<hr />

			<div className='flex flex-row items-center justify-between'>
				{PROJECTS_DATA.map((value, index) => (
					<div key={index}>
						<Card {...value} />
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;
