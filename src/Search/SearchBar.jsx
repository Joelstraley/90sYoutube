import { useState } from 'react'
import { Button, TextInput } from 'react95'
import avatar from './../assets/avatar-image.png'
import './SearchBar.css'

export default function SearchBar({ onFormSubmit, onThemeChange }) {
	const [searchTerm, setSearchTerm] = useState('')

	const handleSubmit = (e) => {
		onFormSubmit(searchTerm)
		e.preventDefault()
	}

	const handleClick = (e) => {
		onThemeChange()
		e.preventDefault()
	}

	/* 	const openImage = () => {
		window.open(
			'./../assets/BillAndJay.jpg',
			'Image',
			'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1'
		)
	} */

	return (
		<div className="search-bar">
			<div className="search-bar__header">
				<div className="search-bar__logo">
					<img
						className="search-bar__logo--image"
						alt="Windows-Monitor-Logo"
						src="https://win98icons.alexmeub.com/icons/png/monitor_windows.png"
						onClick={handleClick}
						/* onClick={() => openImage() }*/
					/>
					<h3 className="search-bar__title">NetTube</h3>
				</div>
				<div className="search-bar__input-container">
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
							className="search-bar__icon"
							src="https://win98icons.alexmeub.com/icons/png/search_web-0.png"
							alt="Windows-Magnifying-Glass-Icon"
						/>
					</div>
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
				<div className="search-bar__avatar">
					<a href="https://joel-straley-portfolio.netlify.app/">
						<img
							src={avatar}
							alt="Broken-Img-Icon"
							className="search-bar__avatar-img"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}
