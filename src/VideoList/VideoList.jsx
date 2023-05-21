import { useState } from 'react'
import {
	Button,
	MenuList,
	ScrollView,
	Tab,
	TabBody,
	Tabs,
	Toolbar,
	Window,
	WindowContent,
	WindowHeader,
} from 'react95'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VideoItem from '../VideoItem/VideoItem'
import '../VideoList/VideoList.css'

export default function VideoList({ videoList, onVideoSelect }) {
	/* 	const [state, setState] = useState({
		activeTab: 1,
	})

	const handleChange = (value) => setState({ activeTab: value })

	const { activeTab } = state */
	/* <Tabs value={activeTab} onChange={handleChange}>
	<Tab value={0}>Shoes</Tab>
	<Tab value={1}>Accesories</Tab>
	<Tab value={2}>Clothing</Tab */

	if (!videoList) return <></>

	const listOfVideos = videoList.map((video, id) => (
		<VideoItem
			key={id}
			onVideoSelect={onVideoSelect}
			video={video}
		/>
	))
	return (
		<>
			{/* <>
			{/* <ScrollView style={{ width: '300px', height: '200px' }}> */}
			<div className="related-videos">
				<Window>
					<WindowHeader>
						<div className="selected-video__title">
							<div className="selected-video__title--left">
								<p>Related-Videos.exe</p>
							</div>

							<div className="selected-video__title--right">
								<Button
									className="selected-video__title--button"
									/* onClick={() => handleOpen()} */
								>
									{/* <FontAwesomeIcon icon={faDash}  /> */}
									__
								</Button>
								<Button
									className="selected-video__title--button"
									/* onClick={() => handleOpen()} */
								>
									<FontAwesomeIcon icon={faXmark} />
								</Button>
							</div>
						</div>
					</WindowHeader>
					<Toolbar>
						<Button
							variant="menu"
							size="sm">
							File
						</Button>
						<Button
							variant="menu"
							size="sm">
							Edit
						</Button>
						<Button
							variant="menu"
							size="sm"
							disabled>
							Save
						</Button>
					</Toolbar>
					<ScrollView>{listOfVideos}</ScrollView>
				</Window>
			</div>
		</>
	)
}
