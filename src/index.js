import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {createRoot} from 'react-dom/client'

import Hello from './pages/hello'

const App = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Hello />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
