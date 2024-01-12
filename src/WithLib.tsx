import { useEffect, useState } from "react"
import Speaker from "grace-speak"

const speaker = new Speaker()

export function WithLib() {
	const [text, setText] = useState('Este texto está sendo lido com a biblioteca grace speak!')
	const [voicesList, setVoicesList] = useState<SpeechSynthesisVoice[]>([])
	const [selectedVoice, setSelectedVoice] = useState(0)
	const [rate, setRate] = useState(1.0)
	const [volume, setVolume] = useState(1)
	const [speaking, setSpeaking] = useState(false)

	function handleSpeak() {
		setSpeaking(true)

		speaker.speak(text, {
			voice: voicesList[selectedVoice],
			rate,
			volume,
			onend: () => {
				setSpeaking(false)
			}
		})
	}

	useEffect(() => {
		const speech = window.speechSynthesis

		let allowedVoices = speech.getVoices()

		allowedVoices = allowedVoices.filter(v => v.name.includes('Brazil'))

		setVoicesList(allowedVoices)
	}, [])

	useEffect(() => {
		console.log('selectedVoice', selectedVoice, voicesList[selectedVoice])
	}, [selectedVoice])

	if(!voicesList.length) {
		return <div>Carregando...</div>
	}

	return (
		<div className="container">
			<div className="textarea-container">
				<label htmlFor="rate">Texto</label>
				<textarea
					id="text"
					value={text}
					onChange={e => { setText(e.target.value) }}
					style={{
						height: 80
					}}
					placeholder="Digite..."
					disabled={speaking}
				>
					Meu teste aqui
				</textarea>
			</div>

			<div className="range-container">
				<label htmlFor="rate">Rate: ({rate})</label>
				<input 
					type="range"
					min={1.2} 
					max={4} 
					step={0.1} 
					value={rate} 
					onChange={e => { setRate(Number(e.target.value)) }} 
				/>
			</div>

			<div className="range-container">
				<label>Volume: ({volume})</label>
				<input 
					type="range"
					min={0} 
					max={2} 
					step={0.1} 
					value={volume} 
					onChange={e => { setVolume(Number(e.target.value)) }} 
				/>
			</div>

			<div className="select-container">
				<label htmlFor="rate">Texto</label>
				<select 
					value={selectedVoice} 
					onChange={(e: any) => {
						setSelectedVoice(Number(e.target.value))
					}}
					disabled={speaking}
				>
					{voicesList.map((voice, idx) => (
						<option value={idx} key={voice.name}>{voice.name}</option>
					))}
				</select>
			</div>

			<button 
				onClick={handleSpeak}
				disabled={speaking}
			>
				Falar
			</button>

			{speaking && (
				<p>Falando...</p>
			)}
		</div>
	)
}