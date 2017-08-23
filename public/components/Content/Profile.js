import React from 'react'

export default class Profile extends React.Component {
  render() {
    return(
      <div className='profile'>
        <div className='user-information'>
          <img className='user-avatar' src='../../images/no-photo.jpg'/>
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
        <div className='profile-content'>
          <div className='prefers'>
            <h2>Информация о пользователе</h2>
            <div className='prefers-info'>
              <div className='hobbies'>
                <p className='title'>Интересы</p>
                <div>
                  <p>Интересе1</p>
                  <p>Интерес23</p>
                </div>
              </div>
              <div className='movies'>
                <p className='title'>Фильмы</p>
                <div>
                  <p>Фильм 1</p>
                  <p>Фильм 2</p>
                  <p>Фильм 3</p>
                  <p>Фильм 8</p>
                  <p>Фильм 7</p>
                  <p>Фильм 6</p>
                  <p>Фильм 5</p>
                </div>
              </div>
              <div className='music'>
                <p className='title'>Музыка</p>
                <div>
                  <p>music 1</p>
                  <p>music 2</p>
                  <p>music 3</p>
                  <p>Фиmusicльм 8</p>
                  <p>music 7</p>
                  <p>musicmusic 6</p>
                  <p>Филmusicmusicmusicmusicьм 5</p>
                </div>
              </div>
              <div className='books'>
                <p className='title'>Книги</p>
                <div>
                  <p>bokokkk 1</p>
                  <p>book`` 2</p>
                  <p>booook 3</p>
                  <p>Фиmusicльм 8</p>
                  <p>music 7</p>
                  <p>musicmusic 6</p>
                  <p>Филmusicmusicmusicmusicьм 5</p>
                </div>
              </div>
            </div>
          </div>

          <div className='current-companions'>
            <h2>Список контактов</h2>
            <div className='contact'>
              <img className='contact-photo' src='../../images/no-photo.jpg'/>
              <p className='contact-name'>Contact Name</p>
              <div className='contact-info'>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
