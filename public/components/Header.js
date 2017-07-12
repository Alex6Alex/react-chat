import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component{

	render(){
		return(
			<header>
				<div className="header-content">
					<div className="title">
						<h2><Link to='/'>React-Chat</Link></h2>
					</div>
					<div className="search">
						<input id="search_field" type="text" placeholder="Поиск"/>
					</div>
					<div className="signin">
						<p>Вход</p>
					</div>
				</div>
			</header>
		)
	}

}