import React from 'react'
import './SelectedVideo.css'
import {
	Frame,
	ProgressBar,
	Window,
	WindowHeader,
	WindowContent,
	ScrollView,
} from 'react95'

import { MediaPlayer } from 'win95-media-player'

export default function SelectedVideo({ selectedVideo, loading, percent }) {
	console.log('test', selectedVideo)
	if (!selectedVideo) return <></>
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

	const playlist = [
		{
			url: videoSrc,
			title: selectedVideo.snippet.title,
		},
	]
	return (
		<>
			{loading ? (
				<ProgressBar value={Math.floor(percent)} />
			) : (
				<>
					<Window
						resizable
						className="selected-video">
						<WindowHeader>
							<span>{selectedVideo.snippet.title}</span>
						</WindowHeader>
						<WindowContent style={{ padding: '1rem' }}>
							{/* <Frame style={{ borderRadius: '10px' }}> */}
							{/* 		<MediaPlayer
									className="player"
									playlist={playlist}
									showVideo
									fullscreenEnabled
								/> */}
							<iframe
								className="selected-video__src"
								title="Video Player"
								src={videoSrc}></iframe>
							{/* </Frame> */}
							<Frame
								variant="well"
								className="footer">
								<p className="selected-video__title">
									{selectedVideo.snippet.channelTitle}
								</p>
								<p>{selectedVideo.snippet.description}</p>
							</Frame>
						</WindowContent>
					</Window>
				</>
			)}
		</>
	)
}
