import React from 'react'
import { MenuList, ScrollView, Window, WindowContent } from 'react95'
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
			<Window>
				<ScrollView>
					{listOfVideos}
					<p>
						<code>joel straley</code>
					</p>
					{/* 	</ScrollView> */}
				</ScrollView>
			</Window>
		</>
	)
}
