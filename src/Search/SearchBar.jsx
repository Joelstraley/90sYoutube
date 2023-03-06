import { Button, TextInput } from 'react95'

export default function SearchBar({ onFormSubmit, getInput }) {
	return (
		<div className="search-bar">
			<div className="search-bar__header">
				<h3>GeoTube</h3>
			</div>
			<TextInput
				type="text"
				placeholder="Search..."
				/* onChange={(e) => getInput(e.target.value)} */
				onSubmit={onFormSubmit}
				width={150}
			/>
			<Button variant="raised">Search</Button>
		</div>
	)
}
