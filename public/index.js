import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Wrapper from '../app/components/Wrapper/Wrapper'
import StartPage from '../app/components/Auth/StartPage'
import SignUp from '../app/components/Auth/SignUp'

export default class Index extends React.Component {
	render(){
		const auth = false;

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
					<link rel='stylesheet' href='styles/style.css'/>
				</head>
				<body>
					<Switch>
						{ auth ?
							<Route path='/' component={Wrapper}/> :
							<Switch>
								<Route exact path='/start' component={StartPage}/>
								<Route exact path='/signup' component={SignUp}/>
							</Switch>
						}
					</Switch>
					<script src='client.min.js'></script>
				</body>
			</html>
		)
	}
}
