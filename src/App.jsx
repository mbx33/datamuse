function App() {
	return (
		<div>
			<h1 className="text-blue-800 text-6xl text-center">Synonyms</h1>
			<form action="" className="border w-1/2 mx-auto mt-8 ">
				<div className="w-3/4 mx-auto">
					<lable htmlFor="input-text" className="text-xl mr-3">
						Lookup Word:
					</lable>
					<input
						className="p-1 text-lg border-2"
						type="text"
						name="input-text"
						id="input-text"
					/>
				</div>
			</form>
		</div>
	);
}

export default App;
