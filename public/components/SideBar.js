import React from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div className="side-bar">
				<div className="side-bar-header">
					<h1>Chat</h1>
					<span className="glyphicon glyphicon-menu-hamburger"></span>
				</div>
				<div className="side-bar-content">
					<h2>Меню</h2>
					<ul className="list">
						<Link to='/'><li><img className="link-img home" src="../images/home.png"/>
						<p>Аккаунт</p></li></Link>
						<Link to='/chat'><li><img className="link-img comment" src="../images/chat.png"/>
						<p>Чат-комната</p></li></Link>
						<Link to='/side'><li><img className="link-img cog" src="../images/cogs.png"/>
						<p>Настройки</p></li></Link>
					</ul>
				</div>
			</div>
		)
	}
}
