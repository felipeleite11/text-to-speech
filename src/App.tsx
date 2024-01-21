import './App.css'

import { SpeechNoLib } from './SpeechNoLib'
import { SpeechUsingHook } from './SpeechUsingHook'
import { RecognitionNoLib } from './RecognitionNoLib'
import { ReactSpeechKit } from './ReactSpeechKit'

function App() {
	return (
		<main>
			<h1>TEXT TO SPEECH</h1>

			<h2>Sem library</h2>
			<SpeechNoLib />

			<h2>Sem library, com hook</h2>
			<SpeechUsingHook />

			<h1>
				SPEECH RECOGNITION
				<span style={{ color: 'red' }}> (only works in Google Chrome)</span>
			</h1>

			<h2>Sem library</h2>
			<RecognitionNoLib />

			<h1>React Speech Kit</h1>
			<h2>Recognition and Speech</h2>
			<ReactSpeechKit />
		</main>
	)
}

export default App
