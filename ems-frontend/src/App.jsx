import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmp from './components/ListEmp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEmp from './components/AddEmp'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<ListEmp />}/>
					<Route path='/add' element={<AddEmp />}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
