import React, {useState} from 'react';
import Image from 'next/image';
import Logo from './../assets/logo.png';
import { ROUTE_DATA } from '../constant/data';
import Link from 'next/link';
import {
	ControlsPlus,
	GenericSettings,
	OtherSun,
	OtherMoon,
} from '@heathmont/moon-icons-tw';
import Toggle from '@/src/shared/Toggle/Toggle';

const SideSection = () => {
	const [state, setState] = useState(true);

	return (
		<div className='flex flex-col bg-white h-screen w-full border-r'>
			<div className='pl-6 py-6'>
				<Image
					src={Logo}
					alt='Logo alt'
				/>
			</div>

			<hr />

			<div className='relative pl-2 py-6'>
				<p className='text-gray-400 font-bold ml-4'>MENU</p>
				<div className='flex flex-col items-start justify-start space-y-3 mt-5 pr-6'>
					{ROUTE_DATA.map((value, index) => (
						<Link
							href='#'
							className={`flex items-center justify-start py-2 w-full hover:bg-gray-200 hover:rounded-lg hover:transition hover:transform hover:duration-150 hover:translate-x-2 space-x-3 ${
								index === 0
									? 'text-blue-600 font-bold'
									: 'text-gray-400 font-semibold'
							}`}
							key={index}>
							<div className='ml-4'>{value.icon}</div>
							<p>{value.title}</p>
						</Link>
					))}
				</div>
			</div>

			<hr />

			<div className='flex px-6 py-5'>
				<div className='flex items-center justify-between w-full'>
					<p className='text-md font-bold text-gray-400'>PROJECTS</p>
					<ControlsPlus
						height={25}
						width={25}
						color='gray'
					/>
				</div>
			</div>

			<div className='absolute inset-x-0 bottom-8 w-full'>
				<div className='w-full flex flex-col space-y-4 bot'>
					<div className='flex px-6'>
						<div className='flex items-center  space-x-3'>
							<GenericSettings
								height={25}
								width={25}
							/>
							<p className='text-gray-400 font-semibold'>Settings</p>
						</div>
					</div>

					<hr />

					<div className='flex items-center justify-between px-6 w-[270px]'>
						<div className='flex items-center  space-x-3 w-full'>
							<OtherMoon
								height={25}
								width={25}
							/>
							<p className='text-gray-400 font-semibold'>Dark Mode</p>
                        </div>
                        <Toggle />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideSection;
