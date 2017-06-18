import React from 'react'
import io from 'socket.io-client'

export default class Home extends React.Component{
	constructor(){
		super()
		this.state = { messages: [], feedback: ''}
		
		this.typing = false
		this.timeout = undefined
	}

	//listen events
	componentDidMount(){
		this.socket = io('/')

		this.socket.on('chat', (message) => {
			this.setState({ messages: [
				...this.state.messages,
				message
			]})
		})

		this.socket.on('typing', (data) => {
			data ? this.setState({ feedback: `${data} пишет сообщение...` }) :
				this.setState({ feedback: '' })
		})
	}

	timeoutFunction(){
		this.typing = false
		this.socket.emit('typing', false)
	}

	//emit events
	sendClick(e){
		const handle = document.getElementById('handle').value
		const text = document.getElementById('message').value
		if(handle && text){
			const message = {
				text, 
				handle
			}
			this.socket.emit('chat', message)
			document.getElementById('message').value = ''
		}
	}

	keyPressed(e){
		const handle = document.getElementById('handle').value
		const text = e.target.value
		if (e.charCode === 13 && handle && message){
			const message = {
				text, 
				handle
			}
			this.socket.emit('chat', message)
			e.target.value = ''
			return false
		}
		if(this.typing === false){
			this.typing = true
			this.socket.emit('typing', handle)
		} else {
			clearTimeout(this.timeout)
			this.timeout = setTimeout(this.timeoutFunction, 2000);
		}
	}

	render(){
		const messages = this.state.messages.map((message, index) => {
			return <div class='msg' key={index}>
				<p>
					<strong>{message.handle}: </strong>
					
				</p>
				<p>
					{message.text}
				</p>
			</div>
		})
		const feedback = <p><em>{this.state.feedback}</em></p>
		return(
			<div id="mario-chat">
				<div id="chat-window">
					<div id="output">{messages}</div>
					<div id="feedback"></div>
				</div>
				<input id="handle" type="text" placeholder="Имя"/>
				<input id="message" onKeyPress={this.keyPressed.bind(this)} type="text" placeholder="Сообщение"/>
				<button id="send" onClick={this.sendClick.bind(this)}>Отправить</button>
			</div>
		)
	}
}