import React from 'react'
import io from 'socket.io-client'
import autosize from 'autosize'

export default class Chat extends React.Component{
	constructor(){
		super()
		this.state = { messages: [], feedback: '', name: '' }
		this.name = ''

		this.timeout = 0
	}

	//listen events
	componentDidMount() {
		const name = window.prompt('Введите имя')
		this.typing = false

		this.setState({name: name})
		autosize(document.querySelector('textarea'))

		this.socket = io('/')

		this.socket.on('chat', (message) => {
			this.setState({ messages: [
				...this.state.messages,
				message
			]})
		})

		this.socket.on('typing', (data) => {
			if(data !== false){
				this.setState({ feedback: `${data} пишет сообщение...` })
			} else {
				this.setState({ feedback: '' })
			}
		})
	}

	componentWillUnmount(){
		this.setState({messages: []})
	}

	timeoutFunction(){
		this.typing = false
		this.socket.emit('typing', false)
	}

	//emit events
	sendClick(){
		const handle = this.state.name
		const text = document.getElementById('message').value.trim()
		const time = new Date(Date.now())

		if(handle && text){
			const message = {
				text,
				handle,
				time: time.toLocaleTimeString('ru-RU')
			}
			this.socket.emit('chat', message)
			document.getElementById('message').value = ''
		}
	}

	keyPressed(e) {
		const handle = this.state.name
		const text = e.target.value.trim()
		const time = new Date(Date.now())
		time.toLocaleTimeString('ru-RU')

		if (e.charCode === 13 && handle && text){
			e.preventDefault()

			const message = {
				text,
				handle,
				time: time.toLocaleTimeString('ru-RU')
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
			this.timeout = setTimeout(this.timeoutFunction, 2000)
		}
	}

	render() {
		//const feedback = this.state.feedback

		const messages = this.state.messages.map((message, index) => {
			const whoseMessage = message.handle === this.state.name ?
				'your message-block' : 'companion message-block'

			return(
				<div className={whoseMessage} key={index}>
					<div className='message-info'>
						<img className='avatar' src='../../images/no-photo.jpg'/>
						<p className='time'>{message.time}</p>
					</div>
					{ message.handle === this.state.name ? (
						<div className='triangle left'></div>
					) : (
						<div className='triangle right'></div>
					) }
					{ message.handle === this.state.name ? (
						<div className='message-content your_msg'>
							<p>{message.text}</p>
						</div>
					) : (
						<div className='message-content companion_msg'>
							<p>{message.text}</p>
						</div>
					) }
				</div>
			)
		})

		return(
			<div id='mario-chat' className='chat'>
				<div id='chat-window' className='chat-window'>
					<div id='output' className='message-field'>
						{messages}
					</div>
					<div id='feedback' className='feedback'>
					</div>
				</div>
				<div className='typing-field'>
					<textarea rows='1' id='message' className='message-input'
						placeholder='Ваше cообщение' onKeyPress={this.keyPressed.bind(this)}>
					</textarea>
					<img src='../../images/send.png' id='send' className='send-btn'
						onClick={this.sendClick.bind(this)}/>
				</div>
			</div>
		)
	}
}
