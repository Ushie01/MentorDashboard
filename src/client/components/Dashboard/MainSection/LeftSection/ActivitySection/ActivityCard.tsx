import DropDown from '@/src/shared/Dropdown/Dropdown';
import React from 'react';
import { XAxis, YAxis } from '../../Constant/data';
import Line from '../../../../../../assest/Line.png'
import Image from 'next/image';

const ActivityCard = () => {
	return (
		<div className='flex flex-col p-4 bg-white rounded-lg w-full'>
			<div className='flex items-center justify-between'>
				<p className='font-bold text-black'>Activity</p>
				<div>
					<DropDown />
				</div>
			</div>

			<div className='flex'>
				<div className='flex flex-col items-center justify-between text-gray-400 text-xs mt-2 mb-2'>
					{YAxis.map((value, index) => (
						<p key={index}>{value}</p>
					))}
				</div>

				<div className='flex flex-col mt-9 pl-5'>
					<Image
						src={Line}
						alt='line alt'
						className='w-full'
					/>

					<div className='flex items-center justify-between text-xs text-gray-400 w-full'>
						{XAxis.map((value, index) => (
							<p key={index}>{value}</p>
						))}
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default ActivityCard;
