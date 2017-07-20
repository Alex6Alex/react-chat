import React from 'react'

export default class Profile extends React.Component {
  render() {
    return(
      <div className='profile'>
        <div className='user-information'>
          <img className='user-avatar' src='../images/no-photo.jpg'/>
          <div className='info'>
            <h2 className='user-name'>Example username</h2>
            <div className='email'>
              <strong>Email: </strong><p>emaillong@example.com</p>
            </div>
            <div className='phone'>
              <strong>Телефон: </strong><p>+79781112233</p>
            </div>
          </div>
          <p className='params'>Редактировать данные</p>
        </div>
        <div className='current-companions'>
          <h2>Список контактов</h2>
          <div className='contact'>
            <img className='contact-photo' src='../images/no-photo.jpg'/>
            <p className='contact-name'>Contact Name</p>
            <div className='contact-info'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
