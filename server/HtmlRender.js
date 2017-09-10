import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import Index from '../public/index'

export default class HtmlRender {
    constructor(req, context) {
        this.req = req;
        this.context = context;
    }

    renderHtml() {
        return ReactDOMServer.renderToString(
            <StaticRouter
                location={this.req.url}
                context={this.context}
            >
                <Index />
            </StaticRouter>
        );
    }
}