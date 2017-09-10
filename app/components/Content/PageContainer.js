import React from 'react'
import { Route } from 'react-router-dom'

import Profile from './Profile'
import Chat from './Chat'

export default class PageContainer extends React.Component {
  render(){
    return(
      <div className='page-container'>
        <div className='page-container-header'>
          <input className='search' type='text' placeholder='Поиск'/>
        </div>
        <div className='page-container-content'>
          <Route exact path='/' component={Profile}/>
          <Route path='/messages' component={Chat}/>
        </div>
      </div>
    )
  }
}
