import React, { useState } from 'react';
import {
	format,
	addMonths,
	subMonths,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	isSameMonth,
	getDay,
} from 'date-fns';

const Calendar: React.FC = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [clickPrevious, setClickPrevious] = useState(false);
	const [clickNext, setClickNext] = useState(false);

	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
		setClickNext(true);
		setClickPrevious(false);
	};

	const previousMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
		setClickPrevious(true);
		setClickNext(false);
	};

	const daysInMonth = eachDayOfInterval({
		start: startOfMonth(currentMonth),
		end: endOfMonth(currentMonth),
	});

	const weeks: Date[][] = [];
	let currentWeek: Date[] = [];

	const currentDay = new Date();

	const firstDayIndex = getDay(startOfMonth(currentMonth));
	for (let i = 0; i < firstDayIndex; i++) {
		currentWeek.push(new Date());
	}

	daysInMonth.forEach((day) => {
		if (currentWeek.length === 7) {
			weeks.push(currentWeek);
			currentWeek = [];
		}

		currentWeek.push(day);
	});

	while (currentWeek.length < 7) {
		currentWeek.push(new Date());
	}
	weeks.push(currentWeek);

	const renderDays = () => {
		return weeks.map((week, weekIndex) => (
			<tr key={weekIndex}>
				{week.map((day, dayIndex) => {
					const isToday =
						isSameMonth(day, currentDay) &&
						day.getDate() === currentDay.getDate();
					return (
						<td
							key={dayIndex}
							className={`text-xs p-2 rounded-full text-center ${
								isSameMonth(day, currentMonth) ? 'text-black' : 'text-gray-300'
							} ${isToday ? 'bg-blue-700 shadow-lg text-white' : ''}`}>
							{format(day, 'd')}
						</td>
					);
				})}
			</tr>
		));
	};

	return (
		<div className='bg-white rounded-lg p-4 space-y-4'>
			<div className='flex items-center justify-between'>
				<span className='font-bold text-sx'>
					{format(currentMonth, 'MMMM yyyy')}
				</span>

				<div className='flex items-center justify-center space-x-3'>
					<button
						onClick={previousMonth}
						className={`font-bold text-md ${
							clickPrevious ? 'text-blue-500' : ''
						}`}>
						{'<'}
					</button>
					<button
						onClick={nextMonth}
						className={`font-bold text-md ${clickNext ? 'text-blue-500' : ''}`}>
						{'>'}
					</button>
				</div>
			</div>
			<hr />
			<table className='table-auto w-full'>
				<thead>
					<tr className='text-xs'>
						<th className='p-2'>Su</th>
						<th className='p-2'>Mo</th>
						<th className='p-2'>Tu</th>
						<th className='p-2'>We</th>
						<th className='p-2'>Th</th>
						<th className='p-2'>Fr</th>
						<th className='p-2'>Sa</th>
					</tr>
				</thead>
				<tbody>{renderDays()}</tbody>
			</table>
		</div>
	);
};

export default Calendar;
