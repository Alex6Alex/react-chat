import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import Index from '../public/index'

export default class HtmlRender {
    constructor() {}

    static renderHtml(req, context) {
        return ReactDOMServer.renderToString(
            <StaticRouter
                location={req.url}
                context={context}
            >
                <Index />
            </StaticRouter>
        );
    }
}