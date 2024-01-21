import { useState } from "react"

type Language = 'pt_BR' | 'en_US' | 'es_ES'

interface Recognition {
	lang: Language
	onstart: () => void
	onend: () => void
	onerror: (e: any) => void
	onresult: (e: RecognitionResult) => void
	start: () => void
	stop: () => void
}

interface RecognitionResult {
	results: { transcript: string }[][]
}

// @ts-ignore
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition

export function RecognitionNoLib() {
	const [isRecording, setIsRecording] = useState(false)
	const [language, setLanguage] = useState<Language>('pt_BR')
	const [result, setResult] = useState<string|null>(null)

	function record() {
		setIsRecording(true)

		recog.start()
	}

	function stop() {
		setIsRecording(false)

		recog.stop()
	}

	let recog: SpeechRecognition
	recog = new Recognition()
	recog.lang = language
	recog.onstart = () => { console.log('Start recognition') }
	recog.onend = () => { console.log('Finish recognition') }
	recog.onerror = (e: any) => { console.log('Error', e) }
	recog.onresult = (e: SpeechRecognitionEvent) => { 
		const text = e.results[0][0].transcript

		setResult(text)
	}

	return (
		<div className="container">
			<select id="" onChange={(e: any) => {
				setLanguage(e.target.value)
			}}>
				<option value="pt_BR">Português</option>
				<option value="en_US">Inglês</option>
				<option value="es_ES">Espanhol</option>
			</select>

			{recog ? (
				<div>
					{!isRecording ? (
						<button onClick={record}>Gravar</button>
					) : (
						<button onClick={stop}>Parar</button>
					)}
				</div>
			) : (
				<p>SpeechRecognition não habilitado!</p>
			)}

			{result && (
				<p>{result}</p>
			)}
		</div>
	)
}