import { useState } from "react"

const speech = window.speechSynthesis

const allowedVoices = speech.getVoices().filter(v => v.name.includes('Brazil'))

interface SpeakOptions {
	rate?: number
	volume?: number
}

export function useVoice() {
	const [isSpeaking, setIsSpeaking] = useState(false)

	function speak(text: string, options?: SpeakOptions) {
		setIsSpeaking(true)

		const ut = new SpeechSynthesisUtterance(text)

		ut.voice = allowedVoices[2]
		ut.rate = options?.rate || 1
		ut.volume = options?.volume || 1
		ut.onend = () => {
			setIsSpeaking(false)
		}

		speech.speak(ut)
	}

	return {
		speak,
		isSpeaking
	}
}