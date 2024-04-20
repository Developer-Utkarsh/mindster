import React, { useState, useEffect } from "react";
import Options from "./Options";

const Challenge = ({
	numOptions,
	totalChallenges,
	setGameLevel,
	enableConfusion,
	timeLimit,
}) => {
	const challengeArray = [
		"RED",
		"ORANGE",
		"VIOLET",
		"YELLOW",
		"BLUE",
		"GREEN",
		"PINK",
	];
	const [currentColor, setCurrentColor] = useState("");
	const [options, setOptions] = useState([]);
	const [challengeStatus, setChallengeStatus] = useState("");
	const [selectedOption, setSelectedOption] = useState(null);
	const [currentChallenge, setCurrentChallenge] = useState(1);
	const [isFinalChallenge, setIsFinalChallenge] = useState(false);
	const [confusionText, setConfusionText] = useState("");
	const [timer, setTimer] = useState(timeLimit * 100);
	const [timerColor, setTimerColor] = useState("text-blue-500");
	const [showTimer, setShowTimer] = useState(false);
	const [isGameCompleted, setIsGameCompleted] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (challengeStatus !== "" && isFinalChallenge === true) {
			setShowTimer(false); // Stop the timer on option click
		}
	}, [challengeStatus, isFinalChallenge]);

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
		setShowTimer(!isPaused); // Stop/start the timer
	};

	const generateChallenge = () => {
		const randomIndex = Math.floor(Math.random() * challengeArray.length);
		const randomColor = challengeArray[randomIndex];
		setCurrentColor(randomColor);

		let shuffledOptions = challengeArray
			.filter((color) => color !== randomColor)
			.sort(() => 0.5 - Math.random());

		let limitedOptions = shuffledOptions.slice(0, numOptions - 1);
		limitedOptions.push(randomColor);
		limitedOptions.sort(() => 0.5 - Math.random());

		setOptions(limitedOptions);
		setChallengeStatus("");
		setSelectedOption(null);
		setTimer(timeLimit * 100); // Reset the timer for every challenge

		if (enableConfusion) {
			const confusionIndex = Math.floor(
				Math.random() * challengeArray.length,
			);
			const confusionColor = challengeArray[confusionIndex];
			setConfusionText(confusionColor);
		} else {
			setConfusionText(randomColor); // Set the confusionText to the correct color
		}
	};

	useEffect(() => {
		generateChallenge();
	}, [numOptions, enableConfusion]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (showTimer && !isPaused) {
				setTimer((prevTimer) => prevTimer - 1);
			}
		}, 10);

		return () => clearInterval(interval); // Clear the interval when the component is unmounted
	}, [showTimer, isPaused]);

	useEffect(() => {
		if (timer <= 0) {
			setChallengeStatus("TimeUp");
		} else if (timer <= timeLimit * 35) {
			setTimerColor("text-red-500");
		} else if (timer <= timeLimit * 70) {
			setTimerColor("text-orange-500");
		} else {
			setTimerColor("text-blue-500");
		}
	}, [timer, timeLimit]);

	const handleAnswer = (selectedColor) => {
		setShowTimer(false); // Stop the timer on option click
		setSelectedOption(selectedColor);
		setTimeout(() => {
			setShowTimer(true); // Start the timer again after 2.5 seconds (2500 milliseconds)
			if (selectedColor === currentColor) {
				console.log("Correct answer!");
				setChallengeStatus("Correct");

				if (currentChallenge === totalChallenges) {
					setIsFinalChallenge(true);
				} else {
					setCurrentChallenge(currentChallenge + 1);
					generateChallenge();
				}
			} else {
				console.log("Incorrect answer!");
				setChallengeStatus("Incorrect");
			}
		}, 2500);
	};

	const getColorClassName = (color) => {
		return `text-${color.toLowerCase()}-500`;
	};

	const getOptionClassName = (color) => {
		if (selectedOption) {
			return `${
				color === currentColor
					? "bg-green-500 cursor-not-allowed opacity-60"
					: color === selectedOption
					? "bg-red-500 cursor-not-allowed opacity-60"
					: "cursor-not-allowed opacity-60"
			}`;
		}
		return "";
	};

	const getRandomColorClassName = (color) => {
		if (enableConfusion) {
			const randomColor =
				challengeArray[
					Math.floor(Math.random() * challengeArray.length)
				];
			return `text-${randomColor.toLowerCase()}-500`;
		}
		return `text-${color.toLowerCase()}-500`;
	};

	const restartGame = () => {
		setCurrentChallenge(1);
		setGameLevel(1);
		generateChallenge();
		setTimer(timeLimit * 100);
	};

	const handleNextLevel = () => {
		setCurrentChallenge(1);
		setIsFinalChallenge(false);
		if (gameLevel === 6) {
			setIsGameCompleted(true);
		} else {
			setGameLevel((prevLevel) => prevLevel + 1);
		}
	};

	const formatTimer = (milliseconds) => {
		const totalSeconds = Math.floor(milliseconds / 100);
		const seconds = totalSeconds % 60;
		const formattedSeconds = seconds.toString().padStart(2, "0");
		const formattedMilliseconds = Math.floor(milliseconds % 1000)
			.toString()
			.padStart(2, "0");
		return `${totalSeconds}.${formattedMilliseconds}`;
	};

	return (
		<div className='w-full flex justify-center items-center flex-col'>
			{challengeStatus === "TimeUp" ? (
				<div className='w-full flex flex-col justify-center items-center mt-8'>
					<i className='far fa-hourglass text-gray-300 text-5xl my-5'></i>

					<h2 className='text-5xl font-bold mb-6 font-palanquin text-stone-200'>
						Time Up
					</h2>
					<button
						onClick={restartGame}
						className='w-full bg-red-600 border font-palanquin font-bold text-gray-200 py-2 rounded-lg text-xl'
					>
						Restart Game
					</button>
				</div>
			) : isGameCompleted ? (
				<div className='w-full flex justify-center items-center flex-col'>
					<h2 className='text-5xl font-bold mb-6 font-palanquin text-stone-200'>
						Congratulations! You have completed the game.
					</h2>
					<button
						onClick={restartGame}
						className='w-full bg-blue-600 border font-palanquin font-bold text-gray-200 py-2 rounded-lg text-xl'
					>
						Play Again
					</button>
				</div>
			) : (
				<>
					<div className='w-full flex justify-between items-center'>
						<div className='flex justify-center items-center text-slate-200 border-b-2 border-blue-600 font-palanquin gap-x-2'>
							<i className='fa-solid fa-puzzle-piece text-xl'></i>
							<p className='text-2xl'>
								{currentChallenge}
								<span className='mx-1 text-gray-500'>/</span>
								<span className='text-green-600'>
									{totalChallenges}
								</span>
							</p>
						</div>
						<div className='flex justify-center items-center text-slate-200 border-b-2 border-blue-600 font-average gap-x-2'>
							<i
								className={`fa-solid fa-hourglass text-xl ${timerColor}`}
							></i>
							<p className={`text-2xl ${timerColor}`}>
								{formatTimer(timer)}
							</p>
							<button
								onClick={handlePauseResume}
								className='ml-4 text-xl text-gray-400 hover:text-gray-200 transition-colors'
							>
								<i
									className={`fas fa-${
										isPaused ? "play" : "pause"
									}`}
								></i>
							</button>
						</div>
					</div>
					{isPaused ? (
						<div className='w-full flex flex-col justify-center items-center mt-8'>
							<h2 className='text-5xl font-bold mb-6 font-palanquin text-stone-200'>
								Game Paused
							</h2>
							<button
								onClick={handlePauseResume}
								className='w-full bg-blue-600 border font-palanquin font-bold text-gray-200 py-2 rounded-lg text-xl'
							>
								Resume
							</button>
						</div>
					) : (
						<>
							<div
								className={`w-full border border-blue-600 font-average font-bold tracking-widest flex justify-center items-center text-5xl my-5 mb-2 rounded-lg py-10 ${
									currentColor
										? getColorClassName(currentColor)
										: "text-slate-100"
								}`}
							>
								<h2>{confusionText || "COLOR"}</h2>
							</div>
							<p className='font-average text-lg text-slate-300 mb-3'>
								What is the color of the above given text?
							</p>
							<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 justify-center'>
								{options.map((color, index) => (
									<Options
										key={index}
										title={color}
										checkAnswer={
											selectedOption
												? () => {}
												: () => handleAnswer(color)
										}
										className={getOptionClassName(color)}
										textColor={getRandomColorClassName(
											color,
										)}
										disabled={!showTimer} // Disable options when timer is not shown
									/>
								))}
							</div>

							{isFinalChallenge ? (
								<button
									onClick={handleNextLevel}
									className='w-full bg-blue-500 border font-palanquin font-bold text-gray-200 py-2 rounded-lg mt-5 text-xl'
									disabled={!isFinalChallenge} // Disable button when timer is not shown
								>
									Next Level
								</button>
							) : challengeStatus === "Incorrect" ? (
								<button
									onClick={restartGame}
									className='w-full bg-red-600 border font-palanquin font-bold text-gray-200 py-2 rounded-lg mt-5 text-xl'
									disabled={!selectedOption}
								>
									Restart Game
								</button>
							) : (
								<button
									className={`w-full bg-blue-500 border ${
										challengeStatus === "Correct"
											? "bg-green-600 nextChallenge border-3"
											: "border-gray-300 opacity-70"
									} font-palanquin font-bold text-gray-200 py-2 rounded-lg mt-5 text-xl`}
									disabled={!selectedOption}
								>
									Next Challenge
								</button>
							)}
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Challenge;
