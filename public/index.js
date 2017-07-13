import React from 'react'
import { Route } from 'react-router-dom'

import SideBar from './components/SideBar'
import InfoBar from './components/InfoBar'
import Chat from './components/Chat'

export default class Index extends React.Component {
	render(){
		const signIn = false

		return(
			<html>
				<head>
					<meta charSet="utf-8"/>
					<title>
						Chat application
					</title>
					<link rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
					integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
					crossOrigin="anonymous"/>
					<link rel="stylesheet" type="text/css" href="./styles/styles.css"/>
				</head>
				<body>
					<div className="wrapper">
						<SideBar/>
						<div id="page_container">
							<Route path='/chat' component={Chat}/>
							<Route path='/side' component={SideBar}/>
						</div>
						<InfoBar/>
					</div>
					<script src="./client.min.js"></script>
				</body>
			</html>
		)
	}
}
