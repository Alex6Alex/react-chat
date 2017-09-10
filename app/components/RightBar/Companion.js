import React from 'react'

export default class Companion extends React.Component {
  render() {
    return(
      <div className='companion'>
        <h2>Собеседник</h2>
        <img src='../../../public/images/no-photo.jpg' className='companion-avatar'/>
        <div className='companion-info'>
          <p className='companion-name'>Example Name</p>
          <div className='companion-email'>
            <strong>Email: </strong><p>example@mail.rtyy</p>
          </div>
          <div className='companion-phone'>
            <strong>Телефон: </strong><p>+7867675633</p>
          </div>
        </div>
      </div>
    )
  }
}
