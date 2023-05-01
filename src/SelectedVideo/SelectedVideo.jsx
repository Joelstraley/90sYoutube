import React, { useEffect, useRef } from 'react'
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
	AppBar,
	Button,
	Frame,
	ProgressBar,
	Separator,
	Toolbar,
	Handle,
	Window,
	WindowHeader,
	WindowContent,
	ScrollView,
} from 'react95'
import youtube from '../assets/youtube'
/* import { MediaPlayer } from 'win95-media-player/' */

export default function SelectedVideo({ selectedVideo }) {
	const videoRef = useRef(null)
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
	let times = 0
	let playY
	/* 
	const createPlayer = (videoSrc) => {
		new window.YT.Player('player', {
			height: '360',
			width: '640',
			videoId: videoSrc,
		})
	} */
	/* 
	useEffect(() => {
		// Load the YouTube Iframe API script
		const scriptTag = document.createElement('script')
		scriptTag.src = 'https://www.youtube.com/iframe_api'
		document.body.appendChild(scriptTag)

		// Add a global function for creating the player
		window.onYouTubeIframeAPIReady = () => createPlayer(videoSrc)
	}, [])

	useEffect(() => {
		// Call the createPlayer function when the video ID changes
		if (videoSrc !== '') {
			createPlayer(videoSrc)
		}
	}, [videoSrc]) */

	if (!selectedVideo) return <></>

	const videoDate = convertDate(selectedVideo.snippet.publishedAt)

	/* const opts = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	} */

	/* function onPlayerReady(event) {
		var embedCode = event.target.getVideoEmbedCode()
		event.target.playVideo()
		if (document.getElementById('embed-code')) {
			document.getElementById('embed-code').innerHTML = embedCode
		}
	}
 */

	/* 	const handlePause = () => {
		videoRef.current.contentWindow.postMessage('pause', '*')
	} */

	const handlePlay = () => {
		console.log(videoRef)
		/* videoRef.current.contentWindow.postMessage('play', '*') */
		if (times === 0) {
			playY = videoRef.current.src += '?autoplay=1&controls=0&modestbranding=1'
			times = 1
		}
	}

	const handleStop = () => {
		/* videoRef.current.contentWindow.postMessage('stop', '*') */
		console.log(playY)
		playY = playY.slice(0, -27)
		console.log(playY)
		videoRef.current.src = playY
		times = 0
	}

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
					<Frame className="video-frame">
						{/* 		<YouTube
							videoSrc={videoSrc}
							opts={opts}
						/> */}

						{/* 	<iframe
								id="ytplayer"
								type="text/html"
								width="720"
								height="405"
								src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&controls=0&enablejsapi=1&modestbranding=1"
								frameBorder="0"></iframe> */}

						{/* 	<YouTube
							videoSrc={videoSrc}
							opts={opts}
							ref={videoRef}
							onReady={(e) => onPlayerReady(e)}
						/> */}

						<div className="video-frame__btns">
							{/* 	<iframe
								id="player"
								className="selected-video__src"
								title="Video Player"
								credentialless
								origin-when-cross-origin
								src={videoSrc}
								ref={videoRef}></iframe> */}

							<iframe
								id="player"
								className="selected-video__src"
								title="Video Player"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
								/* 	credentialless
							origin-when-cross-origin */
								src={videoSrc}
								ref={videoRef}
							/>
							<AppBar>
								<Toolbar>
									<Handle size={35} />
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
									{/* 	<Button
								onClick={handlePause}
								default>
								<FontAwesomeIcon icon={faPause} />
							</Button> */}
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
								</Toolbar>
							</AppBar>
						</div>

						{/* 		<YouTube
							videoSrc={videoSrc}
							opts={opts}
							ref={videoRef}></YouTube> */}
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
