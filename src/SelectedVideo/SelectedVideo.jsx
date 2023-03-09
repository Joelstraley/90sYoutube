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

export default function SelectedVideo({ selectedVideo }) {
	console.log('test', selectedVideo)
	if (!selectedVideo) return <></>
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

	const videoDate = selectedVideo.snippet.publishedAt

	const playlist = [
		{
			url: videoSrc,
			title: selectedVideo.snippet.title,
		},
	]
	return (
		<>
			<Window className="selected-video">
				<WindowHeader>
					<span className="selected-video__title">
						{selectedVideo.snippet.title}
					</span>
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
					<p className="selected-video__channel-title">
						{selectedVideo.snippet.channelTitle}
						<span> {videoDate}</span>
					</p>

					<Frame
						variant="well"
						className="footer">
						<p>{selectedVideo.snippet.description}</p>
					</Frame>
				</WindowContent>
			</Window>
		</>
	)
}
