import React from 'react'
import './VideoItem.css'
import {
	GroupBox,
	ScrollView,
	Separator,
	Tab,
	TabBody,
	Tooltip,
	Window,
} from 'react95'

function VideoItem({ video, onVideoSelect, value }) {
	const videoDate = video.snippet.publishedAt

	return (
		<>
			<Tooltip
				text={`Launch "${video.snippet.title}" in Media Player`}
				/* enterDelay={100}
					leaveDelay={500} */
				className="video-item__tooltip">
				<ScrollView id="cutout">
					<img
						className="selected-video__src"
						title="Video Player"
						style={{ marginRight: '20px' }}
						alt="thumbnail"
						src={video.snippet.thumbnails.medium.url}
						onClick={() => onVideoSelect(video)}
					/>

					<p style={{ lineHeight: 1.3 }}>{video.snippet.channelTitle}</p>
					<p>{videoDate}</p>
					{/* <p>{video.snippet.description}</p> */}
				</ScrollView>
			</Tooltip>
			<Separator />
		</>
	)
}

export default VideoItem
