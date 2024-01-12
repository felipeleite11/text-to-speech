import './App.css'

import { NoLib } from './NoLib'
import { UsingHook } from './UsingHook'

function App() {
	return (
		<main>
			<h1>Sem library</h1>
			<NoLib />

			<h1>Com hook</h1>
			<UsingHook />
		</main>
	)
}

export default App
