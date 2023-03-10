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

	const listOfVideos = () => {
		return <></>
	}

	const handleState = (title) => {
		setState({ activeTab: title })
	}

	return (
		<>
			{/* <ScrollView style={{ width: '300px', height: '200px' }}> */}
			<Window>
				<WindowHeader>Related-Videos.exe</WindowHeader>
				<WindowContent>
					<Tabs
						value={activeTab}
						onChange={handleChange}>
						{videoList.map(
							(video, id, index) => (
								console.log(videoList),
								(
									<>
										<Tab value={index}>{video.snippet.title}</Tab>
									</>
								)
							)
						)}
					</Tabs>
					{videoList.map((video, id, index) => {
						activeTab === index ? (
							<>
								<TabBody style={{ height: 300 }}>
									<img
										className="selected-video__src"
										key={id}
										title="Video Player"
										style={{ marginRight: '20px' }}
										alt="thumbnail"
										src={video.snippet.thumbnails.medium.url}
									/>
									{/* <VideoItem
										key={id}
											activeTab={activeTab}
										value={index}
										onVideoSelect={onVideoSelect}
										video={video}
									/> */}
								</TabBody>
							</>
						) : (
							<>
								<img
									className="selected-video__src"
									key={id}
									title="Video Player"
									style={{ marginRight: '20px' }}
									alt="thumbnail"
									src={video.snippet.thumbnails.medium.url}
								/>
							</>
						)
					})}
					)
					<p>
						<code>joel straley</code>
					</p>
				</WindowContent>
				{/* 	</ScrollView> */}
			</Window>
		</>
	)
}
