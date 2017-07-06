import React from 'react'

export default class Header extends React.Component{

	render(){
		return(
			<header>
				<div className="header-content">
					<div className="title">
						<h2>React-Chat</h2>
					</div>
					<div className="search">
						<input type="text" placeholder="Поиск"/>
					</div>
					<div className="signin">
						<p>Вход</p>
					</div>
				</div>
			</header>
		)
	}

}