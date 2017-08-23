import React from 'react'

import SideBar from './components/LeftBar/SideBar'
import InfoBar from './components/RightBar/InfoBar'
import PageContainer from './components/Content/PageContainer'

export default class Index extends React.Component {
	render(){
		return(
			<html>
				<head>
					<meta charSet='utf-8'/>
					<title>
						Chat application
					</title>
					<link rel='stylesheet'
					href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
					integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u'
					crossOrigin='anonymous'/>
					<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet'/>
					<link rel='stylesheet' href='./styles/style.css'/>
				</head>
				<body>
					<div className='wrapper'>
						<SideBar/>
						<PageContainer/>
						<InfoBar />
					</div>
					<script src='./client.min.js'></script>
				</body>
			</html>
		)
	}
}
