import '../VideoList/VideoList.css'
import { Button, ScrollView, Toolbar, Window, WindowHeader } from 'react95'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import VideoItem from '../VideoItem/VideoItem'

export default function VideoList({ videoList, onVideoSelect }) {
	if (!videoList) return <></>

	const listOfVideos = videoList.map((video, id) => (
		<VideoItem
			key={id}
			onVideoSelect={onVideoSelect}
			video={video}
		/>
	))
	return (
		<>
			<div className="related-videos">
				<Window>
					<WindowHeader>
						<div className="selected-video__title">
							<div className="selected-video__title--left">
								<p>Related-Videos.exe</p>
							</div>

							<div className="selected-video__title--right">
								<Button className="selected-video__title--button">__</Button>
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
					<ScrollView>{listOfVideos}</ScrollView>
				</Window>
			</div>
		</>
	)
}
