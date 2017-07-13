import React from 'react'
import { Link } from 'react-router-dom'

export default class InfoBar extends React.Component{
	render(){
		return(
			<div id="info-bar">
				<ul className="list">
					<Link to='/'><li><span className="glyphicon glyphicon-home"></span>
					Аккаунт</li></Link>
					<Link to='/chat'><li><span className="glyphicon glyphicon-comment"></span>
					Чат-комната</li></Link>
					<Link to='/side'><li><span className="glyphicon glyphicon-cog"></span>
					Настройки</li></Link>
				</ul>
			</div>
		)
	}
}
