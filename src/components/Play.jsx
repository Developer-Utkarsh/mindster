import React, { useState, useEffect } from "react";
import Level from "./Level";
import Round from "./Round";

const Play = (props) => {
	const [watchTime, setWatchTime] = useState("");
	const watchTimer = () => {
		const timer1 = setTimeout(() => {
			setWatchTime("3");
		}, 50);
		const timer2 = setTimeout(() => {
			setWatchTime("2");
		}, 1050);
		const timer3 = setTimeout(() => {
			setWatchTime("1");
		}, 2050);
		const timer4 = setTimeout(() => {
			setWatchTime("GO");
		}, 3050);
		const timer5 = setTimeout(() => {
			setWatchTime(false);
			props.setWatch("showed");
			props.setGameLevel(1);
		}, 4050);
		// Clear timeouts when the component unmounts or props.watch changes
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
			clearTimeout(timer3);
			clearTimeout(timer4);
		};
	};

	useEffect(() => {
		if (props.watch && props.watch !== "showed") {
			return watchTimer();
		}
	}, [props.watch]);

	return (
		<div>
			{watchTime && (
				<h2 className='text-slate-100 text-8xl flex justify-center font-average items-center w-full h-[50vh]'>
					{watchTime}
				</h2>
			)}
			{props.watch === "showed" && (
				<Round
					setGameLevel={props.setGameLevel}
					gameLevel={props.gameLevel}
				/>
			)}
			<Level
				setGameLevel={props.setGameLevel}
				gameLevel={props.gameLevel}
			/>
		</div>
	);
};

export default Play;
