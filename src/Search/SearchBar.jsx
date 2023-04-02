import { useState } from 'react'
import { Button, TextInput } from 'react95'
import './SearchBar.css'

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
				<div className="search-bar__logo">
					<img src="https://win98icons.alexmeub.com/icons/png/monitor_windows.png" />
					<h3 className="search-bar__title">NetTube</h3>
				</div>
				<div className="search-bar__input">
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
					<img
						class="search-bar__icon"
						src="https://win98icons.alexmeub.com/icons/png/search_web-0.png"
						alt="windows magnifying glass icon"
					/>
					<div className="search-bar__btns-container">
						<Button
							className="search-bar__btns"
							variant="raised"
							onClick={handleSubmit}>
							Search Videos
						</Button>
						<Button
							className="search-bar__btns"
							variant="raised"
							onClick={handleSubmit}>
							Upload Video
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
