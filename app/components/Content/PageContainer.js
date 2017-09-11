import React from 'react'
import { Switch, Route } from 'react-router-dom'

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
          <Switch>
            <Route exact path='/' component={Profile}/>
            <Route exact path='/messages' component={Chat}/>
          </Switch>
        </div>
      </div>
    )
  }
}
