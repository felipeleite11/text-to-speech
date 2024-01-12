import './App.css'

import { NoLib } from './NoLib'
import { WithLib } from './WithLib'

function App() {
	return (
		<main>
			<h1>Sem library</h1>
			<NoLib />

			<h1>Com library grace-speak</h1>
			<WithLib />
		</main>
	)
}

export default App
