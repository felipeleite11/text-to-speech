import { useState } from 'react'
// @ts-ignore
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit'

export function ReactSpeechKit() {
	const [value, setValue] = useState('')

	const { listen, listening, stop } = useSpeechRecognition({
		onResult: (result: string) => {
			setValue(result)
		}
	})

	const { speak, speaking, voices, supported } = useSpeechSynthesis()

	if(!supported) {
		return <p>Este navegador não suporta este recurso.</p>
	}

	return (
		<div className="container">
			<textarea
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>

			<button 
				onMouseDown={() => {
					if(!listening) {
						listen({ lang: 'pt-BR' })
					}
				}}
				onMouseUp={() => {
					stop()

					speak({ 
						text: value, 
						voice: voices[1]
					})
				}}
			>
				{!listening ? '🎤 Gravar' : 'Gravando'}
			</button>

			<button 
				onClick={() => speak({ 
					text: value, 
					voice: voices[1]
				})}
				disabled={speaking}
			>
				{speaking ? 'Falando' : 'Falar'}
			</button>
		</div>
	)
}