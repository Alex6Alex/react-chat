import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import Wrapper from '../app/components/Wrapper/Wrapper'
import StartPage from '../app/components/Auth/StartPage'
import SignUp from '../app/components/Auth/SignUp'

export default class Index extends React.Component {
	render(){
        const Status = ({ code, children }) => (
			<Route render={({ staticContext }) => {
                if (staticContext)
                    staticContext.status = code;
                return children
            }}/>
        );

        const NotFound = () => (
			<Status code={404}>
				<div>
					<h1>Sorry, can’t find that.</h1>
				</div>
			</Status>
        );

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
						<Route exact path='/' render={() => <Redirect to='profile'/>}/>
						<Route exact path='/(profile|messages)/' component={Wrapper}/>
						<Route exact path='/start' component={StartPage}/>
						<Route exact path='/signup' component={SignUp}/>
						<Route component={NotFound}/>
					</Switch>
					<script src='client.min.js'></script>
				</body>
			</html>
		)
	}
}
