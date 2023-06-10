import React, { useRef } from 'react'

import './SelectedVideo.css'
import {
	AppBar,
	Button,
	Frame,
	Hourglass,
	Slider,
	Separator,
	Toolbar,
	Window,
	WindowHeader,
	WindowContent,
	ScrollView,
} from 'react95'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlay,
	faSquare,
	faBackward,
	faFastBackward,
	faForward,
	faFastForward,
	faXmark,
} from '@fortawesome/free-solid-svg-icons'
import MovieIcon from '../assets/Movie Frame (3-2-1).png'
import Volume from '../assets/Volume.png'

import { convertDate } from '../assets/convertDate'
import Comments from '../Comments/Comments'

export default function SelectedVideo({ selectedVideo }) {
	const videoRef = useRef(null)
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
	let times = 0
	let playY

	const videoDate = convertDate(selectedVideo.snippet.publishedAt)

	const handlePlay = () => {
		if (times === 0) {
			playY = videoRef.current.src += '?autoplay=1&controls=0&modestbranding=1'
			times = 1
		}
	}

	const handleStop = () => {
		playY = playY.slice(0, -39)
		videoRef.current.src = playY
		times = 0
	}

	return (
		<>
			{selectedVideo ? (
				<div className="selected-video">
					<Window>
						<WindowHeader className="header-text">
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
										default>
										__
									</Button>
									<Button className="selected-video__title--button">
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
						<WindowContent>
							<div className="selected-video--frame-container">
								<Frame className="video-frame">
									<div className="video-frame__btns">
										<iframe
											id="player"
											className="selected-video__src"
											title="Video Player"
											frameBorder="0"
											allow="autoplay; encrypted-media"
											sandbox="allow-scripts allow-same-origin allow-presentation"
											/* 	credentialless */
											/* 	origin-when-cross-origin */
											src={videoSrc}
											ref={videoRef}
										/>
										<AppBar className="button-container">
											<Toolbar className="buttons">
												<Button
													onClick={handlePlay}
													variant="thin">
													<FontAwesomeIcon icon={faPlay} />
												</Button>
												<Button
													onClick={handleStop}
													variant="thin">
													<FontAwesomeIcon icon={faSquare} />
												</Button>
												<Separator
													orientation="vertical"
													size="2em"
												/>
												<Button variant="thin">
													<FontAwesomeIcon icon={faFastBackward} />
												</Button>
												<Button variant="thin">
													<FontAwesomeIcon icon={faBackward} />
												</Button>
												<Button variant="thin">
													<FontAwesomeIcon icon={faForward} />
												</Button>
												<Button variant="thin">
													<FontAwesomeIcon icon={faFastForward} />
												</Button>
												<Separator
													orientation="vertical"
													size="2em"
												/>
												<div className="buttons-volume-container">
													<img
														className="buttons-slider__volume-img button"
														src={Volume}
														alt="volume"
													/>
													<div className="buttons-slider">
														<Slider
															size="50px"
															defaultValue={5}
														/>
													</div>
												</div>
											</Toolbar>
										</AppBar>
									</div>
								</Frame>
							</div>

							<Separator />
							<p className="selected-video__channel-title-label">
								<span style={{ textDecoration: 'underline' }}>A</span>rtist:
								<Frame
									variant="well"
									className="selected-video__channel-title-container">
									<span className="selected-video__channel-title">
										{selectedVideo.snippet.channelTitle}
									</span>
								</Frame>
							</p>

							<p className="selected-video__channel-desc-container">
								<span style={{ textDecoration: 'underline' }}>D</span>
								escription:
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
			) : (
				<>
					<div className="selected-video">
						<Window>
							<Hourglass
								size={32}
								style={{ margin: 20 }}
							/>
						</Window>
					</div>
				</>
			)}
		</>
	)
}
