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

import { convertDate } from '../assets/convertDate'

function VideoItem({ video, onVideoSelect, value }) {
	const videoDate = convertDate(video.snippet.publishedAt)

	return (
		<>
			<Tooltip
				text={`Launch "${video.snippet.title}" in Media Player`}
				enterDelay={100}
				leaveDelay={300}
				className="video-item__tooltip">
				<ScrollView id="cutout">
					<div className="recommended-video__src--loading"></div>
					<img
						className={`recommended-video__src`}
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
