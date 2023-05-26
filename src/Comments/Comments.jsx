import {
	Button,
	Frame,
	GroupBox,
	Window,
	WindowContent,
	WindowHeader,
	ScrollView,
} from 'react95'
import '../Comments/Comments.css'

function Comments() {
	return (
		<>
			<Frame
				variant="outside"
				className="comments-container">
				<ScrollView
					style={{ margin: '2em 2em', background: 'white' }}
					className="comments-section">
					<p className="comments-header">Comments</p>
					{/* 		<p className="comments-header">Comments</p> */}
					<p>
						<GroupBox
							variant="flat"
							className="comments-username"
							/* style={{ color: 'teal' }} */
							label="AlanisFan">
							<p className="comments-text">
								Wow! Videos on the internet are so cool :-)
							</p>
						</GroupBox>
						<GroupBox
							variant="flat"
							className="comments-username"
							label="RealJerrySeinfeld">
							<p className="comments-text">I hope the 90s never end</p>
						</GroupBox>
						<GroupBox
							variant="flat"
							className="comments-username"
							label="FastCar">
							<p className="comments-text">
								｡･:*:･ﾟ★,｡･:*:･ﾟ☆ wow ｡･:*:･ﾟ★,｡･:*:･ﾟ☆
							</p>
						</GroupBox>
						<GroupBox
							variant="flat"
							className="comments-username"
							label="Clinton96">
							<p className="comments-text">A/S/L?</p>
							<span
								role="img"
								aria-label="😍">
								😍
							</span>
						</GroupBox>
						<GroupBox
							variant="flat"
							id="comments-username"
							label="Joel"
							style={{ color: 'red' }}>
							<p className="comments-text">
								So this is like a chatroom or something?
							</p>
						</GroupBox>
						<GroupBox
							variant="flat"
							className="comments-username"
							label="MyCousinVinny">
							<p className="comments-text">𝐝𝐨𝐧’𝐭 𝐮𝐧𝐟𝐨𝐥𝐥𝐨𝐰 𝐦𝐞 ლ(ಥ益ಥლ</p>
						</GroupBox>
					</p>
				</ScrollView>
			</Frame>
		</>
	)
}

export default Comments
