import React from "react";
import Challenge from "./Challenge";
const Round = ({ gameLevel, setGameLevel }) => {
	return (
		<>
			{gameLevel === 1 && (
				<Challenge
					numOptions={3}
					totalChallenges={3}
					gameLevel={gameLevel}
					setGameLevel={setGameLevel}
					timeLimit={3}
				/>
			)}
			{gameLevel === 2 && (
				<Challenge
					numOptions={3}
					totalChallenges={5}
					gameLevel={gameLevel}
					setGameLevel={setGameLevel}
					timeLimit={2.5}
				/>
			)}
			{gameLevel === 3 && (
				<Challenge
					numOptions={3}
					totalChallenges={8}
					gameLevel={gameLevel}
					setGameLevel={setGameLevel}
					enableConfusion={true}
					timeLimit={2}
				/>
			)}
			{gameLevel === 4 && (
				<Challenge
					numOptions={3}
					totalChallenges={10}
					gameLevel={gameLevel}
					setGameLevel={setGameLevel}
					enableConfusion={true}
					timeLimit={1.75}
				/>
			)}
			{gameLevel === 5 && (
				<Challenge
					numOptions={6}
					totalChallenges={12}
					gameLevel={gameLevel}
					setGameLevel={setGameLevel}
					enableConfusion={true}
					timeLimit={1.5}
				/>
			)}
			{gameLevel === 6 && (
				<Challenge
					numOptions={6}
					totalChallenges={15}
					gameLevel={gameLevel}
					setGameLevel={setGameLevel}
					enableConfusion={true}
					timeLimit={1}
				/>
			)}
		</>
	);
};

export default Round;
