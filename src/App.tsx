import './App.css'

import { SpeechNoLib } from './SpeechNoLib'
import { SpeechUsingHook } from './SpeechUsingHook'
import { RecognitionNoLib } from './RecognitionNoLib'

function App() {
	return (
		<main>
			<h1>TEXT TO SPEECH</h1>

			<h2>Sem library</h2>
			<SpeechNoLib />

			<h2>Com hook</h2>
			<SpeechUsingHook />

			<h1>
				SPEECH RECOGNITION
				<span style={{ color: 'red' }}> (only works in Google Chrome)</span>
				<span style={{ fontSize: 9 }}>Para funcionar, remover SpeechNoLib e SpeechUsingHook do arwuivo App.tsx.</span>
			</h1>

			<h2>Sem library</h2>
			<RecognitionNoLib />
		</main>
	)
}

export default App
