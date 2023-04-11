import React from 'react'
import './SelectedVideo.css'
import YouTube from 'react-youtube'
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
/* import { MediaPlayer } from 'win95-media-player/' */

export default function SelectedVideo({ selectedVideo }) {
	console.log('SELECTED', selectedVideo)
	if (!selectedVideo) return <></>
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1&controls=0&modestbranding=1&enablejsapi=1`

	const videoDate = convertDate(selectedVideo.snippet.publishedAt)
	/* 
	let player
	function onYouTubeIframeAPIReady() {
		player = new YouTube.PlayerState('player', {
			height: 500,
			width: 900,
			videoId: `${selectedVideo.id.videoId}`,
			playerVars: {
				autoplay: 1,
				controls: 0,
				playsinline: 1,
			},
			events: {
				onReady: onPlayerReady,
				onStateChange: onPlayerStateChange,
			},
		})
	}

	function onPlayerReady(event) {
		var embedCode = event.target.getVideoEmbedCode()
		event.target.playVideo()
		if (document.getElementById('embed-code')) {
			document.getElementById('embed-code').innerHTML = embedCode
		}
	}

	var done = false
	function onPlayerStateChange(event) {
		if (event.data === YouTube.PlayerState.PLAYING && !done) {
			setTimeout(handleStop, 6000)
			done = true
		}
	} */
	/* function stopVideo() {
		player.stopVideo()
	} */

	const handlePause = (e) => {
		console.log(e.target.onplay)
		player.pauseVideo()
	}

	const handlePlay = (e) => {
		console.log(e)
		player.playVideo()
	}

	const handleStop = (e) => {
		console.log(e)
		player.stopVideo()
	}

	return (
		<>
			<Window className="selected-video">
				{console.log('vid', videoSrc)}
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
								id="player"
								className="selected-video__src"
								title="Video Player"
								src={videoSrc}></iframe>
							<div className="video-frame__btns">
								<Button
									onClick={handlePlay}
									default>
									<FontAwesomeIcon icon={faPlay} />
								</Button>
								<Button
									onClick={handleStop}
									default>
									<FontAwesomeIcon icon={faSquare} />
								</Button>
								<Button
									onClick={handlePause}
									default>
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
