import React from 'react'
import { Window, WindowContent, ScrollView, MenuList } from 'react95'

export default function VideoList({ videoList }) {
	console.log('video', videoList)
	return (
		<>
			<Window>
				<WindowContent>
					{/* <ScrollView style={{ width: '300px', height: '200px' }}> */}
					<MenuList>
						{videoList.map((video) => {
							return (
								<>
									<iframe
										className="Selected-Video__src"
										title="Video Player"
										src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
									<p>{video.snippet.title}</p>
								</>
							)
						})}
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
					</MenuList>
					{/* 	</ScrollView> */}
				</WindowContent>
			</Window>
		</>
	)
}
