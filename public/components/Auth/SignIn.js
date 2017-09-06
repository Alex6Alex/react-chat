import React from 'react'

export default class SignIn extends React.Component {
  render() {
    return(
      <div className='sign-in-block-main'>
        <h1>Вход</h1>
        <form>
          <input id='name' type='text' placeholder='Логин'/>
          <input id='password' type='password' placeholder='Пароль'/>
          <button id='signIn' className='sign-in' type='submit'>Войти</button>
        </form>
      </div>
    )
  }

}
