import React from 'react'
import Chat from './components/Chat'

export default class Index extends React.Component {
	render(){
		return(
			<html>
				<head>
					<meta charSet="utf-8"/>
					<title>
						Chat application
					</title>
					<link rel="stylesheet" type="text/css" href="./styles/styles.css"/>
				</head>
				<body>
					<Chat/>
					<script src="./client.min.js"></script>
				</body>
			</html>
		)
	}
}