import React from 'react'
import './VideoItem.css'
import { Frame, GroupBox, ScrollView, Separator, Tooltip } from 'react95'
import { convertDate } from '../assets/convertDate'

function VideoItem({ video, onVideoSelect, value, theme }) {
	const videoDate = convertDate(video.snippet.publishedAt)

	return (
		<>
			<Tooltip
				text={`Launch "${video.snippet.title}" in Media Player`}
				enterDelay={100}
				leaveDelay={300}
				className="video-item__tooltip">
				<ScrollView id="cutout">
					<GroupBox
						label={`${video.snippet.title}`}
						className={'recommended-video__title'}>
						<div className="recommended-video__src--loading"></div>
						<img
							className="recommended-video__src"
							title="Video Player"
							style={{ marginRight: '20px' }}
							alt="thumbnail"
							src={video.snippet.thumbnails.medium.url}
							onClick={() => onVideoSelect(video)}
						/>
						<p style={{ lineHeight: 1.3 }}>{video.snippet.channelTitle}</p>
						<Frame
							variant="well"
							style={{ padding: '0 .25em' }}>
							<p>Date Posted: {videoDate}</p>
						</Frame>
					</GroupBox>
				</ScrollView>
			</Tooltip>
			<Separator />
		</>
	)
}

export default VideoItem
