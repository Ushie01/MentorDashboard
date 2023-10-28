import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Checkbox from '@/src/shared/Checkbox';
import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import Link from 'next/link';

type Props = {
	text: string;
	title: string;
	pic: StaticImageData;
};

const Card = ({ text, title, pic }: Props) => {
	return (
		<div className='flex items-center justify-between px-4 py-3 text-xs bg-white rounded-xl font-bold'>
			<div className='flex space-x-1'>
				<Checkbox text='' />
				<p>{text}</p>
			</div>

			<div className='flex space-x-8'>
				<div className='flex items-center bg-yellow-100 px-2 rounded-xl'>
					<p className='text-yellow-400 font-semibold'>{title}</p>
				</div>
				<div className='relative'>
					<Image
						src={pic}
						alt='pic alt'
						height={25}
						width={25}
						className='border-white border-2 rounded-full'
					/>

					<Image
						src={pic}
						alt='pic alt'
						height={25}
						width={25}
						className='absolute left-4 top-0 border-white border-2 rounded-full'
					/>
				</div>

				<Other3DotsHorizontal
					width={30}
					height={25}
				/>
			</div>
		</div>
	);
};

export default Card;
