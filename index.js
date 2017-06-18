var express = require('express')
var socket = require('socket.io')

//app setup
var app = express()
var port = process.env.PORT || 3000
var server = app.listen(port, () => {
	console.log('server listening on port', port)
}) 
//static files
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index.html')
})

//socket
var io = socket(server)

io.on('connection', function(socket){
	console.log('made socket connection', socket.id);

	socket.on('chat', function(message){
		io.sockets.emit('chat', message)
	});

	socket.on('typing', function(data){
		socket.broadcast.emit('typing', data);
	});
});