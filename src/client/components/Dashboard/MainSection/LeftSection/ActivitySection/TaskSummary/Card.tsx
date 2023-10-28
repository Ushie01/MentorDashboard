import React from 'react';

type Props = {
	icon: React.JSX.Element;
	title: string;
	rating: string;
    bgColor: string;
    index: number
};

const Card: React.FC<Props> = ({ icon, title, rating, bgColor, index }: Props) => {
	return (
		<div
			className={`flex flex-col items-center justify-center rounded-lg px-6 py-4 ${bgColor} space-y-2`}>
			<div className={`flex items-center justify-center h-8 w-8 rounded-full border ${index === 2 ? 'border-gray-300' : 'border-white'}`}>
				{icon}
			</div>
			<p className={` text-xs ${index === 2 ? 'text-gray-500' : 'text-white'}`}>{title}</p>
			<span className={`font-bold ${index === 2 ? 'text-black' : 'text-white'}`}>{rating}</span>
		</div>
	);
};

export default Card;
