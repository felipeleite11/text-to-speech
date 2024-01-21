import { useState } from "react"

import { useVoice } from "./hook/useVoice"

export function SpeechUsingHook() {
	const { speak, isSpeaking } = useVoice()

	const [text, setText] = useState('Este texto está sendo lido utilizando React Hooks')
	const [rate, setRate] = useState(1.7)

	function handleSpeak() {
		speak(text, {
			rate,
			volume: 1
		})
	}

	return (
		<div className="container">
			<textarea value={text} onChange={e => { setText(e.target.value) }}></textarea>

			<div className="range-container">
				<label htmlFor="rate">Rate: ({rate})</label>
				<input 
					type="range"
					min={1} 
					max={4} 
					step={0.1} 
					value={rate} 
					onChange={e => { setRate(Number(e.target.value)) }} 
				/>
			</div>

			<button onClick={handleSpeak}>Testar</button>

			{isSpeaking && (
				<p>Falando...</p>
			)}
		</div>
	)
}