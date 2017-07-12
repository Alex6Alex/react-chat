import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Index from './index'
import Chat from './components/Chat'
import SideBar from './components/SideBar'

const app = document.getElementById('app')

ReactDOM.render(
	<BrowserRouter>
		<Index/>
	</BrowserRouter>,
	document
)