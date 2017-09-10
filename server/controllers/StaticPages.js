import HtmlRender from '../HtmlRender'

export const home = (req, res) => {
    const context = {};

    if(context.url){
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.write(new HtmlRender(req, context).renderHtml());
        res.end();
    }
};

export const messages = (req, res) => {
    const context = {};

    if(context.url){
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.write(new HtmlRender(req, context).renderHtml());
        res.end();
    }
};