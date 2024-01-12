import { useState } from "react"

import { useVoice } from "./hook/useVoice"

export function UsingHook() {
	const { speak, isSpeaking } = useVoice()

	const [text, setText] = useState('meu texto de exemplo')

	function handleSpeak() {
		speak(text, {
			rate: 1,
			volume: 1
		})
	}

	return (
		<div className="container">
			<textarea value={text} onChange={e => { setText(e.target.value) }}></textarea>

			<button onClick={handleSpeak}>Testar</button>

			{isSpeaking && (
				<p>Falando...</p>
			)}
		</div>
	)
}