import React, { useState, useEffect, useRef } from 'react'
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
	faDash,
	faXmark,
} from '@fortawesome/free-solid-svg-icons'
import Comments from '../Comments/Comments'
import MovieIcon from '../assets/Movie Frame (3-2-1).png'
import Volume from '../assets/Volume.png'
import MuteVolume from '../assets/Mute volume.png'
import { convertDate } from '../assets/convertDate'
import {
	AppBar,
	Button,
	Frame,
	ProgressBar,
	Slider,
	Separator,
	Toolbar,
	Handle,
	GroupBox,
	Window,
	WindowHeader,
	WindowContent,
	ScrollView,
} from 'react95'
import youtube from '../assets/youtube'
/* import { MediaPlayer } from 'win95-media-player/' */

export default function SelectedVideo({ selectedVideo }) {
	const [openMenu, setOpenMenu] = useState(false)

	const [openState, setOpen] = useState(false)

	const styles = {
		popup: {
			display: 'none',
			opacity: '0',
		},
		show: {},
	}

	const handleOpen = () => {
		if (openState === true) {
			setOpen(false)
		} else {
			setOpen(true)
		}
	}

	const videoRef = useRef(null)
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
	let times = 0
	let playY
	console.log(`${selectedVideo.id.videoId}`)
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
		<div className="selected-video">
			<Window>
				<WindowHeader>
					<div className="selected-video__title">
						<div className="selected-video__title--left">
							<img
								src={MovieIcon}
								alt="Windows-90s-Movie-Icon"
								className="selected-video__title--movie-icon"
							/>
							{selectedVideo.snippet.title}
						</div>
						<div className="selected-video__title--right">
							<Button
								className="selected-video__title--button"
								/* onClick={() => handleOpen()} */
							>
								{/* <FontAwesomeIcon icon={faDash}  /> */}
								__
							</Button>
							<Button
								className="selected-video__title--button"
								/* onClick={() => handleOpen()} */
							>
								<FontAwesomeIcon icon={faXmark} />
							</Button>
						</div>
					</div>
				</WindowHeader>
				<Toolbar>
					<Button
						variant="menu"
						size="sm">
						File
					</Button>
					<Button
						variant="menu"
						size="sm">
						Edit
					</Button>
					<Button
						variant="menu"
						size="sm"
						disabled>
						Save
					</Button>
				</Toolbar>
				<WindowContent /* style={openState ? styles.hide : styles.show} */>
					<div className="selected-video--frame-container">
						<Frame className="video-frame">
							<div className="video-frame__btns">
								<iframe
									id="player"
									className="selected-video__src"
									title="Video Player"
									frameBorder="0"
									allow="autoplay; encrypted-media"
									allowFullScreen
									/* 	credentialless
							origin-when-cross-origin */
									src={videoSrc}
									ref={videoRef}
								/>
								<AppBar className="button-container">
									<Toolbar className="buttons">
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
										<img
											className="buttons-slider__volume-img"
											src={Volume}
											alt="volume"
										/>
										<div className="buttons-slider">
											<Slider
												/* className="buttons-slider" */
												size="30px"
												defaultValue={2}
											/>
										</div>
									</Toolbar>
								</AppBar>
							</div>
						</Frame>
					</div>

					<Separator />
					<p className="selected-video__channel-title-label">
						<span style={{ 'text-decoration': 'underline' }}>A</span>rtist:
						<Frame
							variant="well"
							className="selected-video__channel-title-container">
							<span className="selected-video__channel-title">
								{selectedVideo.snippet.channelTitle}
							</span>
						</Frame>
					</p>

					<p className="selected-video__channel-desc-container">
						<span style={{ 'text-decoration': 'underline' }}>D</span>escription:
						<ScrollView
							style={{ width: '400px', height: '50px' }}
							className="selected-video__channel-title-container">
							<p className="selected-video__channel-desc">
								{selectedVideo.snippet.description}
							</p>
						</ScrollView>
					</p>
				</WindowContent>
				<Separator />
				<Frame
					variant="well"
					className="selected-video__channel-date-container">
					<span className="selected-video__channel-date">
						Date Posted:
						<span>{videoDate}</span>
					</span>
				</Frame>
				<Separator />
				<Comments />
			</Window>
		</div>
	)
}
