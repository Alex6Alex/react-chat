import HtmlRender from '../HtmlRender'

export const home = (req, res) => {
    const auth = false;

    if (!auth) {
        res.redirect('/start')
    } else {
        const context = {};

        if(context.url){
            res.writeHead(301, {
                Location: context.url
            });
            res.end();
        } else {
            res.write(HtmlRender.renderHtml(req, context));
            res.end();
        }
    }
};

export const messages = (req, res) => {
    const auth = false;

    if (!auth) {
        res.redirect('/start')
    } else {
        const context = {};

        if(context.url){
            res.writeHead(301, {
                Location: context.url
            });
            res.end();
        } else {
            res.write(HtmlRender.renderHtml(req, context));
            res.end();
        }
    }
};

export const auth = (req, res) => {
    const context = {};

    if(context.url){
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.write(HtmlRender.renderHtml(req, context));
        res.end();
    }
};

export const sign_up = (req, res) => {
    const context = {};

    if(context.url){
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.write(HtmlRender.renderHtml(req, context));
        res.end();
    }
};