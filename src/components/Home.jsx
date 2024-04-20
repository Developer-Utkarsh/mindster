const Home = ({ togglePlaying }) => {
	return (
		<div className='w-full flex justify-center items-center flex-col h-[50vh]'>
			<h1 className='text-5xl font-average font-semibold text-slate-300 tracking-wider max-lg:text-4xl'>
				Welcome to MindSter
			</h1>
			<button
				className='flex justify-center items-center rounded-full border border-slate-500 bg-blue-600 text-white mt-10 px-10 py-2 text-xl font-palanquin font-bold hover:transform hover:scale-110 transition hover:border-2 hover:border-slate-300 z-[500]'
				onClick={togglePlaying}
			>
				Play Now
			</button>
		</div>
	);
};

export default Home;
