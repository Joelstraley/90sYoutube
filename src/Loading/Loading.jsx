import { ProgressBar, WindowContent } from 'react95'

function Loading({ percent }) {
	return (
		<>
			<WindowContent>
				<ProgressBar value={Math.floor(percent)} />
			</WindowContent>
		</>
	)
}

export default Loading
