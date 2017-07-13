import React from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends React.Component{
	render(){
		return(
			<div className="side-bar">
				<div className="side-bar-header">
					<h1>Chat</h1>
					<span className="glyphicon glyphicon-menu-hamburger"></span>
				</div>
				<div className="side-bar-content">
					<ul className="list">
						<Link to='/'><li><span className="glyphicon glyphicon-home"></span>
						Аккаунт</li></Link>
						<Link to='/chat'><li><span className="glyphicon glyphicon-comment"></span>
						Чат-комната</li></Link>
						<Link to='/side'><li><span className="glyphicon glyphicon-cog"></span>
						Настройки</li></Link>
					</ul>
				</div>
			</div>
		)
	}
}
