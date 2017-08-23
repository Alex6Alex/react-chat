import React from 'react'
import { Route } from 'react-router-dom'

import DatePicker from './DatePicker'
import Companion from './Companion'

export default class InfoBar extends React.Component{
	render(){
		return(
			<div className='info-bar'>
				<div className='info-bar-header'>
					<div className='user-info'>
						<img className='user-image' src='../../images/no-photo.jpg'/>
						<h4>User name</h4>
					</div>
					<span className='glyphicon glyphicon-menu-hamburger'></span>
				</div>
				<div className='info-bar-content'>
					<Route path='/messages' component={Companion}/>
					<DatePicker />
				</div>
			</div>
		)
	}
}
