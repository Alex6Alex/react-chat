import React from 'react'

import SignIn from './SignIn'
import ToSignUp from './ToSignUp'

export default class StartPage extends React.Component {
  render() {
    return(
      <div className='start-page'>
        <div className='auth-block'>
          <SignIn/>
          <ToSignUp/>
        </div>
      </div>
    )
  }

}
