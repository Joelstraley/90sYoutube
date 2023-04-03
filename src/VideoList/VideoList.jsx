import { useState } from 'react'
import {
	MenuList,
	ScrollView,
	Tab,
	TabBody,
	Tabs,
	Window,
	WindowContent,
	WindowHeader,
} from 'react95'
import VideoItem from '../VideoItem/VideoItem'

export default function VideoList({ videoList, onVideoSelect }) {
	const [state, setState] = useState({
		activeTab: 1,
	})

	const handleChange = (value) => setState({ activeTab: value })

	const { activeTab } = state
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

	const handleState = (title) => {
		setState({ activeTab: title })
	}

	return (
		<>
			{/* <>
			{/* <ScrollView style={{ width: '300px', height: '200px' }}> */}

			<Window>
				<WindowHeader>Related-Videos.exe</WindowHeader>
				<ScrollView>{listOfVideos}</ScrollView>
			</Window>
		</>
	)
}
