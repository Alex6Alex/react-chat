import React from 'react'

import SignIn from './SignIn'

export default class StartPage extends React.Component {
  render() {
    return(
      <div className='start-page'>
        <div className='auth'>
          <div className='auth-block'>
            <SignIn/>
            <div className='sign-up-block'>
              <div className='sign-up-block-main'>
                <h1>Регистрация</h1>
                <p>Если Вы еще не зарегистрировались, то можете сделать это прямо сейчас.
                  После быстрой регистрации Вы сразу сможете общаться со своими друзьями</p>
                <button className='to-sign-up'>Регистрация</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
