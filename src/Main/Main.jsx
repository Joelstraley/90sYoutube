import { useState, useEffect } from 'react'
import SearchBar from '../Search/SearchBar'
import SelectedVideo from '../SelectedVideo/SelectedVideo'
import VideoList from '../VideoList/VideoList'
import Loading from '../Loading/Loading'
import youtube from '../assets/youtube'
import './Main.css'

import computerIcon from '../assets/Installation on computer (discs).png'

import { styleReset, Window, WindowContent, WindowHeader } from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import original from 'react95/dist/themes/original'
import pamelaAnderson from 'react95/dist/themes/pamelaAnderson'
import hotdog from 'react95/dist/themes/hotdogStand'
import matrix from 'react95/dist/themes/matrix'
import ninjaTurtles from 'react95/dist/themes/ninjaTurtles'
import counterStrike from 'react95/dist/themes/counterStrike'
import lilac from 'react95/dist/themes/lilac'
import peggysPastels from 'react95/dist/themes/peggysPastels'
import polarized from 'react95/dist/themes/polarized'
import toner from 'react95/dist/themes/toner'

/* Original Windows95 font */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`
function Main() {
	const [videoList, setVideoList] = useState([])
	const [selectedVideo, setSelectedVideo] = useState(null)

	const [loading, setLoading] = useState(true)
	const [percent, setPercent] = useState(0)

	const [theme, setTheme] = useState(original)

	useEffect(() => {
		if (loading) {
			const timer = setInterval(() => {
				setPercent((previousPercent) => {
					if (previousPercent === 100) {
						setLoading(false)
					}

					const diff = Math.random() * 10
					return Math.min(previousPercent + diff, 100)
				})
			}, 500)

			return () => {
				clearInterval(timer)
				setLoading(false)
			}
		}
	}, [loading])

	const onVideoSelect = (video) => {
		setSelectedVideo(video)
	}

	const handleSubmit = async (searchTerm) => {
		try {
			setLoading(true)
			const res = await youtube.get('search', {
				params: {
					part: 'snippet',
					maxResults: 5,
					key: process.env.REACT_APP_YOUTUBE_API_KEY,
					q: searchTerm,
				},
			})
			setSelectedVideo(res.data.items[0])
			res.data.items.shift()
			setVideoList(res.data.items)
		} catch (err) {
			console.error(err)
			setSelectedVideo(null)
		}
	}

	let themeIndex = 0

	const handleTheme = () => {
		themeIndex++
		/* 		if (themeIndex === 10) {
			themeIndex = 0
		} */
		let themes = [
			original,
			pamelaAnderson,
			hotdog,
			matrix,
			ninjaTurtles,
			counterStrike,
			lilac,
			peggysPastels,
			polarized,
			toner,
		]

		setTheme(themes[themeIndex])
	}

	const handlePlay = () => {
		let filesDoneAudio = new Audio('../assets/filesDone.mp3')
		filesDoneAudio.play()
	}

	useEffect(() => {
		handleSubmit('Windows 95')
	}, [])

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<SearchBar
					onFormSubmit={handleSubmit}
					onThemeChange={handleTheme}
					play={handlePlay}
				/>
				{loading ? (
					<Window
						resizable
						className="loading-window">
						<WindowHeader className="loading-window-title">
							<span>Windows NetTube 95 Setup</span>
						</WindowHeader>
						<WindowContent>
							<div className="loading-window-content">
								<img
									src={computerIcon}
									alt="Computer with Discs icon"
									className="loading-computor-icon"
								/>
								<p>
									Setup is preparing the Windows NetTube 95 Setup Wizard, which
									will guide you through the rest of the setup process. Please
									be patient. It is 1995.
								</p>
							</div>
							<div>
								<Loading percent={percent} />
							</div>
						</WindowContent>
					</Window>
				) : (
					<>
						<div className="video-container">
							<SelectedVideo
								selectedVideo={selectedVideo}
								loading={loading}
								percent={percent}
							/>
							<VideoList
								videoList={videoList}
								onVideoSelect={onVideoSelect}
							/>
						</div>
					</>
				)}
			</ThemeProvider>
		</>
	)
}

export default Main
