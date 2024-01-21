import { useEffect, useState } from 'react'

const speech = window.speechSynthesis

export function SpeechNoLib() {
	const [text, setText] = useState('Este texto está sendo lido com recursos nativos do navegador')
	const [voicesList, setVoicesList] = useState<SpeechSynthesisVoice[]|null>(null)
	const [selectedVoice, setSelectedVoice] = useState(2)
	const [rate, setRate] = useState(1.0)
	const [volume, setVolume] = useState(1)
	const [speaking, setSpeaking] = useState(false)

	function handleSpeak() {
		if (text && voicesList) {
			try {
				setSpeaking(true)

				const ut = new SpeechSynthesisUtterance(text)

				ut.voice = voicesList[selectedVoice]
				ut.rate = rate
				ut.volume = volume
				ut.onend = () => { 
					setSpeaking(false) 
				}

				speech.speak(ut)
			} catch(e) {
				console.log(e)
			}
		}
	}

	useEffect(() => {
		const allowedVoices = speech.getVoices()

		setVoicesList(allowedVoices.filter(v => v.name.includes('Brazil')))
	}, [])

	if(!voicesList) {
		return (
			<p>Carregando...</p>
		)
	}

	return (
		<div className="container">
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