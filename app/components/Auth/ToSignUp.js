import React from 'react'
import { Link } from 'react-router-dom'

export default class ToSignUp extends React.Component {
  render() {
    return(
      <div className='to-sign-up-block'>
        <div className='to-sign-up-block-main'>
          <h1>Регистрация</h1>
          <p>Если Вы еще не зарегистрировались, то можете сделать это прямо сейчас.
            После быстрой регистрации Вы сразу сможете общаться со своими друзьями</p>
          <Link to='/signup' className='link-to-sign-up'><button className='go-to-sign-up'>Регистрация</button></Link>
        </div>
      </div>
    )
  }
}
