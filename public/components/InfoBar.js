import React from 'react'
import { Link } from 'react-router-dom'

import DatePicker from './DatePicker'

export default class InfoBar extends React.Component{
	render(){
		return(
			<div className="info-bar">
				<div className="info-bar-header">
					<div className="user-info">
						<img className="user-image" src="../images/no-photo.jpg"/>
						<h4>User name</h4>
					</div>
					<span className="glyphicon glyphicon-menu-hamburger"></span>
				</div>
				<div className="info-bar-content">
					<div className="smth">
					</div>
					<DatePicker />
				</div>
			</div>
		)
	}
}
