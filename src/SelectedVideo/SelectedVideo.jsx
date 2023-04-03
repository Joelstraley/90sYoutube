import React from 'react'
import './SelectedVideo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlay,
	faSquare,
	faPause,
	faBackward,
	faFastBackward,
	faForward,
	faFastForward,
} from '@fortawesome/free-solid-svg-icons'
import MovieIcon from '../assets/Movie Frame (3-2-1).png'
import { convertDate } from '../assets/convertDate'
import {
	Button,
	Frame,
	ProgressBar,
	Separator,
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
						<img
							src={MovieIcon}
							alt="Windows-90s-Movie-Icon"
							className="selected-video__title--movie-icon"
						/>
						{selectedVideo.snippet.title}
					</span>
				</WindowHeader>
				<WindowContent /* style={{ padding: '1rem' }} */>
					{/* 		<MediaPlayer
						className="player"
						playlist={playlist}
						showVideo
					/> */}
					<Frame>
						<div className="video-frame">
							<iframe
								className="selected-video__src"
								title="Video Player"
								src={videoSrc}></iframe>
							<div className="video-frame__btns">
								<Button default>
									<FontAwesomeIcon icon={faPlay} />
								</Button>
								<Button default>
									<FontAwesomeIcon icon={faSquare} />
								</Button>
								<Button default>
									<FontAwesomeIcon icon={faPause} />
								</Button>
								<Button default>
									<FontAwesomeIcon icon={faFastBackward} />
								</Button>
								<Button default>
									<FontAwesomeIcon icon={faBackward} />
								</Button>
								<Button default>
									<FontAwesomeIcon icon={faForward} />
								</Button>
								<Button default>
									<FontAwesomeIcon icon={faFastForward} />
								</Button>
							</div>
						</div>
					</Frame>
					<Separator />
					<Frame
						variant="inside"
						className="selected-video__channel-title-container">
						<p className="selected-video__channel-title">
							{selectedVideo.snippet.channelTitle}
							<span> {videoDate}</span>
						</p>
						<Separator />

						<Frame
							variant="well"
							className="footer">
							<p className="selected-video__channel-desc">
								{selectedVideo.snippet.description}
							</p>
						</Frame>
						<Separator />
					</Frame>
				</WindowContent>
			</Window>
		</>
	)
}
