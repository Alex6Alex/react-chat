require('babel-register')({
	presets: ['react', 'es2015', 'stage-0']
})

import express from 'express'
import socket from 'socket.io'
import favicon from 'serve-favicon'
import path from 'path'

//app setup
const app = express()
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
	console.log('server listening on port', port)
}) 
//static files
app.use(express.static('public'))
app.use(require('./routes/index.js'))
//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//socket
const io = socket(server)

io.on('connection', (socket) => {
	console.log('made socket connection', socket.id);

	socket.on('chat', (message) => {
		io.sockets.emit('chat', message)
	});

	socket.on('typing', (data) => {
		socket.broadcast.emit('typing', data);
	});
});