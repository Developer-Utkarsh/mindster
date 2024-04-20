import React from "react";

const Level = ({ gameLevel }) => {
	const levels = [6, 5, 4, 3, 2, 1]; // Define levels in an array for easier rendering

	const getLevelClassName = (level) => {
		if (level > gameLevel) return "level";
		if (level === gameLevel) return "activeLevel";
		return "completedLevel";
	};

	return (
		<div className='flex justify-center items-center absolute right-[-100px] border border-slate-500 p-2 rounded-tr-lg rounded-br-lg glassLevel top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
			<div className='flex justify-center items-center flex-col text-slate-200 font-palanquin text-xl gap-y-2'>
				{levels.map((level) => (
					<div
						key={level}
						className={`p-2 px-3 rounded-full border flex justify-center items-center ${getLevelClassName(
							level,
						)}`}
					>
						<p className='flex justify-center items-center text-center'>
							{level === 6 ? (
								<i className='fa-solid fa-trophy'></i>
							) : (
								<i className={`fa-solid fa-${level}`}></i>
							)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Level;
