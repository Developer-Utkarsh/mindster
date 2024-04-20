import { useState } from "react";
import Home from "./Home";
import Play from "./Play";

const Game = () => {
	const [gameLevel, setGameLevel] = useState(false);

	const [isPlaying, setIsPlaying] = useState(false);
	const [watch, setWatch] = useState(false);
	const togglePlaying = () => {
		setIsPlaying(!isPlaying);
		setWatch(true);
	};
	return (
		<div className='flex w-full h-screen justify-center items-center  '>
			<div className='w-[50%] h-[75vh] glassmorphism border border-slate-600 px-6 py-3 pt-8 max-sm:w-[90%] max-md:w-[75%] max-md:h-[80vh] hover:border-slate-400 transition rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]  '>
				<h1 className='font-palanquin text-5xl text-slate-100 text-center tracking-wide font-bold max-sm:text-4xl flex justify-center items-center '>
					MindSter
				</h1>
				<i className='fa-solid fa-circle-question text-slate-200 justify-end items-end flex absolute top-10 right-8 text-2xl hover:text-blue-600 transition hover:transform hover:scale-115 '></i>

				
				{!isPlaying && (
					<div>
						<Home togglePlaying={togglePlaying} />
					</div>
				)}

				{isPlaying && (
					<Play
						watch={watch}
						setWatch={setWatch}
						gameLevel={gameLevel}
						setGameLevel={setGameLevel}
					/>
				)}
			</div>
		</div>
	);
};

export default Game;
