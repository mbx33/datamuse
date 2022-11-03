import React from 'react';

const AnswerCard = ({ answers, handleSubmit, words, setWords, onMouseOver }) => {
	return (
		<div>
			{answers && (
				<div className=" mx-auto mt-8">
					<h3 className="text-2xl text-center font-bold mb-4 text-purple-800">
						matching - {words}
						<p className="text-sm">double click any word to lookup</p>
					</h3>
					<div className="max-w-xl mx-auto">
						{answers.map((answer) => {
							const { word, score } = answer; // destructuring
							return (
								<div
									className="hover:bg-blue-400 shadow-md rounded-sm m-2 text-xl border bordborder-emerald-200 p-5 text-center leading-loose cursor-pointer "
									key={score}
									onClick={() => setWords(word)}
									onDoubleClick={handleSubmit}
									// onMouseOver={onMouseOver}
								>
									{word}
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default AnswerCard;
