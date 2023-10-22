import React  from 'react';
import Image from 'next/image';
import Logo from '../../../../assest/logo.png';
import Illustration from '../../../../assest/Illustration.png';
import Background from '../../../../assest/background.png';
import Pagination from './Pagination';

const SideSection = () => {
	return (
		<div className='w-1/2 lg:block hidden h-max bg-blue-700 p-12'>
			<Image
				src={Logo}
				alt='login alt'
				className=''
			/>

			<div className='relative items-center justify-between p-12'>
				<Image
					src={Background}
					alt='illustration alt'
				/>
				<Image
					src={Background}
					alt='illustration alt'
					className='absolute top-6 right-8 p-20'
				/>
				<div>
					<Image
						src={Illustration}
						alt='background alt'
						className='absolute top-16 left-24 p-12'
					/>
				</div>
			</div>

			<div className='flex flex-col items-center justify-center -mt-20'>
				<p className='font-bold text-xl text-white'>
					Customizable Multipurpose Dashboard
				</p>
				<p className='text-gray-100 text-xs mt-3'>
					Everything you need in an easily customizable dashboard.
				</p>
			</div>

			<Pagination />
		</div>
	);
};

export default SideSection;
