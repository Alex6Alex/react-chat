import React from 'react'

export default class StartPage extends React.Component {
  render() {
    return(
      <div className='start-page'>
        <div className='greeting'>
          <h1 className='greeting-text'>
            Приветствуем Вас в нашем чате
          </h1>
          <h2 className='note'>
            Для продолжения войдите или зарегистрируйтесь
          </h2>
        </div>
        <div className='auth'>
          <div className='auth-block'>
            <div className='sign-in-block'>

            </div>
            <div className='sign-up-block'>

            </div>
          </div>
        </div>
      </div>
    )
  }

}
