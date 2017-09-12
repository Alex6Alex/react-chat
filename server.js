require('babel-register')({
	presets: ['react', 'es2015', 'stage-0']
});

import express from 'express'
import socket from 'socket.io'
import favicon from 'serve-favicon'
import path from 'path'
import router from './server/routes/index.js'

const sassMiddleware = require('node-sass-middleware');
const srcPath = path.join(__dirname, 'sass');
const destPath = path.join(__dirname, 'public');

//app setup
const app = express();
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
	console.log('server listening on port', port)
});

//for sass
app.use(sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'compressed'
}));

//static files
app.use(express.static('public'));
app.use(router);
//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//socket
const io = socket(server);

io.on('connection', (socket) => {
	console.log('made socket connection', socket.id);

	socket.on('chat', (message) => {
		io.sockets.emit('chat', message)
	});

	socket.on('typing', (data) => {
		socket.broadcast.emit('typing', data);
	});
});
