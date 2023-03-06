import React from 'react'
import { MenuList, ScrollView } from 'react95'
import VideoItem from '../VideoItem/VideoItem'

export default function VideoList({ videoList, onVideoSelect }) {
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
			{/* <ScrollView style={{ width: '300px', height: '200px' }}> */}
			<MenuList>
				<ScrollView>
					{listOfVideos}
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					{/* 	</ScrollView> */}
				</ScrollView>
			</MenuList>
		</>
	)
}
