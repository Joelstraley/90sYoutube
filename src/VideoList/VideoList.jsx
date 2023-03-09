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
		activeTab: 0,
	})

	const handleChange = (value) => setState({ activeTab: value })

	const { activeTab } = state
	/* <Tabs value={activeTab} onChange={handleChange}>
	<Tab value={0}>Shoes</Tab>
	<Tab value={1}>Accesories</Tab>
	<Tab value={2}>Clothing</Tab */

	if (!videoList) return <></>

	const listOfVideos = () => {
		return (
			<>
				<Tabs
					rows={1}
					value={activeTab}
					onChange={handleChange}>
					<Tab value={0}>video.snippet.title</Tab>
				</Tabs>
				{videoList.map((video, id, index) => (
					<>
						{activeTab === 0 && (
							<TabBody style={{ height: 300 }}>
								<VideoItem
									key={id}
									activeTab={activeTab}
									value={index}
									onVideoSelect={onVideoSelect}
									video={video}
								/>
							</TabBody>
						)}
					</>
				))}
			</>
		)
	}

	return (
		<>
			{/* <ScrollView style={{ width: '300px', height: '200px' }}> */}
			<Window style={{ width: 350 }}>
				<WindowHeader>Related-Videos.exe</WindowHeader>
				<WindowContent>
					{listOfVideos()}
					<p>
						<code>joel straley</code>
					</p>
				</WindowContent>
				{/* 	</ScrollView> */}
			</Window>
		</>
	)
}
