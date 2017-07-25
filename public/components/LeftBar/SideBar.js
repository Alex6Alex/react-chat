import React from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends React.Component{
	constructor(){
		super()
	}

	onShowHide(){
	}

	render(){
		return(
			<div className='side-bar'>
				<div className='side-bar-header'>
					<Link to='/'><h1 id='name'>Chat</h1></Link>
					<span className='glyphicon glyphicon-menu-hamburger'
						onClick={this.onShowHide.bind(this)}>
					</span>
				</div>
				<div className='side-bar-content'>
					<h2 id='menu'>Меню</h2>
					<ul className='list'>
						<Link to='/'><li><img className='link-img home' src='../../images/home.png'/>
						<p id='to_acc'>Аккаунт</p></li></Link>
						<Link to='/messages'><li><img className='link-img comment' src='../../images/chat.png'/>
						<p id='to_chat'>Сообщения</p></li></Link>
						<Link to='/side'><li><img className='link-img cog' src='../../images/cogs.png'/>
						<p id='to_params'>Настройки</p></li></Link>
					</ul>
				</div>
			</div>
		)
	}
}
