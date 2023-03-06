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

export default function SelectedVideo({ selectedVideo, loading, percent }) {
	console.log('test', selectedVideo)
	if (!selectedVideo) return <></>
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
	return (
		<>
			{loading ? (
				<ProgressBar value={Math.floor(percent)} />
			) : (
				<>
					<Window
						resizable
						className="window">
						<WindowHeader className="window-title">
							<span>{selectedVideo.snippet.title}</span>
						</WindowHeader>
						<WindowContent style={{ padding: '1rem' }}>
							<Frame>
								<iframe
									className="Selected-Video__src"
									title="Video Player"
									src={videoSrc}></iframe>
							</Frame>
							<p>{selectedVideo.snippet.channelTitle}</p>
							<p>{selectedVideo.snippet.description}</p>
						</WindowContent>
					</Window>
				</>
			)}
		</>
	)
}
