import React from 'react'
import './VideoItem.css'
import { GroupBox, ScrollView, Separator, Tooltip, Window } from 'react95'

function VideoItem({ video, onVideoSelect }) {
	const videoDate = video.snippet.publishedAt

	return (
		<>
			<Window>
				<GroupBox
					variant="flat"
					label={video.snippet.title}>
					<Tooltip
						text={`Launch ${video.snippet.title} in Media Player`}
						/* enterDelay={100}
					leaveDelay={500} */
						style={{ 'z-index': 100 }}>
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
							<p>{video.snippet.description}</p>
						</ScrollView>
					</Tooltip>
				</GroupBox>
			</Window>
			<Separator />
		</>
	)
}

export default VideoItem
