import React from 'react'
import { Route } from 'react-router-dom'

import Chat from './Chat'

export default class PageContainer extends React.Component {
  render(){
    return(
      <div className='page-container'>
        <div className='page-container-header'>
          <input className='search' type='text' placeholder='Поиск'/>
        </div>
        <div className='page-container-content'>
          <Route path='/chat' component={Chat}/>
        </div>
      </div>
    )
  }
}
