import React from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends React.Component{
	render(){
		return(
			<div id="side-bar">
				<ul className="list">
					<Link to='/'><li><span className="glyphicon glyphicon-home"></span> 
					Аккаунт</li></Link>
					<Link to='/chat'><li><span className="glyphicon glyphicon-comment"></span> 
					Аккаунт</li></Link>
					<Link to='/side'><li><span className="glyphicon glyphicon-cog"></span> 
					Аккаунт</li></Link>
				</ul>
			</div>
		)
	}
}