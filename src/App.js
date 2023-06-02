import { useState, useEffect } from 'react'
import { ReactDOM } from 'react-dom'
import logo from './logo.svg'
import './App.css'
import SearchBar from './Search/SearchBar'
import SelectedVideo from './SelectedVideo/SelectedVideo'
import VideoList from './VideoList/VideoList'
import Loading from './Loading/Loading'
import youtube from './assets/youtube'

import {
	AppBar,
	Button,
	Toolbar,
	Window,
	WindowContent,
	ScrollView,
	MenuList,
	MenuListItem,
	Separator,
	styleReset,
} from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original'

import pamelaAnderson from 'react95/dist/themes/pamelaAnderson'

/* Original Windows95 font (optional) */
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
function App() {
	const [videoList, setVideoList] = useState([])
	const [selectedVideo, setSelectedVideo] = useState(null)
	/* const [searchTerm, setSearchTerm] = useState('search') */

	const [loading, setLoading] = useState(true)
	const [percent, setPercent] = useState(0)

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

	useEffect(() => {
		handleSubmit('Windows 95')
	}, [])

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={original}>
				<SearchBar onFormSubmit={handleSubmit} />
				{loading ? (
					<Loading percent={percent} />
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

export default App
