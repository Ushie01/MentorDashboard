import React, { useState } from 'react';
import { Dropdown, MenuItem, Chip, Button } from '@heathmont/moon-core-tw';
import {
	ControlsChevronDown,
} from '@heathmont/moon-icons-tw';

const people = [
	{ name: 'Wade Cooper' },
	{ name: 'Arlene Mccoy' },
	{ name: 'Devon Webb' },
	{ name: 'Tom Cook' },
	{ name: 'Tanya Fox' },
	{ name: 'Hellen Schmidt' },
];

const DropDown = () => {
	const [option, setOption] = useState(null);

	return (
		<div className='flex flex-col lg:flex-row align-middle justify-around items-center w-full gap-2'>
			<Dropdown
				value={option}
				onChange={setOption}>
				<Dropdown.Trigger
					aria-label='Dropdown trigger'
                    className='flex bg-gohan rounded-moon-i-md align-middle justify-center items-center cursor-pointer transition-colors hover:bg-piccolo/20 text-moon-24 text-trunks'>
                    <p className='text-blue-700 text-xs'>Weekly</p>
                    <ControlsChevronDown  height={18} width={18} color='blue'/>
				</Dropdown.Trigger>
				<Dropdown.Options className='bg-white border rounded-xl'>
					{people.map((person, index) => (
						<Dropdown.Option
							value={person}
							key={index}>
							{({ selected, active }) => (
								<MenuItem
									isActive={active}
									isSelected={selected}>
									{person.name}
								</MenuItem>
							)}
						</Dropdown.Option>
					))}
				</Dropdown.Options>
			</Dropdown>
		</div>
	);
};

export default DropDown;
