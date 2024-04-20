import React from "react";

const Options = ({ title, className, checkAnswer, textColor }) => {
	const handleClick = () => {
		checkAnswer();
	};

	return (
		<div
			className={`flex justify-center items-center border font-palanquin rounded-lg px-4 py-2 text-2xl font-bold shadow-md cursor-pointer hover:border-slate-300 hover:bg-blue-700 ${textColor} hover:text-white transition-all buttonGlass ${
				className ? className : "bg-stone-200 border border-blue-600"
			}`}
			onClick={handleClick}
		>
			<a className={` hover:text-white`}>{title}</a>
		</div>
	);
};

export default Options;
