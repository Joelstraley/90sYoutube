import { useState } from 'react'
import { Button, TextInput } from 'react95'

export default function SearchBar({ onFormSubmit }) {
	const [searchTerm, setSearchTerm] = useState('')

	const handleSubmit = (e) => {
		console.log('E', e)
		onFormSubmit(searchTerm)
		e.preventDefault()
		/* document.getElementById('search-input').reset() */
	}

	return (
		<div className="search-bar">
			<div className="search-bar__header">
				<h3>GeoTube</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<TextInput
					id="search-input"
					type="text"
					placeholder="Search..."
					onChange={(e) => {
						setSearchTerm(e.target.value)
					}}
					width={15}
				/>
			</form>

			<Button
				variant="raised"
				onClick={handleSubmit}>
				Search Videos
			</Button>
			<Button
				variant="raised"
				onClick={handleSubmit}>
				Upload Video
			</Button>
		</div>
	)
}
