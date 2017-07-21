//server-side render
import Router from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ReactRouter from 'react-router'
import { Route, Switch, StaticRouter, matchPath } from 'react-router'

import Chat from '../public/components/Chat'

const Index = require('../public/index.js').default
const router = Router()

const routes = [
	'/',
	'/messages',
	'/side'
]

router.get('*', (req, res) => {

	const match = routes.reduce((acc, route) => matchPath(req.url, {
		path: route,
		exact: true,
		strict: false
	}) || acc, null);
    if (!match) {
        res.status(404).send('<h1>NOOOOO</h1>');
        return;
    }

	const context = {}
	const html = ReactDOMServer.renderToString(
		<StaticRouter
			location={req.url}
			context={context}
		>
			<Index />
		</StaticRouter>
	)

	if(context.url){
		res.writeHead(301, {
			Location: context.url
		})
		res.end()
	} else {
		res.write(html)
		res.end()
	}
})

export default router
