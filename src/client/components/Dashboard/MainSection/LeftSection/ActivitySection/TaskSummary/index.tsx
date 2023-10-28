import React from 'react';
import Image from 'next/image';
import Card from './Card';
import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import { SUMMARY_DATA } from '../../../Constant/data';
import chart from '../../../../assets/chart.png';

const TaskSummary = () => {
	return (
		<div className='bg-white p-4 rounded-md'>
			<div className='flex items-center justify-between'>
				<p className='font-bold text-black'>Task Summary</p>
				<Other3DotsHorizontal
					width={35}
					height={25}
				/>
			</div>

			<div className='flex items-center justify-center space-x-3 mt-2'>
				{SUMMARY_DATA.map((value, index) => (
					<div key={index}>
						<Card
							icon={
								<value.icon
									height='20'
									width='20'
								/>
							}
							title={value.title}
							rating={value.rating}
							bgColor={value.bgColor}
							index={index}
						/>
					</div>
				))}
			</div>

			<div className='flex items-center justify-between'>
				<div className='flex flex-col mt-3'>
					<p className='text-xs'>One-time Completion rate</p>
					<div className='flex items-end justify-start space-x-2 mt-3'>
						<p className='text-3xl font-bold text-black'>95%</p>
						<p className='text-green-400'>+2.5%</p>
					</div>
				</div>
				<Image
					src={chart}
					alt='chart alt'
					className='mt-4'
				/>
			</div>
		</div>
	);
};

export default TaskSummary;
