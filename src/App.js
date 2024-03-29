import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

import Main from '../src/Main/Main.jsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
		},
	},
})

function App() {
	return (
		<>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Routes>
						{['/', '*'].map((path, index) => (
							<Route
								key={index}
								path={path}
								element={<Main />}
							/>
						))}
					</Routes>
				</QueryClientProvider>
			</BrowserRouter>
		</>
	)
}

export default App
