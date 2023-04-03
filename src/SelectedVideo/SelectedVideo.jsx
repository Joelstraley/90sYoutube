import React from 'react'
import './SelectedVideo.css'
import { convertDate } from '../assets/convertDate'
import {
	Button,
	Frame,
	ProgressBar,
	Window,
	WindowHeader,
	WindowContent,
	ScrollView,
} from 'react95'
import { MediaPlayer } from 'win95-media-player/'

export default function SelectedVideo({ selectedVideo }) {
	if (!selectedVideo) return <></>
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

	const videoDate = convertDate(selectedVideo.snippet.publishedAt)

	const playlist = [
		{
			url: 'https://archive.org/download/CC1301_windows_95/CC1301_windows_95_512kb.mp4',
			title: 'Computer Chronicles - Windows 95',
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
				<WindowContent /* style={{ padding: '1rem' }} */>
					{/* 		<MediaPlayer
						className="player"
						playlist={playlist}
						showVideo
					/> */}
					<Frame style={{ borderRadius: '10px' }}>
						<div className="video-frame">
							<iframe
								className="selected-video__src"
								title="Video Player"
								src={videoSrc}></iframe>
							<div className="video-frame__btns">
								<Button primary>Primary</Button>
								<Button primary>Primary</Button>
								<Button primary>Primary</Button>
							</div>
						</div>
					</Frame>
					<p className="selected-video__channel-title">
						{selectedVideo.snippet.channelTitle}
						<span> {videoDate}</span>
					</p>

					<Frame
						variant="well"
						className="footer">
						<p className="selected-video__channel-desc">
							{selectedVideo.snippet.description}
						</p>
					</Frame>
				</WindowContent>
			</Window>
		</>
	)
}
