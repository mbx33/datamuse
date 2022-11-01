import { useState } from 'react';

//find synonyms for a word and return an array of synonyms
const BASE_URL = 'https://api.datamuse.com/words?rel_syn='; // API URL

function App() {
	const [words, setWords] = useState('');
	const [answers, setAnswers] = useState([]); // answers is an array of objects

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`${BASE_URL}${words}&max=20`);
		const data = await response.json();
		setAnswers(data);

		console.log(data);
	};

	return (
		<main className="bg-purple-300">
			<h1 className="text-blue-800 text-6xl text-center">Synonyms</h1>
			<form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-8 ">
				<div className="w-3/4 mx-auto ">
					<label htmlFor="input-text" className="text-xl mr-3 font-bold">
						Lookup Word:
					</label>
					<input
						className="p-1 text-lg border-2 rounded-md"
						type="text"
						value={words}
						name="input-text"
						id="input-text"
						placeholder="that match"
						onChange={(e) => setWords(e.target.value)}
					/>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
			<section>
				{answers && (
					<div className="w-1/2 mx-auto mt-8">
						<h2 className="text-4xl text-center font-bold underline mb-1">
							Matching Words
						</h2>
						<h3 className="text-2xl text-center font-bold mb-4 text-purple-800">
							Words matching - {words}
						</h3>
						<ul className="list-disc list-inside">
							{answers.map((answer) => {
								const { word, score } = answer; // destructuring
								return (
									<li
										className="text-xl list-none text-center leading-loose cursor-pointer"
										key={score}
										onClick={() => setWords(word)}
										onDoubleClick={handleSubmit}
									>
										{word}
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</section>
		</main>
	);
}

export default App;
