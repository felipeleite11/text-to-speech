import './App.css'

import { SpeechNoLib } from './SpeechNoLib'
import { SpeechUsingHook } from './SpeechUsingHook'
import { RecognitionNoLib } from './RecognitionNoLib'
import { ReactSpeechKit } from './ReactSpeechKit'

function App() {
	return (
		<main className="mx-8 mb-10 flex flex-col gap-4">
			<h1>TEXT TO SPEECH</h1>

			<div className="grid grid-cols-3 gap-8">
				<div className="border p-3 rounded-md border-gray-600">
					<h2>Sem library</h2>
					<SpeechNoLib />
				</div>

				<div className="border p-3 rounded-md border-gray-600">
					<h2>Sem library, com hook</h2>
					<SpeechUsingHook />
				</div>
			</div>

			<h1>SPEECH TO TEXT (RECOGNITION)</h1>

			<div className="grid grid-cols-3 gap-8">
				<div className="border p-3 rounded-md border-gray-600">
					<h2>
						Sem library 
						<span className="text-red-500"> (ONLY IN GOOGLE CHROME)</span>
					</h2>
					<RecognitionNoLib />
				</div>

				<div className="border p-3 rounded-md border-gray-600">
					<h1>Library React Speech Kit</h1>
					<h2>Recognition and Speech</h2>
					<ReactSpeechKit />
				</div>
			</div>
		</main>
	)
}

export default App
